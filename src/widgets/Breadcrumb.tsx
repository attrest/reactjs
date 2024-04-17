"use client";

import { SubInfoItemType } from "@/entities/store/globalSlice";

const Breadcrumb = (data: SubInfoItemType) => {
  return (
    <nav className="font-pretendard text-sm mt-7.5 flex" aria-label="Breadcrumb">
      <ol role="list" className="flex space-x-4">
        <li className="flex">
          <div className="flex items-center">
            <a href="/" className="text-light-gray">
              HOME
            </a>
          </div>
        </li>
        <li key={data.id} className="flex">
          <div className="flex items-center">
            <a
              href={"/" + data.id}
              className="relative text-sm font-medium text-gray-500 hover:text-gray-700 
              before:block before:contnet-[''] before:w-[3px] before:h-[3px] before:rounded-full before:absolute before:bg-light-gray before:left-[-9px] before:top-2"
              aria-current={"page"}
            >
              {data.title}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
