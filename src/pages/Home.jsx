import Navbar from "../components/layout/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Courses from "../sections/Courses";
import Footer from "../sections/Footer";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Team from "../sections/Team";
import Workshops from "../sections/Workshops";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Workshops />
        <Team />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
