import React from "react";
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

type NavigationMenuItemRenderProps = {
  className?: string;
  item: AcNavationMenuItemProps;
};

export const AcNavigationMenu = ({ items, className, unfoldType = "wide", ...args }: AcNavationMenuProps) => {
  const navMenuRef = useRef<HTMLElement>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    const navMenu = navMenuRef.current;
    const subMenu = navMenu?.querySelector(".absolute.left-0.top-full.flex.justify-center") as HTMLElement;
    if (unfoldType === "sync") {
      const currentTarget = e.currentTarget;
      // console.log("currentTarget => ", currentTarget.offsetLeft);
      subMenu.style.left = `${currentTarget.offsetLeft}px`;
    } else {
      subMenu.style.left = "0px";
    }
  };

  const NavigationMenuItemRender = ({ item, className }: NavigationMenuItemRenderProps) => (
    <NavigationMenuItem {...(className && { className: className })}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild={true}>
        <Link href={item.href} {...(item.target && { target: item.target })}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  const renderItems = (itemList: AcNavationMenuItemProps[], depth = 0) => {
    return itemList.map((item, idx) => {
      const itemKey = `${depth}-${idx}`;
      if (item.items && item.items.length > 0) {
        // console.log("item: ", item.title, "Depth: ", depth);
        return (
          <NavigationMenuItem key={itemKey} className="ac-navigation-menu-item">
            <NavigationMenuTrigger onMouseOver={(e) => handleMouseOver(e, idx)}>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent className="p-2">{renderItems(item.items, depth + 1)}</NavigationMenuContent>
          </NavigationMenuItem>
        );
      } else {
        // console.log("no children => item: ", item.title, "Depth: ", depth);
        return (
          <React.Fragment key={itemKey}>
            {depth === 0 ? (
              <NavigationMenuItemRender item={item} className="ac-navigation-menu-item" />
            ) : (
              <ul>
                <NavigationMenuItemRender item={item} className="flex list-none whitespace-nowrap" />
              </ul>
            )}
          </React.Fragment>
        );
      }
    });
  };

  return (
    <NavigationMenu ref={navMenuRef} {...args} className={cn("ac-navigation-menu", className && className, unfoldType)}>
      <NavigationMenuList>{renderItems(items)}</NavigationMenuList>
    </NavigationMenu>
  );
};
AcNavigationMenu.displayName = "AcNavigationMenu";
