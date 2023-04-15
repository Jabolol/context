import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <div className="flex items-center gap-5 justify-center flex-row gap-2 flex-wrap">
        {Array.from({ length: 12 }).map((x) => <Card />)}
      </div>
      <Footer />
    </main>
  );
}
