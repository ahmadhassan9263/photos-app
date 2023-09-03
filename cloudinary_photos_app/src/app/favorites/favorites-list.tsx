"use client";

import { ForceRefresh } from "@/components/force-refresh";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { useEffect, useState } from "react";

type SearchResult = {
  public_id: string;
};

export default async function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result: any) => (
        <CloudinaryImage
          key={result.public_id}
          imageData={result}
          width="400"
          height="300"
          alt="an image of something"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        />
      ))}
    </div>
  );
}
