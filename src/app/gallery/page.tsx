import { CloudinaryImage } from "./lcoudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { ImageGrid } from "@/components/image-grid";

export type SearchResult = {
  public_id: string;
  tags: string;
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">GALLERY</h1>
          <UploadButton />
        </div>
        <div>
          <ImageGrid
            images={result.resources}
            getImage={(imageData: SearchResult) => {
              return (
                <CloudinaryImage
                  key={imageData.public_id}
                  imageData={imageData}
                  width="400"
                  height="300"
                  alt="an image of something"
                />
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
