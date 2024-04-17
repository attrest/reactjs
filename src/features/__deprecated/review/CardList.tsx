"use client";

import { ReviewItem } from "@/shared/types/__deprecated/review";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { decode } from "html-entities";

const CardList = ({ data }: { data: ReviewItem[] }) => {
  const [pointerHasDown, setPointerHasDown] = useState<boolean>(false);
  const router = useRouter();

  const goDetail = (id: number) => {
    if (pointerHasDown) {
      router.push(`/review/detail/${id}`);
      setPointerHasDown(false);
    }
  };

  return (
    <>
      <div className="mt-2.5 lg:mt-7.5 grid grid-cols-1 gap-x-7.5 gap-y-2.5 lg:gap-y-7.5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <button onClick={() => goDetail(item.id)} key={index} onPointerDown={() => setPointerHasDown(true)}>
            <CardItem key={item.id} {...item} />
          </button>
        ))}
      </div>
    </>
  );
};

export const StarIcon = ({ rating }: { rating: number }) => {
  // 후기게시판 별점 Active
  return (
    <>
      {[...Array(rating)].map((i, index) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 30 30"
          fill="none"
          key={index}
          className="lg:w-[18px] lg:h-[17px] w-4 h-[15px]"
        >
          <path
            d="M29.9125 11.332C29.6852 10.6025 29.0346 10.1066 28.3017 10.1066H19.3697L16.6105 1.22541C16.3832 0.495902 15.7326 0 14.9997 0C14.2668 0 13.6123 0.495902 13.3889 1.22541L10.6297 10.1066H1.69381C0.960911 10.1066 0.310313 10.6025 0.0829954 11.332C-0.144322 12.0615 0.106511 12.8607 0.69832 13.3115L7.92545 18.7992L5.16629 27.6803C4.93897 28.4098 5.18588 29.209 5.78161 29.6598C6.37342 30.1107 7.18079 30.1107 7.7726 29.6598L14.9997 24.1721L22.2269 29.6598C22.5247 29.8852 22.8735 30 23.2224 30C23.5712 30 23.92 29.8893 24.2178 29.6598C24.8097 29.209 25.0605 28.4098 24.8332 27.6803L22.074 18.7992L29.3011 13.3115C29.8969 12.8607 30.1438 12.0615 29.9165 11.332H29.9125Z"
            fill="#FFC223"
          />
        </svg>
      ))}
    </>
  );
};

const CardItem = ({ rating, title, contents, modDt, regId }: ReviewItem) => {
  var check_eng = /[a-zA-Z]/; // 문자
  var check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크

  const nameMasking = (name: string) => {
    if (check_eng.test(name)) {
      //영문인 경우
      return (name = name.replace(/(?<=.{3})./gi, "*"));
    }
    if (check_kor.test(name)) {
      // 한글인 경우
      if (name.length <= 2) {
        return name.replace(name.substring(0, 1), "*");
      }

      return name[0] + "*".repeat(name.substring(1, name.length - 1).length) + name[name.length - 1];
    }
  };
  return (
    <div className="group relative">
      <div className="relative flex flex-wrap flex-col justify-between border border-gray2 py-6 pr-6 pl-5 h-[232px] lg:pt-10 lg:px-10 lg:pb-[64px] lg:h-[304px] lg:hover:border-transparent lg:hover:after:w-[calc(100%_+_2px)] lg:hover:after:h-[calc(100%_+_2px)] lg:hover:after:border-gold2 lg:hover:after:border-[3px] lg:hover:after:absolute lg:hover:after:-top-px lg:hover:after:-left-px">
        <div className="w-full">
          <div className="flex items-center space-x-1.5 w-[114px] sm:w-[104px]">
            <StarIcon rating={Number(rating)} />
          </div>
          <p className="mt-7.5 text-xl text-black font-bold truncate text-left">{decode(title)}</p>
          <p className="mt-4 text-sm text-gray font-pretendard line-clamp-2 text-left">{decode(contents)}</p>
        </div>
        <p className="flex items-center text-sm lg:text-14 text-gray font-pretendard">
          <span>{nameMasking(regId)}</span>
          <span className="block w-px	h-[11px] mx-2 bg-gray"></span>
          <span>{format(new Date(modDt), "yyyy.MM.dd")}</span>
        </p>
      </div>
    </div>
  );
};

export default CardList;
