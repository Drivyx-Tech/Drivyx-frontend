import { Metadata } from "next";
import Navbar from "@/components/menu/WithSubnavigation";

export const metadata: Metadata = {
  title: "Drivyx ESG | Sign Up",
  // description: '...',
};

export default async function SignUpLayout({
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
