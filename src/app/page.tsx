import Image from "next/image";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Check from "@components/check";
import Footer from "@components/Footer";
import PrescriptionProcess from "@components/PrescriptionProcess";
import MedlinkPharmacy from "@components/Features"
export default function Home() {
  return (
    <div className="bg-white items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Check />
        <MedlinkPharmacy />
      </main>
      <Footer />
    </div>
  );
}
