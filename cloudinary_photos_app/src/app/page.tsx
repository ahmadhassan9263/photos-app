"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  event: "success";
  info: {
    public_id: string;
  };
};

export default function Home() {
  const [imageId, setImageId] = useState("cld-sample-2");
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
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
