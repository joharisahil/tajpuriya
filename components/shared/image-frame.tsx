import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ImageFrameProps = Omit<ImageProps, "fill"> & {
  ratio?: "square" | "landscape" | "wide" | "portrait";
  className?: string;
  wrapperClassName?: string;
  chrome?: boolean;
};

const ratioClasses: Record<NonNullable<ImageFrameProps["ratio"]>, string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  portrait: "aspect-[3/4]"
};

export function ImageFrame({
  ratio = "wide",
  className,
  wrapperClassName,
  chrome = true,
  alt,
  ...props
}: ImageFrameProps) {
  return (
    <div className={cn("relative overflow-hidden", chrome && "surface-card", ratioClasses[ratio], wrapperClassName)}>
      <Image
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
