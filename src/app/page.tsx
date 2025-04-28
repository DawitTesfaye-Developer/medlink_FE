import Image from "next/image";
import Header from "Components/components/Header";
import Hero from "Components/components/Hero";
import Footer from "Components/components/Footer";
import Features from "Components/components/Feature";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
