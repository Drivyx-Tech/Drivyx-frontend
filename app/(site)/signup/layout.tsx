import Footer from "@/ui/Footer";
import Navbar from "@/components/WithSubnavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx | Signup",
  // description: '...',
};

export default async function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
