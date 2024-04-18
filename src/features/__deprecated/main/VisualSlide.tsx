// import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// import { useEffect, useState } from "react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import './visualslide.css';
// import clsx from "clsx";

// const VisualSlide = ({slideTarget}: {slideTarget:(swiepr:SwiperClass) => void}) => {
//   const [isInit, setIsInit] = useState<boolean>(true)
//   const [autoplayProgress, setAutoplayProgress] = useState<number>(0);

//   const onAutoplayTimeLeft = (s: SwiperClass, time: number, progress: number) => {
//     const progressPercentage = 100 * (1 - progress)
//     setAutoplayProgress(progressPercentage);
//   }

//   const visualData = [
//         {
//       text:'아름다운 자연 속에서 즐기는 최상의 그린플레이',
//       bgUrl: 'bg-main-slide-3'
//     },
//     {
//       text:'오랜 역사의 명문 골프장에서 특별한 감동을 선사합니다',
//       bgUrl: 'bg-main-slide-2'
//     },
//     {
//       text:'27홀의 섬세한 필드에서 느끼는 새로운 라운드 경험의 시작',
//       bgUrl: 'bg-main-slide-1'
//     },
//   ]

//   return (
//     <div className="relative w-full h-screen max-h-full">

//       <div className="absolute z-[1000] w-full h-full flex justify-center items-center">
//         <div className="p-[6.4%] lg:p-0 w-full lg:w-[33.44%] h-full flex justify-center items-center">
//           <CircularProgressbar
//             className="w-full h-full"
//             strokeWidth={0.5}
//             value={autoplayProgress}
//             styles={{
//               path: {
//                 stroke: '#D4B156',
//                 // transform: 'rotate(1.25deg)',
//                 transformOrigin: 'center',
//               },
//               trail: {
//                 stroke: 'rgba(255, 255, 255, 0.10)',
//               },
//               background: {
//                 fill: '#D4B156'
//               },
//             }}
//           />
//         </div>
//       </div>

//       <Swiper
//         className="visual-slide"
//         effect={'fade'}
//         loop={true}
//         autoplay={{
//           delay:4000,
//         }}
//         allowTouchMove
//         slidesPerView={1}
//         touchRatio={0}
//         modules={[Autoplay, EffectFade]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         onSwiper={(swiper) => {slideTarget(swiper)}}
//         onInit={() => setIsInit(false)}
//       >
//         {visualData.map((data, index) =>
//           <SwiperSlide key={index} className={clsx(isInit && 'load-first-slide',"bg-black w-full h-auto")}>
//             <div className={`bg-wrap w-full h-full top-0 absolute left-0 bottom-0 right-0 m-auto flex justify-center items-center ${data.bgUrl} bg-cover bg-center`} />
//             <div className="absolute text-center">
//               <span className="text-sm lg:text-base font-bold lg:font-extrabold lg:opacity-50 text-white tracking-[0.7px] lg:tracking-[1.6px]">MICHELAN GOLF TOUR</span>
//               <p className="mt-5 lg:mt-[30px] mx-auto min-w-[66.7%] lg:min-w-[380px] max-w-[77.4%] lg:max-w-[460px] text-[22px] lg:text-[34px] text-white font-bold leading-[140%] break-keep">{data.text}</p>
//             </div>
//           </SwiperSlide>
//         )}
//       </Swiper>
//     </div>
//   )
// }

// export default VisualSlide
