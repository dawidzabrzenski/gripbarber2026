import Navbar from "../components/layout/Navbar";
import About from "../sections/About";
import Courses from "../sections/Courses";
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
      </main>
    </>
  );
}
