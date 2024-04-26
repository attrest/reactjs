import React, { useState } from "react";
import Image from "next/image";

interface File {
  name: string;
  type: "file" | "folder";
  contents?: File[];
}

interface Props {
  files: File[];
  className?: string;
}

interface ImageInfo {
  width: number;
  height: number;
  path: string;
}

export const FileList: React.FC<Props> = ({ files, className }) => {
  // 이미지 정보 출력
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, filePath: string) => {
    const img = event.target as HTMLImageElement;
    setImageInfo({
      width: img.naturalWidth,
      height: img.naturalHeight,
      path: filePath,
    });
  };

  // 재귀적으로 파일 및 폴더 이름을 출력
  let currentFolder: string = "";
  const renderFiles = (files: File[]) => {
    return files.map((file, index) => {
      if (file.type === "folder" && file.contents) {
        currentFolder = file.name;
        return (
          <div key={index}>
            <div className="font-bold text-xl">[{file.name}]</div>
            <div
              style={{
                paddingLeft: "20px",
                display: "flex",
                flexFlow: "wrap",
                backgroundColor: "#eee",
                padding: "0.5rem",
              }}
            >
              {renderFiles(file.contents)}
            </div>
          </div>
        );
      } else {
        if (/\.(jpg|jpeg|png|webp|gif|bmp|tif|tiff|svg|avif)$/i.test(file.name)) {
          const filePath = `/img/${currentFolder}/${file.name}`;
          return (
            <>
              <Image
                key={index}
                src={filePath}
                width={100}
                height={100}
                alt=""
                layout="fixed"
                title={file.name}
                onClick={(e) => handleImageClick(e, filePath)}
              />
              {imageInfo && imageInfo.path === filePath && (
                <ul>
                  <li>
                    Image Original Size: {imageInfo.width} x {imageInfo.height}
                  </li>
                  <li>Image Real Path: {imageInfo.path}</li>
                </ul>
              )}
            </>
          );
        } else {
          return <div key={index}>{file.name}</div>;
        }
      }
    });
  };

  return <div {...(className && { className: className })}>{renderFiles(files)}</div>;
};
