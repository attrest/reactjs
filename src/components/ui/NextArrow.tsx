'use client'

import React from "react";
import { ChevronRightIcon } from '@radix-ui/react-icons'

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function NextArrow({ onClick }: NextArrowProps) {
	return (
		<div className="next-arrow" onClick={onClick}>
			<span className ="hidden">다음 버튼</span>
			<ChevronRightIcon width={30} height={30} />
		</div>
	);
}