import Navbar from "@/components/WithSubnavigation";
import Footer from "@/ui/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
