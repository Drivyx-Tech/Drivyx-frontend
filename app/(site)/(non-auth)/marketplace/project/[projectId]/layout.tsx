import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Marketplace | Project",
  // description: '...',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
