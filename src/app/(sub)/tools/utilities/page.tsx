"use client";

import React, { useState, useEffect } from "react";

function FileCreator() {
  const [folderName, setFolderName] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isInit, setIsInit] = useState<boolean>(false);

  const apiHandlerSubmit = async (event?: React.FormEvent, { type = "create" } = {}) => {
    event?.preventDefault();
    console.log(`Handling a ${type} type form submission.`);
    setLoading(true);

    try {
      const url = new URL("/api/files", window.location.href);
      url.searchParams.append("folderPath", folderName);
      url.searchParams.append("fileName", fileName);
      url.searchParams.append("type", type);

      const response = await fetch(url.toString(), {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: any = await response.json();
      console.log("api data => ", data);
      setResponse(data);
    } catch (error: any) {
      setResponse({ message: `Error: ${error.message}` });
    } finally {
      setLoading(false);
      if (!isInit) setIsInit(true); // 초기화 체크
    }
  };

  useEffect(() => {
    apiHandlerSubmit();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Create a File(** 사용시 next.config.js의 output: {"export"} 주석 처리 할 것)
      </h1>
      <form onSubmit={(e) => apiHandlerSubmit(e, { type: "create" })}>
        <div>
          <label htmlFor="folderName">Folder Name:</label>
          <input
            id="folderName"
            type="text"
            placeholder="폴더명 입력"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fileName">File Name:</label>
          <input
            id="fileName"
            type="text"
            placeholder="파일명 입력"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          Create File
        </button>
      </form>
      {response && (
        <div>
          <p>{response.message}</p>
          {response.path && <p>File Path: {response.path}</p>}
        </div>
      )}
      {isInit && <pre style={{ whiteSpace: "wrap" }}>{JSON.stringify(response)}</pre>}
    </div>
  );
}

export default FileCreator;
