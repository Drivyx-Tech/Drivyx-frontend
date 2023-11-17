import Footer from "@/ui/Footer";
import Navbar from "@/components/WithSubnavigation";
import { getAllProjectsSlugs, getProjectBySlug } from "@/sanity/sanity-utils";
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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
