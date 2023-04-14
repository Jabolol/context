import About from "@/components/About";
import Feature from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Quickstart from "@/components/Quickstart";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Header />
      <Quickstart />
      <Feature />
      <About />
      <Pricing />
      <Footer />
    </main>
  );
}
