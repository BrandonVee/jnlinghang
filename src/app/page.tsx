import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import News from "@/components/home/News";
import Solutions from "@/components/home/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Courses />
      <News />
      <Contact />
    </>
  );
}
