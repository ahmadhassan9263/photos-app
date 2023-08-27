"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { FullHeart } from "@/components/icons/full-heart";
import { useTransition } from "react";
import path from "path";

export function CloudinaryImage(props: any & { imageData }) {
  const [transition, startTransition] = useTransition();
  const imageData = props;
  console.log(props);

  const isFavorited = imageData.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      isFavorited ? (
      <FullHeart
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id, false, props.path);
          });
        }}
        className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
      />
      ) : (
      <Heart
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(imageData.public_id, true, props.path);
          });
        }}
        className="absolute top-2 right-2 hover:text-color-500 cursor-pointer"
      />
      )
    </div>
  );
}
