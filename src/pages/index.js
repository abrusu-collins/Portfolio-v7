import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import TestimonialHeader from "@/components/TestimonialHeader";
export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Skills/>
      <TestimonialHeader/>
      <Testimonials/>
    </>
  );
}
