import MarketFeatures from "@/components/marketplace/MarketFeatures";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import { getAllTags, getAllCategories } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Overview",
  description: "...",
};

const Overview = async () => {
  const allCategories = await getAllCategories();
  const allTags = await getAllTags();

  return (
    <>
      <MarketFeatures />
      {/* <Service allCategories={allCategories} allTags={allTags} /> */}
      <ShortIntroWithImg />
    </>
  );
};
export default Overview;
