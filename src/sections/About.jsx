export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 text-slate-800">
      <div className="max-w-full mx-[16rem] px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest uppercase text-[#c8a35d]">
            O nas
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-[#c8a35d]" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8 text-sm sm:text-2xl leading-relaxed tracking-wide font-light">
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
            <img
              src="/img/about-team.jpg"
              alt="Zespół Grip Barber Academy"
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
