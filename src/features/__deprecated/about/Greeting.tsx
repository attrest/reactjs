'use client'

import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Image from "next/image";

const Greeting = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="mx-auto max-w-[1620px] pb-0 lg:pb-[213px]">
      <div className="block lg:flex items-center justify-center gap-15 xl:gap-30"> 
        <div className="relative ml-0 lg:ml-[160px] lg:-mt-[250px] xl:mt-0">
          <div className="absolute z-[2] top-[75%] lg:top-[235px] left-[0px] lg:-left-[334px] w-[80%] lg:w-[406px]">
            <div data-aos="fade-up" className="w-full">
              <Image className="w-full hidden lg:block" src="/img/about/pic02.png" alt="" width={406} height={581} />
              <Image className="w-full block lg:hidden" src="/img/about/pic02-mo.png" alt="" width={279} height={203} />
            </div>
          </div>
          <div className="relative z-[1] lg:z-[0] text-right">
            <div className="ml-auto block w-[68%] lg:w-auto xl:w-[578px] h-auto">
              <Image className="" src="/img/about/pic01.webp" alt="" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} priority/>
            </div>
          </div>
          <div className="absolute -z-[1] -left-[200px] lg:-left-[519px] top-[60px] lg:top-[104px] w-[100%] h-[75%] xl:w-[60%] xl:h-[529px]">            
            <Image className="w-full h-full" src="/img/about/pic03.webp" alt="" width={0} height={0} sizes="100vw"  />
          </div>
        </div>
        <div className="mt-40 md:mt-[35%] lg:mt-0 pb-[100px] lg:pb-0 px-6 lg:px-0">
          <span className="text-base font-bold text-black lg:text-gray lg:tracking-[1.6px]">MICHELAN GOLF TOUR</span>
          <p className="mt-4 text-[22px] lg:text-4xl font-semibold leading-[140%] text-black">자연과 어우러져<br/>즐기는 여유와 품격</p>
          <div className="pr-[50px] xl:pr-0 mt-7.5 lg:mt-15 font-pretendard text-sm lg:text-base font-normal text-gray leading-[22px] break-keep">
            안녕하세요 <span className="font-semibold">(주)미켈란 골프투어</span>입니다.<br /><br />
            <span className="font-semibold">(주)미켈란 골프투어</span>는 2023년 싱가폴 남동쪽 인도네시아 바탐섬에 위치한&nbsp;<br className="hidden lg:block" />
            <span className="font-semibold">팜스프링스cc</span>와 10년간 공동 운영 협약을 맺었습니다.<br /><br />
            <span className="font-semibold">팜스프링스cc</span>는 인도네시아 오랜 역사의 sinarmas 그룹 소유 골프장으로&nbsp;<br className="hidden lg:block" />
            lARRY NELSON이 설계한 <span className="font-semibold">palm, island, resort</span> 코스를 보유한 <span className="font-semibold">27홀 골프장</span>입니다.<br /><br />
            <span className="font-semibold">(주)미켈란 골프투어</span>는 (주)미켈란 스포츠센터 및 서울시 골프협회장을 역임하신&nbsp;<br className="hidden lg:block" />
            장붕익회장, 전국 각지의 골프협회 활동 경험있는 주주분들로 구성되어 있습니다. <br />
            조만간 인천~바탐 간 직항이 예정됩니다.<br />
            골프를 사랑하시는 여러분들의 여가를 <span className="font-semibold">(주)미켈란 골프투어</span>가 책임지겠습니다.
            <strong className="block mt-10 text-base font-semibold text-black">(주)미켈란골프투어 대표이사 이동익</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting