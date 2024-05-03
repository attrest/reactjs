import { cn } from "@/shared/utils/utils";
import { AspectRatio } from "@/widgets/ui/aspect-ratio";
import Image from "next/image";

interface AcThumbnailProps {
  className?: string;
  src: string;
  width?: string;
  height?: string;
  title?: string;
  ratio?: number;
  imgClassName?: string;
  objectFit?: "cover" | "fill" | "contain" | "none" | "scale-down";
  objectPosition?: "top" | "bottom" | "center" | "left" | "right";
  style?: React.CSSProperties;
}

export const AcThumbnail = ({
  className,
  src,
  width,
  title = "",
  ratio = 9 / 6,
  imgClassName,
  objectFit = "cover",
  objectPosition,
  style,
  ...args
}: AcThumbnailProps) => {
  return (
    <div className={cn("ac-thumbnail", className && className)} style={{ width: width || "10rem", ...style }} {...args}>
      <AspectRatio ratio={ratio}>
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit={objectFit}
          className={cn("rounded-md object-cover", imgClassName)}
          {...(objectPosition && { objectPosition: objectPosition })}
        />
      </AspectRatio>
    </div>
  );
};
AcThumbnail.displayName = "AcThumbnail";
