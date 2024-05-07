import { cn } from "@/shared/utils/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
  CarouselOptions,
  CarouselPlugin,
  CarouselApi,
} from "@/widgets/ui/carousel";
import React, { Fragment } from "react";

interface AcCarouselProps {
  items: React.ReactElement[];
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  itemClassName?: string;
  containerClassName?: string;
  isPagination?: boolean;
  pagingClassName?: string;
  isNavigation?: boolean;
  nextClassName?: string;
  prevClassName?: string;
  NavTag?: React.ComponentType<any> | keyof React.ReactHTML;
  children?: React.ReactNode;
}

export const AcCarousel = ({
  items,
  containerClassName,
  itemClassName,
  isPagination,
  pagingClassName,
  isNavigation,
  nextClassName,
  prevClassName,
  NavTag = Fragment,
  children,
  ...args
}: AcCarouselProps) => {
  return (
    <Carousel {...args}>
      <CarouselContent className={cn("w-full h-full", containerClassName && containerClassName)}>
        {items.map((item, idx) => (
          <CarouselItem key={idx} {...(itemClassName && { className: itemClassName })}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      {isPagination && <CarouselDots className={cn("ac-carousel-dots mt-4", pagingClassName && pagingClassName)} />}
      {isNavigation && (
        <>
          <CarouselPrevious {...(prevClassName && { className: prevClassName })} />
          <CarouselNext {...(nextClassName && { className: nextClassName })} />
        </>
      )}
      {children && children}
    </Carousel>
  );
};
AcCarousel.displayName = "AcCarousel";
