// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ReviewItem } from "@/shared/types/__deprecated/review";
// import { format } from "date-fns";
// import { ReviewCharacter } from "@/widgets/Svg";
// import { StarIcon } from "../CardList";
// import BoardMenu from "./BoardMenu";
// import { decode } from "html-entities";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "./style.css";

// const ReviewDetailItem = ({ data }: { data: ReviewItem }) => {
//   var check_eng = /[a-zA-Z]/; // 문자
//   var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

//   const nameMasking = (name: string) => {
//     if (check_eng.test(name)) {
//       //영문인 경우
//       return (name = name.replace(/(?<=.{3})./gi, "*"));
//     }
//     if (check_kor.test(name)) {
//       // 한글인 경우
//       if (name.length <= 2) {
//         return name.replace(name.substring(0, 1), "*");
//       }

//       return name[0] + "*".repeat(name.substring(1, name.length - 1).length) + name[name.length - 1];
//     }
//   };

//   return (
//     <>
//       <div className="pt-15 pb-6 bg-white lg:border-b lg:border-gray">
//         <div className="flex mb-4 lg:mb-0 lg:hidden items-center space-x-1.5">
//           <StarIcon rating={Number(data.rating)} />
//         </div>
//         <div className="relative">
//           <h2 className="font-semibold text-black lg:text-4xl text-xl pr-10 lg:pr-0">{decode(data.title)}</h2>
//           <div className="flex justify-between mt-2.5">
//             <div className="flex items-center lg:space-x-7.5">
//               <div className="hidden lg:flex items-center space-x-1.5">
//                 <StarIcon rating={Number(data.rating)} />
//               </div>
//               <div className="font-pretendard flex items-center text-gray text-sm lg:text-14">
//                 <span>{nameMasking(data.regId)}</span>
//                 <span className="mx-2 w-px h-[11px] bg-gray"></span>
//                 <span>{format(new Date(data.regDt), "yyyy.MM.dd")}</span>
//               </div>
//             </div>
//             <div className="absolute -top-1 right-0 lg:relative lg:top-auto">
//               <BoardMenu />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pt-15 pb-25">
//         <div>
//           <pre>
//             <div className="font-pretendard text-sm lg:text-lg break-all text-wrap whitespace-pre-wrap word-wrap-break-word">
//               {decode(data.contents)}
//             </div>
//           </pre>
//           {data.files.length > 0 && (
//             <div className="mt-15 -mr-6 lg:mr-0 w-[calc(100%_+_24px)] lg:w-full h-[310px] lg:h-[507px] overflow-hidden">
//               <Swiper
//                 className="review-slide"
//                 slidesPerView={"auto"}
//                 spaceBetween={10}
//                 breakpoints={{
//                   1024: {
//                     spaceBetween: 30,
//                   },
//                 }}
//                 modules={[Scrollbar]}
//                 scrollbar={{
//                   hide: false,
//                 }}
//                 grabCursor
//               >
//                 {data.files.map((item) => (
//                   <SwiperSlide key={item.fileId} className="w-full">
//                     <div className="w-[275px] h-[276px] lg:w-[466px] lg:h-[467px]">
//                       <Image
//                         src={`${process.env.NEXT_PUBLIC_FILE_PATH}/${item.fileId}`}
//                         width={466}
//                         height={467}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           )}
//         </div>
//         {data.comment && (
//           <div className="mt-22 py-6 px-5 lg:p-10 bg-gray3 border border-gray2 font-pretendard">
//             <div className="hidden lg:flex flex-wrap flex-row justify-between items-center">
//               <div className="flex items-center space-x-4">
//                 <ReviewCharacter />
//                 <span className="text-xl text-black font-medium">관리자</span>
//               </div>
//               <span className="text-gray6 text-sm">{format(new Date(data.modDt), "yyyy.MM.dd")}</span>
//             </div>
//             <div className="flex items-center lg:hidden">
//               <div className="w-10 h-10">
//                 <ReviewCharacter sizeW="100%" sizeH="100%" />
//               </div>
//               <div className="ml-2.5">
//                 <p className="text-base text-black font-medium">관리자</p>
//                 <span className="text-gray6 text-xs">{format(new Date(data.modDt), "yyyy.MM.dd")}</span>
//               </div>
//             </div>
//             <div className="mt-7.5">
//               <pre>
//                 <div className="font-pretendard text-sm lg:text-lg text-wrap break-all whitespace-pre-wrap word-wrap-break-word">
//                   {decode(data.comment)}
//                 </div>
//               </pre>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="w-full border-t border-gray2 font-pretendard">
//         <div className="group flex items-center w-full space-x-7.5 lg:py-7 py-4 lg:px-5 px-4 border-b border-gray2">
//           <span className="text-sm lg:text-base text-black font-semibold">이전글</span>
//           {data.prevReview && data.prevReview.id ? (
//             <Link
//               href={`/review/detail/${data.prevReview.id}`}
//               className="w-[calc(100%_-_72px)] inline-block items-center truncate text-base text-gray"
//             >
//               {decode(data.prevReview.title)}
//             </Link>
//           ) : (
//             <span className="w-[calc(100%_-_72px)] inline-block items-center truncate text-base text-gray">
//               이전글이 없습니다
//             </span>
//           )}
//         </div>
//         <div className="group flex items-center w-full space-x-7.5 lg:py-7 py-4 lg:px-5 px-4 border-b border-gray2">
//           <span className="text-sm lg:text-base text-black font-semibold">다음글</span>
//           {data.nextReview && data.nextReview.id ? (
//             <Link
//               href={`/review/detail/${data.nextReview.id}`}
//               className="w-[calc(100%_-_72px)] truncate text-base text-gray"
//             >
//               {decode(data.nextReview.title)}
//             </Link>
//           ) : (
//             <span className="w-[calc(100%_-_72px)] truncate text-base text-gray">다음글이 없습니다</span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReviewDetailItem;
