import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialsCard from "@/components/TestimonialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
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
      <TestimonialsCard/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
