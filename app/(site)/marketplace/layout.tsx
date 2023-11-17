import Footer from "@/ui/Footer";
import Navbar from "@/components/WithSubnavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx | Marketplace",
  // description: '...',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
