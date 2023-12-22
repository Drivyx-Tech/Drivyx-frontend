import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Marketplace",
  description:
    "Drivyx ESG Marketplace awaits your contribution to a sustainable future",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
