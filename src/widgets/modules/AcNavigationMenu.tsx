import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle, // Nextjs <Link /> 컴포넌트 사용시
} from "@/widgets/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

interface AcNavationMenuItemProps {
  label: string;
  link: string;
  items?: Array<{
    label: string;
    link: string;
  }>;
}

interface AcNavationMenuProps extends NavigationMenuProps {
  items: AcNavationMenuItemProps[];
}

export const AcNavigationMenuBar = ({ ...args }: AcNavationMenuProps) => {
  return (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Two One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
            </Link>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
