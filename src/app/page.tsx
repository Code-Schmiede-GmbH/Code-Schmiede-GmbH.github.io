import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
