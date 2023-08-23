"use client";
import { CldImage } from "next-cloudinary";

export function CloudinaryImage({ publicId, ...props }: { publicId: string }) {
  return (
    <CldImage
      width="400"
      height="300"
      {...props}
      src={publicId}
      sizes="100vw"
      alt="an image of something"
    />
  );
}
