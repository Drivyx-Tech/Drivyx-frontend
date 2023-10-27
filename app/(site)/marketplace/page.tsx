import Banner from "@/components/marketplace/Banner";
import ContactUs from "@/components/marketplace/ContactUs";
import MarketFeatures from "@/components/marketplace/MarketFeatures";
import Service from "@/components/marketplace/Service";
import ShortIntroWithImg from "@/components/marketplace/ShortIntroWithImg";
import BannerWithCTA from "@/ui/Banner/BannerWithCTA";

const Marketplace = () => {
  return (
    <div>
      <BannerWithCTA />
      <MarketFeatures />
      <Service />
      <ShortIntroWithImg />
      <Banner />
      <ContactUs />
    </div>
  );
};
export default Marketplace;
