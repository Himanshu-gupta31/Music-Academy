import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialsCard from "@/components/TestimonialsCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Music Academy</h1> */}
      <HeroSection/>
      <hr className="border-zinc-700"></hr>
      <FeaturedCourses/>
      <WhyChooseUs/>
       
    </main>
  );
}
