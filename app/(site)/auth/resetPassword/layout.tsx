import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Reset Password",
  // description: '...',
};

export default async function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
