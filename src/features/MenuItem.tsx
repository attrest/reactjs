"use client";

import { cn } from "@/shared/libs/utils";
import clsx from "clsx";
import { useSelectedLayoutSegments } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocalCheck } from "@/entities/useHooks";

interface MenuItemProps {
  name: string;
  id: string;
  current?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "pc" | "mo";
}

const MenuItem = ({ name, id, current, className, onClick, type = "pc" }: MenuItemProps) => {
  const isMainPage = usePathname() === "/"; // 현재 페이지가 메인페이지인지 확인
  const selectedId = useSelectedLayoutSegments();
  const isLocal = useLocalCheck();

  selectedId[1] === id ? (current = true) : (current = false);

  const deviceType = {
    pc: clsx("text-18 leading-6 font-semibold", current ? "text-gold" : "text-white"),
    mo: clsx("block mb-4 text-xl leading-7", current ? "text-gold font-semibold" : "text-white font-normal"),
  };

  const menuHandler = (event: React.MouseEvent) => {
    // components 메뉴는 외부 링크로 연결
    if (id === "components") {
      event.preventDefault();
      window.open(isLocal ? "http://localhost:6006/" : "/storybook/", "_blank");
    }
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <a
      key={id}
      href={"/" + id}
      className={cn(
        current
          ? `relative after:absolute after:block after:content-[''] after:left-0 after:-bottom-0 after:w-full after:h-[1px] after:bg-gold`
          : "",
        `relative min-h-8 pb-[7px] lg:hover:after:absolute lg:hover:after:block lg:hover:after:content-[''] lg:hover:after:left-0 hover:after:-bottom-0 lg:hover:after:w-full lg:hover:after:h-[1px] lg:hover:after:animate-hoverLine`,
        className && className
      )}
      onClick={menuHandler}
    >
      <span className={clsx(type && deviceType[type])}>{name}</span>
    </a>
  );
};

export default MenuItem;
