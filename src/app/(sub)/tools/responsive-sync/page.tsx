"use client";

import React, { useState } from "react";
import TwTag from "@/widgets/modules/helper/TwTag";
import Image from "next/image";

const ResponsiveSync = () => {
  const [gsapAni, setGaspAni] = useState<any>(null);
  return (
    <div>
      <div className="flex flex-col">
        <span className="text-xl">플러그인 다운로드:</span>
        <a className="text-3xl font-bold underline" href="/plugin/responsive-sync-browser.zip">
          responsive-sync-browser.zip
        </a>
      </div>

      <div className="mt-20 text-xl">
        <h3 className="text-3xl font-bold mb-6">설치 방법</h3>
        <p className="mt-2">1. 크롬 브라우저에서 chrome://extensions를 입력하여 확장 프로그램을 띄웁니다. </p>
        <p className="mt-2">
          2. 확장 프로그램 창에서 상단의 개발자 모드를 on으로 하고, 위에서 다운로드 한 플러그인을 적당한 곳에 압축을
          풀어 해당 프로그램을 로드합니다.
        </p>
        <div className="my-10 border inline-block">
          <Image src="/img/screenshot/screenshot_01.png" alt="" width={1379} height={497} layout="responsive" />
        </div>
        <div className="my-10 border inline-block">
          <Image src="/img/screenshot/screenshot_02.png" alt="" width={1378} height={482} layout="responsive" />
        </div>
        <p className="mt-2">3. 설치한 확장 프로그램을 꺼내놓습니다.</p>
        <div className="my-10 border inline-block">
          <Image src="/img/screenshot/screenshot_03.png" alt="" width={356} height={307} />
        </div>
        <p className="mt-2">4. 동기화 시작을 누르면 새 창이 뜨며 동기화가 됩니다.</p>
        <div className="my-10 border inline-block">
          <Image src="/img/screenshot/screenshot_04.png" alt="" width={264} height={172} />
        </div>
        <p className="mt-2">
          5. 동기화 이후에는 반응형 사이트의 PC화면과 모바일 화면을 동시에 비교하며 작업할 수 있습니다.
        </p>
        <div className="my-10 border inline-block">
          <Image src="/img/screenshot/screenshot_05.png" alt="" width={1703} height={911} layout="responsive" />
        </div>
        <p className="mt-2">** 동기화가 끊길 경우 다시 동기화를 시켜주세요.</p>
      </div>
    </div>
  );
};

export default ResponsiveSync;
