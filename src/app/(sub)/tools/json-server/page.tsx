"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/shared/utils/utils";

import TwTag from "@/widgets/tw-tag/TwTag";
import TextToHtml from "@/widgets/TextToHtml";
import { contentHtml } from "@/features/fsd/designSystem/contentHtml";

const baseUrl = `${process.env.NEXT_PUBLIC_TODOS}`;

type todoListProps = {
  id: string;
  description: string;
  isCompleted: boolean;
};

const JsonServer = () => {
  // 데이터 추가하기
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    const { data } = await axios.post(baseUrl, {
      description,
      isCompleted: false, // db의 isCompleted 속성 업데이트
    });
    alert(data.description + "이 추가되었습니다.");
    setDescription("");
    await readList();
  };

  // 데이터 읽기
  const [todoList, setTodoList] = useState([]);
  const readList = async () => {
    const { data } = await axios.get(baseUrl);
    // console.log("setTodaList => ", todoList);
    setTodoList(data);
  };

  // 업데이트
  const toggleCompleteBtn = async (id: string, isCompleted: boolean) => {
    await axios.patch(`${baseUrl}/${id}`, {
      isCompleted: !isCompleted,
    });
    await readList();
  };

  // 삭제
  const deleteTodoBtn = async (id: string) => {
    await axios.delete(`${baseUrl}/${id}`);
    await readList();
  };

  useEffect(() => {
    // data 요청 테스트
    // fetch(baseUrl)
    //   .then((response) => response.json())
    //   .then((json) => console.log("json => ", json));

    (async () => {
      await readList();
    })();
  }, []);

  return (
    <>
      <div className="w-full mb-20">
        <div className="flex w-full">
          <input
            className="flex-1 py-4 px-6 border border-gray-300"
            placeholder="할 일을 추가해주세요."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="bg-black text-white py-4 px-6" onClick={handleSubmit}>
            추가하기
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-10">할 일 목록</h2>
        <ul>
          {todoList?.map((list: todoListProps) => (
            <li className="flex items-center text-lg border-b-[1px] py-4" key={list.id} style={{ borderColor: "#ddd" }}>
              <div className={cn("flex-1", list.isCompleted && "line-through text-light-gray")}>{list.description}</div>
              <div>
                <button
                  className="bg-gray2 py-1 px-3 rounded-md"
                  onClick={() => toggleCompleteBtn(list.id, list.isCompleted)}
                >
                  {list.isCompleted ? "완료" : "미완료"}
                </button>
                <button className="bg-gray2 py-1 px-3 rounded-md ml-2" onClick={() => deleteTodoBtn(list.id)}>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <TwTag className="lg:mb-[223px]">
        <TextToHtml html={contentHtml} />
      </TwTag>
    </>
  );
};

export default JsonServer;
