import { Metadata } from "next";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Sign In",
  // description: '...',
};

export default async function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar navTheme="light" />
      {children}
    </section>
  );
}
