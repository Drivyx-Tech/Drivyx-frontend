import Banner from "@/components/marketplace/Banner";
import ContactUs from "@/components/marketplace/ContactUs";
import MarketFeatures from "@/components/marketplace/MarketFeatures";
import Service from "@/components/marketplace/Service";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import BannerWithCTA from "@/components/Banner/BannerWithCTA";
import { getAllTags, getAllCategories } from "@/sanity/sanity-utils";
import Footer from "@/ui/Footer";
import Navbar from "@/components/WithSubnavigation";

const Marketplace = async () => {
  const allCategories = await getAllCategories();
  const allTags = await getAllTags();

  return (
    <>
      <BannerWithCTA />
      <MarketFeatures />
      <Service allCategories={allCategories} allTags={allTags} />
      <ShortIntroWithImg />
      {/* <Banner /> */}
      {/* <ContactUs /> */}
    </>
  );
};
export default Marketplace;
