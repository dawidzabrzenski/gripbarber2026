import { forwardRef } from "react";
import Button from "../components/ui/Button";

const Hero = forwardRef(function Hero(_, ref) {
  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/img/background.webm" type="video/webm" />
          <img
            src="/img/new-header.webp"
            alt="Grip Barber Academy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-4 max-w-4xl text-center">
        <h1 className="font-semibold tracking-tight">
          <span className="block text-3xl sm:text-5xl text-white font-normal mb-2">
            Witaj w
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-gold">
            Grip Barber Academy
          </span>
        </h1>

        <p className="mt-6 text-base lg:text-xl font-light text-slate-300 leading-relaxed max-w-3xl mx-auto">
          W miejscu, gdzie sztuka fryzjerska spotyka się z pasją do kreowania
          unikalnego stylu. Nasza akademia dedykowana jest wszystkim, którzy
          pragną zgłębić tajniki profesjonalnego barberingu i podążać ścieżką
          kreatywności w świecie fryzjerstwa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 tracking-widest text-xs sm:text-sm uppercase">
          <Button href="#contact">Więcej o nas</Button>
          <Button variant="outline" href="#contact">
            Nasze usługi
          </Button>
        </div>
      </div>
    </section>
  );
});

export default Hero;
