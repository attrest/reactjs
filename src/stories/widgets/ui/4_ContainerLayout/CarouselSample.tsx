import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/widgets/ui/carousel";

export const CarouselSample = ({ ...args }) => {
  return (
    <Carousel {...args}>
      <CarouselContent className="w-full h-full min-h-[10rem]">
        <CarouselItem>
          <div className="flex items-center justify-center border rounded-lg w-full h-full">1</div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center border rounded-lg w-full h-full">2</div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center border rounded-lg w-full h-full">3</div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
CarouselSample.displayName = "Carousel";
