"use client";

import React, { useState } from "react";
import { FileList } from "./FileList";

function FileCreator() {
  const [defaultPath, setDefaultPath] = useState<string>("src/stories");
  const [requestType, setRequestType] = useState<string>("default");
  const [folderName, setFolderName] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apiHandlerSubmit = async (event?: React.FormEvent, { type = requestType, path = "" } = {}) => {
    event?.preventDefault();
    console.log(`Handling a ${type} type form submission.`);
    setLoading(true);

    try {
      const url = new URL("/api/files", window.location.href);
      url.searchParams.append("folderPath", folderName);
      url.searchParams.append("fileName", fileName);
      url.searchParams.append("requestType", type);
      url.searchParams.append("defaultPath", path);

      const response = await fetch(url.toString(), {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: any = await response.json();
      // console.log("api data => ", data);
      setResponse(data);
    } catch (error: any) {
      setResponse({ message: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Create a File(** 사용시 next.config.js의 output: {"export"} 주석 처리 할 것)
      </h1>
      <form onSubmit={(e) => apiHandlerSubmit(e, { type: requestType, path: defaultPath })}>
        <div className="border mt-5">
          <label htmlFor="defaultPath">기본 경로:</label>
          {/* 
          ** 셀렉트박스로 변경
          스토리 생성 시 : src/stories
          이미지 파일 목록 가져오기 시 : public/img 
          */}
          <input
            id="defaultPath"
            type="text"
            value={defaultPath}
            onChange={(e) => {
              setDefaultPath(e.target.value);
              if (e.target.value !== "src/stories") {
                setRequestType("default");
              }
            }}
            // required
          />
        </div>

        {defaultPath === "src/stories" && (
          <>
            <div className="border mt-5">
              <h2>요청 타입:</h2>
              <input
                id="getFileList"
                type="radio"
                value="default"
                name="requestType"
                defaultChecked
                onChange={(e) => setRequestType(e.target.value)}
                // required
              />
              <label htmlFor="getFileList">파일 목록 가져오기</label>
              <input
                id="createStoryFile"
                type="radio"
                value="create"
                name="requestType"
                onChange={(e) => setRequestType(e.target.value)}
                // required
              />
              <label htmlFor="createStoryFile">스토리 파일 생성하기</label>
              <p className="mt-5">Current Request Type: {requestType}</p>
            </div>

            {requestType === "create" && (
              <>
                <div className="border mt-5">
                  <label htmlFor="folderName">생성할 폴더 이름:</label>
                  <input
                    id="folderName"
                    type="text"
                    placeholder="폴더명 입력"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    // required
                  />
                </div>

                <div className="border mt-5">
                  <label htmlFor="fileName">File Name:</label>
                  <input
                    id="fileName"
                    type="text"
                    placeholder="파일명 입력"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    // required
                  />
                </div>
              </>
            )}
          </>
        )}

        <button type="submit" disabled={loading} className="mt-5">
          {requestType === "create" ? "파일 생성하기" : "목록 가져오기"}
        </button>
      </form>
      {response && (
        <div>
          <p>{response.message}</p>
          {response.path && <p>File Path: {response.path}</p>}
          {requestType === "create" && <p>생성 경로: {`${defaultPath}/${folderName}/${fileName}.stories.tsx`}</p>}
        </div>
      )}
      {response && (
        <>
          {/* <pre className="max-h-[10rem] overflow-auto whitespace-pre-wrap border">{JSON.stringify(response)}</pre> */}
          <FileList files={response.files} className="border" />
        </>
      )}
    </div>
  );
}

export default FileCreator;
