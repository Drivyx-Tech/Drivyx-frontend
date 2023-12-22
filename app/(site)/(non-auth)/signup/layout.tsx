import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Signup",
  // description: '...',
};

export default async function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
