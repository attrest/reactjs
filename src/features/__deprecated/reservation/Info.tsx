"use client"

import React from "react"
import Image from "next/image";
import Link from "next/link";

const InfoContent = () => {

  return (
    <>
      <div className="mt-40 w-full block lg:flex justify-start items-center gap-40 overflow-hidden">
        <div className="relative xl:flex items-center lg:w-[50%] ml:w-auto">
          <div className="inline-block xl:block w-[66.6%] xl:w-auto">
            <Image src="/img/reserve/info-img01-new.webp" alt="" width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>
          <div className="absolute top-[106px] -right-[21px] xl:relative inline-block xl:block w-[64%] xl:w-auto xl:-ml-[220px] z-[1]">
            <Image src="/img/reserve/info-img02.png" alt="" width={451} height={591} priority/>
          </div>
        </div>
        <div className="px-6 xl:px-0 mt-[130px] xl:mt-0">
          <div className="text-[22px] lg:text-2xl xl:text-4xl font-semibold xl:font-bold leading-7.5 xl:leading-[50px] text-black">단 하나의 패키지 서비스를 통해<br/>편안하고 만족도 높은<br/>최상의 서비스를 경험해보세요.</div>         
          <div className="mt-15 xl:mt-25 block xl:flex gap-[84px] justify-start font-pretendard">
            <strong className="text-[18px] font-bold">예약 안내</strong>
            <div className="mt-4 lg:mt-0">
              <dl className="text-base text-black">
                <dt className="relative inline-block pr-[22px] min-w-[52px] font-bold after:absolute after:block after:content-[''] after:top-[50%] after:-mt-[6px] after:right-[10px] after:w-[1px] after:h-[12px] after:bg-[#D3D5DA]">평일</dt>
                <dd className="inline-block font-normal">09시~18시</dd>
              </dl>
              <span className="mt-1 lg:mt-0 text-sm font-normal text-gold2">※ 주말 및 공휴일은 전화문의가 불가합니다.</span>
            </div>
          </div>
          <div className="pb-20 mt-[50px] lg:mt-[42px] block xl:flex gap-[84px] justify-start font-pretendard">
            <strong className="text-[18px] font-bold">예약 방법</strong>
            <div className="mt-4 lg:mt-0">
              <dl className="text-base text-black">
                <dt className="relative inline-block pr-[22px] min-w-[52px] font-bold after:absolute after:block after:content-[''] after:top-[50%] after:-mt-[6px] after:right-[10px] after:w-[1px] after:h-[12px] after:bg-[#D3D5DA]">TEL</dt>
                <dd className="inline-block font-normal"><Link href="tel:031-782-7942">031-782-7942</Link></dd>
              </dl>
              <dl className="mt-1 lg:mt-0">
                <dt className="relative inline-block pr-[22px] min-w-[52px] font-bold after:absolute after:block after:content-[''] after:top-[50%] after:-mt-[6px] after:right-[10px] after:w-[1px] after:h-[12px] after:bg-[#D3D5DA]">MO</dt>
                <dd className="inline-block font-normal"><Link href="tel:010-7412-7983">010-7412-7983</Link></dd>
              </dl>
              <span className="mt-1 lg:mt-0 text-sm font-normal text-gold2">※ 현재 &lsquo;패키지 상품&lsquo;만 예약 가능합니다.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoContent