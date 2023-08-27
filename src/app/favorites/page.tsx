import { ForceRefresh } from "@/components/force-refresh";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
      </div>
    </section>
  );
}
