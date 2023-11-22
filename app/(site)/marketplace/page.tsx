import MarketFeatures from "@/components/marketplace/MarketFeatures";
import Service from "@/components/marketplace/Service";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import { getAllTags, getAllCategories } from "@/sanity/sanity-utils";
import BannerWithCTA from "@/components/banner/BannerWithCTA";

const Marketplace = async () => {
  const allCategories = await getAllCategories();
  const allTags = await getAllTags();

  return (
    <>
      {/* <BannerWithCTA /> */}
      <MarketFeatures />
      <Service allCategories={allCategories} allTags={allTags} />
      <ShortIntroWithImg />
    </>
  );
};
export default Marketplace;
