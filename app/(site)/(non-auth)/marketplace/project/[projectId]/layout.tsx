import { Metadata } from "next";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Marketplace | Project",
  // description: '...',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar navTheme="light" />
      {children}
    </div>
  );
}
