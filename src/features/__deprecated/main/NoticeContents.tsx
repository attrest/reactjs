// "use client";

// import React from "react";
// import Link from "next/link";
// import NoticeSlide from "./NoticeSlide";
// import { useNotices } from "@/entities/api/notice";
// import { format } from "date-fns";
// import { decode } from "html-entities";

// const NoticeContents = () => {
//   const { data } = useNotices(0, undefined, undefined, 3);

//   return (
//     <div className="relative flex lg:items-center justify-center lg:justify-between flex-col gap-7.5 lg:px-[5.21%] h-full text-left text-white z-[1] before:absolute before:block lg:before:hidden before:content-[''] before:w-[1px] before:h-[15%] before:left-[24px] before:bottom-0 before:bg-white">
//       <div className="px-6 lg:px-0 lg:w-full">
//         <span className="text-sm lg:text-base font-semibold tracking-[0.7px] lg:tracking-normal">NOTICE</span>
//         <p className="mt-[14px] lg:mt-4 text-[22px] lg:text-4xl font-bold lg:font-semibold text-white">
//           미켈란 골프투어의 소식
//         </p>
//         <div className="mt-7.5 lg:mt-[5px] text-left lg:text-right">
//           <Link
//             className="relative h-[22px] min-w-[120px] after:absolute after:block after:content-[''] after:left-[calc(100%_-_40px)] after:top-[49%] after:max-w-[40px] after:w-full after:h-[1px] after:bg-gold lg:hover:after:animate-hoverLine"
//             href={"/notice"}
//           >
//             {" "}
//             <span className="pr-[46px] text-sm lg:text-lg text-gold font-medium font-pretendard">전체보기</span>
//           </Link>
//         </div>
//       </div>
//       <div className="hidden lg:grid grid-cols-3 grow shrink-0 justify-between gap-[16px] w-full">
//         {data?.content.map((notice, index) => (
//           <Link href={"/notice/detail/" + notice.id} key={index} className="border border-white-100 p-[40px] basis-1/3">
//             <span className="block text-base font-semibold text-gray2">News</span>
//             <p className="mt-4 w-[75.7%] min-h-16 text-ellipsis line-clamp-2 break-keep text-2xl font-blod leading-[140%]">
//               {decode(notice.title)}
//             </p>
//             <span className="block mt-15 text-sm lg:text-base text-gray2 font-normal font-pretendard">
//               {format(new Date(notice.modDt), "yyyy.MM.dd")}
//             </span>
//           </Link>
//         ))}
//       </div>
//       {data && <NoticeSlide noticeList={data?.content} />}
//     </div>
//   );
// };

// export default NoticeContents;
