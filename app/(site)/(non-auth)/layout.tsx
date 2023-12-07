"use client";

import Navbar from "@/components/WithSubnavigation";
import Footer from "@/ui/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
