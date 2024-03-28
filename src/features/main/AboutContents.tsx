'use client'

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import Image from "next/image";

const tabsData = [
  { id: 'golf', title: 'GOLF', content: '라운드의 즐거움을 만끽할 수 있는 환상의 골프 코스', imgSrc01: '/img/main/main-about-img01.webp', imgSrc02: '/img/main/main-about-img02.webp', imgSrcMo:'/img/main/main-about-mo-img01.webp' },
  { id: 'nature', title: 'NATURE', content: '아름다운 바다 전망 속에서 즐기는 여유와 품격', imgSrc01: '/img/main/main-about-img03.webp', imgSrc02: '/img/main/main-about-img04.webp', imgSrcMo:'/img/main/main-about-mo-img02.webp' },
  { id: 'life', title: 'LIFE', content: '평범한 일상 속 특별한 경험과 힐링을 동시에', imgSrc01: '/img/main/main-about-img05.webp', imgSrc02: '/img/main/main-about-img06.webp', imgSrcMo:'/img/main/main-about-mo-img03.webp' },
];

const AboutContents = () => {

  return (
    <div className="relative flex flex-col items-start justify-center gap-7.5 lg:gap-0 lg:px-[5.21%] pt-[5%] w-full h-full text-left text-white z-[1] before:absolute before:block lg:before:hidden before:content-[''] before:w-[1px] before:h-[15%] before:left-[24px] before:bottom-0 before:bg-white">
      <div className="px-6 lg:px-0 text-white text-[22px] lg:text-4xl font-bold lg:font-semibold leading-8 lg:leading-[50px]">자연과 어우러진 품격 있는 라운딩<br />미켈란 골프투어</div>
      <div className="w-full lg:w-auto lg:flex lg:justify-bettween lg:items-start lg:gap-7.5 text-left">
        <Tabs defaultValue="golf" className="pt-0 lg:pt-[4%]">
          <TabsList className="flex justify-start items-baseline gap-[20px] lg:gap-[40px] h-auto px-6 lg:p-0 mb-7.5">
            {tabsData.map((tab) => ( 
              <React.Fragment key={tab.id}>
                <TabsTrigger key={tab.id} value={tab.id} className={`relative m-0 p-0 h-[22px] lg:h-[34px] rounded-none bg-transparent text-left text-sm lg:text-xl font-pretendard font-normal leading-[22px] lg:leading-[34px] text-light-gray data-[state=active]:shadow-none data-[state=active]:text-left data-[state=active]:font-bold after:data-[state=active]:absolute after:data-[state=active]:content-[''] after:data-[state=active]:block after:data-[state=active]:w-full after:h-[1px] after:data-[state=active]:bg-gold after:data-[state=active]:left-0 after:data-[state=active]:right-0 after:data-[state=active]:mx-auto after:data-[state=active]:bottom-0  data-[state=active]:text-gold`}>
                  {/* data-[state=active]:underline data-[state=active]:underline-offset-[2px] lg:data-[state=active]:underline-offset-[10px] */}
                  {tab.title}
                </TabsTrigger>
              </React.Fragment>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="w-full block lg:w-auto lg:flex lg:justify-between text-white lg:gap-7.5">
                <div className="hidden lg:block">
                  <Image src={tab.imgSrc01} alt="" width={1019} height={404} style={{width: 'auto', height: 'auto'}} />
                </div>
                <div className="block lg:flex lg:justify-start lg:flex-col">
                  <div className="pl-6 lg:p-0">
                    <Image className="hidden lg:block" src={tab.imgSrc02} alt="" width={599} height={309} />
                    <Image className="w-full lg:w-0 block lg:hidden" src={tab.imgSrcMo} alt="" width={351} height={200} />
                  </div>
                  <div className="mt-4 lg:mt-[21px] px-6 lg:px-0 lg:flex flex-col justify-between">
                    <div className="lg:pb-[2.5%] font-pretendard text-sm lg:text-lg font-normal leading-5 lg:leading-6">{tab.content}</div>
                    <div className="mt-6 lg:mt-0">
                      <Link className="relative h-[22px] min-w-[130px] after:absolute after:block after:content-[''] after:left-[calc(100%_-_40px)] after:top-[49%] after:max-w-[40px] after:w-full after:h-[1px] after:bg-gold lg:hover:after:animate-hoverLine" 
                        href={'/about'}
                      > <span className="pr-[46px] font-pretendard text-sm lg:text-lg text-gold font-medium">자세히 보기</span>
                      </Link>
                    </div> 
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default AboutContents