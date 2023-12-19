import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx | Resources | Join Drivyx",
  // description: '...',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
