"use client"

import React from "react"
import { SvgIcon01, SvgIcon02, SvgIcon03, SvgIcon04, SvgIcon05, SvgIcon06 } from "@/components/ReservationSvg"

interface ContentProps {
  title: string;
  engTitle: string;
  strong1: string;
  content1: string;
  SvgComponent1: React.ReactNode;
  strong2: string;
  content2: string;
  SvgComponent2: React.ReactNode;
}

const ServiceContent = () => {

  const serviceData = [
    {
      title: "편리한 서비스",
      engTitle: "Convenience",
      strong1: "고객 맞춤 서비스",
      content1: "일정과 편의에 따라 유연한 스케줄 조정이 가능합니다.",
      SvgComponent1: <SvgIcon01 />,
      strong2: "최적의 제안",
      content2: "날씨, 기온 등을 고려해 최적의 티타임을 제안합니다.",
      SvgComponent2: <SvgIcon02 />,
    },
    {
      title: "믿을 수 있는 시스템",
      engTitle: "Reliable",
      strong1: "현지 가이드 동행",
      content1: "언어장벽의\n불편을 해소합니다.",
      SvgComponent1: <SvgIcon03 />,
      strong2: "사고 예방",
      content2: "우려의 소지가 있는 사항을 사전에 안내합니다.",
      SvgComponent2: <SvgIcon04 />,
    },
    {
      title: "최상의 경험",
      engTitle: "Joyful",
      strong1: "효율적인 체력관리",
      content1: "균형잡힌 휴식과 라운딩의 진행이 가능합니다.",
      SvgComponent1: <SvgIcon05 />,
      strong2: "전방위적인 케어",
      content2: "이동,숙박,식사 등 필요한 모든 편의를 제공합니다.",
      SvgComponent2: <SvgIcon06 />,
    }
  ]
  
  const ContentSection = ({ title, engTitle, strong1, content1, SvgComponent1, strong2, content2, SvgComponent2 } : ContentProps) => (
    <div className="inline-block mr-4 last:mr-0 xl:mr-0 xl:block w-[307px] xl:w-[33.33%] py-[40px] pl-7.5 pr-[25px] bg-white">
      <span className="text-base font-bold text-light-gray tracking-widest">{engTitle}</span>
      <p className="text-[22px] font-semibold text-black">{title}</p>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <strong className="text-base lg:text-16 font-bold text-black font-pretendard font-medium">{strong1}</strong>
          <p className="w-[150px] break-keep mt-4 font-pretendard text-sm font-normal text-light-gray leading-5">{content1}</p>
        </div>
        <div>{SvgComponent1}</div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <div>
          <strong className="text-base lg:text-16 font-bold text-black font-pretendard font-medium">{strong2}</strong>
          <p className="w-[160px] break-keep mt-4 font-pretendard text-sm font-normal text-light-gray leading-5">{content2}</p>
        </div>
        <div>{SvgComponent2}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-[#F7F7F7] pt-15 lg:pt-30 pb-[100px] lg:pb-[140px]">
        <span className="block text-center text-base font-bold lg:font-bold text-light-gray tracking-widest">MICHELAN GOLF TOUR</span>
        <p className="mt-4 text-center text-[22px] lg:text-4xl font-bold text-[#424242] lg:text-black">제공 서비스 </p>
        <div className="overflow-x-auto xl:overflow-hidden lg:mx-auto">
          <div className="block xl:flex gap-7.5 min-w-[993px] lg:w-[953px] w-full xl:w-[1245px] mx-auto mt-15 px-[17px] xl:px-0">
            {serviceData.map((section, index) => (
              <ContentSection key={index} {...section} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceContent