"use client";

import React, { useState } from "react";
import TwTag from "@/components/tw-tag/TwTag";

const ResponsiveSync = () => {
  const [gsapAni, setGaspAni] = useState<any>(null);
  return (
    <TwTag className="lg:mb-[223px]">
      <div className="flex flex-col">
        <span className="text-xl">플러그인 다운로드:</span>
        <a className="text-3xl font-bold underline" href="/plugin/responsive-sync-browser.zip">
          responsive-sync-browser.zip
        </a>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold">설치 방법</h3>
        <p className="mt-2">1. 크롬 브라우저에서 chrome://extensions를 입력하여 확장 프로그램을 띄웁니다. </p>
        <p className="mt-2">
          2. 확장 프로그램 창에서 상단의 개발자 모드를 on으로 하고, 위에서 다운로드 한 플러그인을 적당한 곳에 압축을
          풀어 해당 프로그램을 로드합니다.
        </p>
        <img src="/img/screenshot/screenshot_01.png" alt="" className="my-10 border" />
        <img src="/img/screenshot/screenshot_02.png" alt="" className="my-10 border" />
        <p className="mt-2">3. 설치한 확장 프로그램을 꺼내놓습니다.</p>
        <img src="/img/screenshot/screenshot_03.png" alt="" className="my-10 border" />
        <p className="mt-2">4. 동기화 시작을 누르면 새 창이 뜨며 동기화가 됩니다.</p>
        <img src="/img/screenshot/screenshot_04.png" alt="" className="my-10 border" />
        <p className="mt-2">
          5. 동기화 이후에는 반응형 사이트의 PC화면과 모바일 화면을 동시에 비교하며 작업할 수 있습니다.
        </p>
        <img src="/img/screenshot/screenshot_05.png" alt="" className="my-10 border" />
        <p className="mt-2">** 동기화가 끊길 경우 다시 동기화를 시켜주세요.</p>
      </div>
    </TwTag>
  );
};

export default ResponsiveSync;
