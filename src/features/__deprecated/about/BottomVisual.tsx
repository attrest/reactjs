'use client'

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import AboutSlidePc from "@/features/about/SlidePc";
import AboutSlideMo from "@/features/about/SlideMo";

const tabsData = [
  { id: 'golf', title: 'GOLF', content: '라운드의 즐거움을\n만끽할 수 있는\n환상의 골프 코스', imgSrc: '/img/about/visual01-new.webp' },
  { id: 'nature', title: 'NATURE', content: '아름다운 바다 전망 속에서\n즐기는 여유와 품격', imgSrc: '/img/about/visual02-new.webp' },
  { id: 'life', title: 'LIFE', content: '평범한 일상 속\n특별한 경험과 힐링을 동시에', imgSrc: '/img/about/visual03-new.webp' },
];

const BottomVisual = () => {
  return (
    <>
      {/* <AboutSlidePc /> */}
      <div className="hidden lg:block relative w-full z-[1]">
        <Tabs defaultValue="golf" data-orientation="vertical" className="relative w-full z-[1]">
          <TabsList aria-orientation="vertical" data-orientation="vertical" className="flex flex-col justify-start items-start gap-[18px] p-0 pb-[26px] h-auto absolute z-[10] left-[144px] bottom-25 rounded-none text-left bg-transparent before:content-[''] before:absolute before:left-0 before:top-0 before:w-[1px] before:h-full before:bg-[#EBEBEB]">
            {tabsData.map((tab) => (
              <React.Fragment key={tab.id}>
                <TabsTrigger value={tab.id} className={`relative py-[6px] px-7.5 h-auto rounded-none bg-transparent text-left text-sm font-pretendard font-normal text-gray data-[state=active]:shadow-none data-[state=active]:text-left data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:top-0 data-[state=active]:before:w-[1px] data-[state=active]:before:h-full data-[state=active]:before:bg-black data-[state=active]:text-base data-[state=active]:font-bold data-[state=active]:text-black`}>
                  {tab.title}
                </TabsTrigger>
              </React.Fragment>
            ))}
          </TabsList>
          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className={`w-full py-25 pl-25 transition-none data-[state=active]:transition-opacity`} style={{ backgroundImage: `url(${tab.imgSrc})`, backgroundSize: 'cover' }}>
              <div className="mx-auto flex items-center h-full">
                <div className="pt-[48px] px-[44px] w-[551px] h-[502px] bg-[rgba(255,255,255,.9)]">
                  <span className="text-base font-semibold text-black">{tab.title}</span>
                  <p className="mt-4 text-4xl font-semibold leading-[140%] text-black">
                    {tab.content.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < tab.content.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <AboutSlideMo />
    </>
  );
};

export default BottomVisual