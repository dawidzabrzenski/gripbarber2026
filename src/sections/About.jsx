import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 text-slate-800">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader title="O nas" />

        <div className="grid gap-24 items-center lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-10 text-base sm:text-xl leading-relaxed tracking-wide font-light text-justify">
            <p>
              Grip Barber Academy to szkoła barberingu dla osób, które zaczynają
              od podstaw oraz dla barberów chcących podnieść poziom, dopracować
              technikę i poznać aktualne trendy. Stawiamy na naukę przez
              praktykę – od pierwszych zajęć pracujesz nad realnymi
              umiejętnościami, a nie tylko oglądasz.
            </p>

            <p>
              Zapewniamy elastyczny grafik i możliwość dopasowania godzin
              szkolenia do Twoich potrzeb, dzięki czemu bez problemu połączysz
              kurs z obecną pracą. Prowadzimy Cię krok po kroku ścieżką „od zera
              do barbera”, aż do pewności w codziennej pracy z klientem.
            </p>

            <p>
              Naszą siłą jest kadra instruktorów – doświadczeni profesjonaliści,
              którzy od lat działają w branży i mają realny wpływ na rozwój
              barberingu w Polsce. Dzielą się sprawdzonymi metodami, wiedzą i
              praktycznymi wskazówkami, dzięki czemu uczysz się skutecznie,
              konkretnie i na najwyższym poziomie.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-gold/20" />
            <img
              src="/img/about-team.webp"
              alt="Zespół Grip Barber Academy"
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
