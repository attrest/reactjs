import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle, // Nextjs <Link /> 컴포넌트 사용시
} from "@/widgets/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { cn } from "@/shared/utils/utils";
import Link from "next/link";
import { useRef } from "react";

interface AcNavationMenuItemProps {
  title: string;
  href: string;
  target?: string;
  items?: AcNavationMenuItemProps[];
}

interface AcNavationMenuProps extends NavigationMenuProps {
  items: AcNavationMenuItemProps[];
  className?: string;
  unfoldType?: "wide" | "sync";
}

export const AcNavigationMenu = ({ items, className, unfoldType = "wide", ...args }: AcNavationMenuProps) => {
  const navMenuRef = useRef<HTMLElement>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (unfoldType === "sync") {
      const currentTarget = e.currentTarget;
      // console.log("currentTarget => ", currentTarget.offsetLeft);

      const navMenu = navMenuRef.current;
      if (navMenu) {
        const subMenu = navMenu.querySelector(".absolute.left-0.top-full.flex.justify-center") as HTMLElement;
        subMenu.style.left = `${currentTarget.offsetLeft + 10}px`;
        // console.log("subMenu => ", subMenu);
      }
    }
  };

  const renderItems = (itemList: AcNavationMenuItemProps[]) => {
    return itemList.map((item, idx) => {
      if (item.items && item.items.length > 0) {
        // console.log("item.label: ", item.title);
        return (
          <NavigationMenuItem key={idx} className="ac-navigation-menu-item">
            <NavigationMenuTrigger onMouseOver={(e) => handleMouseOver(e, idx)}>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="p-2">{renderItems(item.items)}</NavigationMenuContent>
          </NavigationMenuItem>
        );
      } else {
        // console.log("no children: ", item.title);
        return (
          <ul key={idx}>
            <NavigationMenuItem className="flex list-none whitespace-nowrap">
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild={true}>
                <Link href={item.href} {...(item.target && { target: item.target })}>
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </ul>
        );
      }
    });
  };

  return (
    <>
      <NavigationMenu
        ref={navMenuRef}
        {...args}
        className={cn("ac-navigation-menu", className && className, unfoldType)}
      >
        <NavigationMenuList>{renderItems(items)}</NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
AcNavigationMenu.displayName = "AcNavigationMenu";
