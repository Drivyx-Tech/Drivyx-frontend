import Footer from "@/ui/Footer";
import Navbar from "@/components/menu/WithSubnavigation";

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
