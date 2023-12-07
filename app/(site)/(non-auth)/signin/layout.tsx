import Footer from "@/ui/Footer";
import Navbar from "@/components/WithSubnavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx | Signin",
  // description: '...',
};

export default async function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
