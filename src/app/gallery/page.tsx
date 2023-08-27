import { CloudinaryImage } from "./lcoudinary-image";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";

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
  const result = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  console.log(result);

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">GALLERY</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {result.resources.map((result: any) => (
            <CloudinaryImage
              path="/gallery"
              key={result.public_id}
              imageData={result}
              width="400"
              height="300"
              alt="an image of something"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
