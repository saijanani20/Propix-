import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Statistics } from "@/components/home/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeaturedProperties />
        <WhyChooseUs />
        <Statistics />
      </main>
      <Footer />
    </>
  );
}
