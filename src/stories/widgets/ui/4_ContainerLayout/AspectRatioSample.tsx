import { AspectRatio } from "@/widgets/ui/aspect-ratio";
import Image from "next/image";

interface AspectRatioSampleProps {
  className?: string;
}
export const AspectRatioSample = ({ className, ...args }: AspectRatioSampleProps) => {
  return (
    <div {...(className && { className: className })}>
      <AspectRatio {...args}>
        <Image
          src="/img/ratio_sample.jpg"
          alt="Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
};
AspectRatioSample.displayName = "AspectRatio";
