import MarketFeatures from "@/components/marketplace/MarketFeatures";
import Service from "@/components/marketplace/Service";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import { getAllTags, getAllCategories } from "@/sanity/sanity-utils";

const Overview = async () => {
  const allCategories = await getAllCategories();
  const allTags = await getAllTags();

  return (
    <>
      <MarketFeatures />
      <Service allCategories={allCategories} allTags={allTags} />
      <ShortIntroWithImg />
    </>
  );
};
export default Overview;
