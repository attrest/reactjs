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
  isPagination?: boolean;
  isNavigation?: boolean;
  NavTag?: React.ComponentType<any> | keyof React.ReactHTML;
}

export const AcCarousel = ({ items, isPagination, isNavigation, NavTag = Fragment, ...args }: AcCarouselProps) => {
  return (
    <Carousel {...args}>
      <CarouselContent className="w-full h-full">
        {items.map((item, idx) => (
          <CarouselItem key={idx}>{item}</CarouselItem>
        ))}
      </CarouselContent>
      {isPagination && <CarouselDots className="ac-carousel-dots mt-4" />}
      {isNavigation && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};
AcCarousel.displayName = "AcCarousel";
