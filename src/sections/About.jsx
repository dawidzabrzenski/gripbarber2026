import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 text-slate-800">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 ">
        <SectionHeader title="O nas" />

        <div className="flex justify-center">
          <div className="space-y-10 text-lg sm:text-2xl leading-relaxed tracking-wide font-light text-justify sm:max-w-[75%]">
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
        </div>
      </div>
    </section>
  );
}
