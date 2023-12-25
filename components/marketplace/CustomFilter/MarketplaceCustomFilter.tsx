import { getCategories } from "@/services/endpoints/category";
import { getTags } from "@/services/endpoints/tag";
import React from "react";
import MarketplaceFilter from ".";
import { CategoryRes, TagRes } from "@/services/endpoints/type";

export type SelectionsProps = {
  selectedCategories: {
    category_id: string[];
    subCategory_id: string[];
    tag_ids: string[];
  };
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<{
      category_id: string[];
      subCategory_id: string[];
      tag_ids: string[];
    }>
  >;
  categories?: CategoryRes;
  tags?: TagRes;
};

async function index({
  selectedCategories,
  setSelectedCategories,
}: SelectionsProps) {
  const categories = await getCategories();
  const tags = await getTags();

  return (
    <MarketplaceFilter
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      categories={categories}
      tags={tags}
    />
  );
}

export default index;
