"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { StaticImageData } from "next/image";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: any;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="gdezsemo"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          publicId={result.public_id}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
