// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar } from "swiper/modules";
// import { useState } from "react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "./slide.css";
// import { Button } from "@/widgets/ui/button";
// import { LeftIcon, RightIcon } from "@/widgets/Svg";
// import { NoticeItem } from "@/shared/types/__deprecated/notice";
// import Link from "next/link";
// import { format } from "date-fns";
// import { decode } from "html-entities";

// const NoticeSlide = ({ noticeList }: { noticeList: NoticeItem[] }) => {
//   const [swiperRef, setSwiperRef] = useState<any>();

//   const prevHandler = () => {
//     swiperRef.slidePrev();
//   };

//   const nextHandler = () => {
//     swiperRef.slideNext();
//   };

//   return (
//     <>
//       <div className="block lg:hidden relative w-full pr-4 pl-6">
//         <Swiper
//           className="custom-slide"
//           slidesPerView={"auto"}
//           spaceBetween={16}
//           loop={true}
//           modules={[Scrollbar]}
//           scrollbar={{
//             hide: false,
//           }}
//           grabCursor
//           //onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => setSwiperRef(swiper)}
//         >
//           {noticeList.map((notice, index) => (
//             <SwiperSlide key={index} className="w-auto">
//               <Link href={"/notice/detail/" + notice.id} className="block border border-white py-7.5 px-6 w-[288px]">
//                 <span className="block text-sm font-normal text-gray2">News</span>
//                 <p className="mt-4 w-[84%] min-h-12 text-ellipsis line-clamp-2 break-all text-base font-blod">
//                   {decode(notice.title)}
//                 </p>
//                 <span className="block mt-7.5 text-sm font-normal text-gray2 font-pretendard">
//                   {format(new Date(notice.modDt), "yyyy.MM.dd")}
//                 </span>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="absolute bottom-0 left-5 z-[1]">
//           <Button onClick={prevHandler} size="icon">
//             <LeftIcon color={["#fff", "#fff"]} sizeW="20" sizeH="20" />
//             <span className="sr-only">Prev</span>
//           </Button>
//           <Button onClick={nextHandler} size="icon">
//             <RightIcon color={["#fff", "#fff"]} sizeW="20" sizeH="20" />
//             <span className="sr-only">next</span>
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NoticeSlide;
