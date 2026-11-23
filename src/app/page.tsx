import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
