import { NextRequest, NextResponse } from "next/server";
import { readdir, stat, mkdir, writeFile } from "fs/promises";
import path from "path";

interface DirectoryContent {
  name: string;
  type: "file" | "folder";
  contents?: DirectoryContent[];
}

// 폴더 목록을 순회하는 재귀함수
async function listDirectoryContents(dirPath: string): Promise<DirectoryContent[]> {
  const entries = await readdir(dirPath, { withFileTypes: true });
  return Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        const subDirectoryContents = await listDirectoryContents(entryPath);
        return { name: entry.name, type: "folder", contents: subDirectoryContents };
      } else {
        return { name: entry.name, type: "file" };
      }
    })
  );
}

// 파라미터를 받아서 json 반환 처리
export async function GET(request: NextRequest) {
  const reqType = request.nextUrl.searchParams.get("type") || "default"; // 요청으로부터 type 가져오기
  const defaultPaths = "src/stories".split("/");
  const storyDefaultPath = path.join(process.cwd(), ...defaultPaths);

  try {
    if (reqType === "create") {
      const folderName = request.nextUrl.searchParams.get("folderPath") || "newStory"; // 요청으로부터 폴더명 가져오기
      const baseFileName = request.nextUrl.searchParams.get("fileName") || "new"; // 요청으로부터 파일명 가져오기

      const storyCreatePath = path.join(process.cwd(), ...defaultPaths, folderName);
      const fileContent = `
import type { Meta, StoryObj } from "@storybook/react";
const BlankComponent = ({...props}) => <></>;

const meta: Meta<typeof BlankComponent> = {
  title: "Widgets/UI/1. 기본 UI",
  component: BlankComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "기본 UI Dashboard",
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof BlankComponent>;

export default meta;

export const All: StoryObj<typeof BlankComponent> = {
  args: {},
  render: (args) => {
    return (
      <BlankComponent {...args} />
    );
  },
};`;

      // 폴더 존재 여부 확인 후 생성
      try {
        await stat(storyCreatePath);
        console.log("Directory already exists.");
      } catch (err: unknown) {
        if (err instanceof Error && (err as NodeJS.ErrnoException).code === "ENOENT") {
          await mkdir(storyCreatePath, { recursive: true });
          console.log("Directory created.");
        } else {
          throw err;
        }
      }

      // 파일 이름에 번호 추가
      let counter = 0;
      let filePath = path.join(storyCreatePath, `${baseFileName}.stories.tsx`);
      while (true) {
        try {
          await stat(filePath);
          counter++;
          const newFileName = `${baseFileName}_${counter}.stories.tsx`;
          filePath = path.join(storyCreatePath, newFileName);
        } catch (err: unknown) {
          if (err instanceof Error && (err as NodeJS.ErrnoException).code === "ENOENT") {
            await writeFile(filePath, fileContent, "utf8");
            break;
          } else {
            throw err;
          }
        }
      }
    } // END :: if (reqType === "create")

    // 파일 및 폴더 목록 생성
    const files = await listDirectoryContents(storyDefaultPath); // promise일 경우 awit 사용
    return new NextResponse(JSON.stringify({ files: files, message: "Folder and file created successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: unknown) {
    // Error 처리
    if (err instanceof Error) {
      // 오류가 Error 인스턴스일 경우
      return new NextResponse(JSON.stringify({ error: "Unable to scan directory", details: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      // 오류 타입이 Error 인스턴스가 아닐 경우
      return new NextResponse(JSON.stringify({ error: "Unknown error occurred" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
