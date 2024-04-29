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
  imageClassName?: string;
}

export const AcThumbnail = ({ className, src, width, title = "", ratio = 9 / 6, imageClassName }: AcThumbnailProps) => {
  return (
    <div className={cn("ac-thumbnail", className && className)} style={{ width: width || "10rem" }}>
      <AspectRatio ratio={ratio}>
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={cn("rounded-md object-cover", imageClassName)}
        />
      </AspectRatio>
    </div>
  );
};
AcThumbnail.displayName = "AcThumbnail";
