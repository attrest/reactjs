// ** next.config.js에서 output: "export"로 설정시 동작 실패함
import { NextRequest, NextResponse } from "next/server";

// 타입 정의 (필요에 따라 수정)
interface Params {
  id: string;
}

interface ItemData {
  id: string;
  name: string;
  description: string;
}

interface MockData {
  [key: string]: ItemData; // 인덱스 시그니처 추가
}

const mockData: MockData = {
  "1": { id: "1", name: "Item One", description: "This is item one" },
  "2": { id: "2", name: "Item Two", description: "This is item two" },
  "3": { id: "3", name: "Item Three", description: "This is item three" },
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  console.log("Handling GET request for ID:", params.id);
  const data = mockData[params.id];
  console.log("Data found:", data);

  if (data) {
    return NextResponse.json(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return NextResponse.json(
      { message: "Item not found" },
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
