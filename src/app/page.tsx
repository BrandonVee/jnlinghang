import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import Honors from "@/components/home/Honors";
import News from "@/components/home/News";
import Solutions from "@/components/home/Solutions";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Courses />
      {/* 荣誉资质 */}
      <section
        id="honors"
        className="relative overflow-hidden bg-paper py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-10">
          <SectionHeading
            kicker="OUR HONORS"
            title="荣誉资质"
            desc="公司信用管理体系经审查符合 Q/GYSD1113-2023 要求，获评 AAA 级信用企业等系列荣誉。"
          />
          <div className="mt-12">
            <Honors limit={5} showAllLink />
          </div>
        </div>
      </section>
      <News />
      <Contact />
    </>
  );
}
