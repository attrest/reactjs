'use client'

import React from "react";
import { ChevronLeftIcon } from '@radix-ui/react-icons'

interface PrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function PrevArrow({ onClick }: PrevArrowProps) {
  return (
    <div className="next-arrow" onClick={onClick}>
      <span className ="hidden">이전 버튼</span>
      <ChevronLeftIcon width={30} height={30} />
    </div>
  );
}