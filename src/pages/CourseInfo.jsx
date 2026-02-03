import { Link } from "react-router-dom";

const items = [
  {
    id: "1",
    title: "Strzyżenie męskie",
    text: "Nauczymy Cię różnych technik strzyżenia męskiego, takich jak strzyżenie maszynką, nożyczkami, czy trymerem. Nauczysz się również kształtowania zarostu i brody.",
    image: "./img/image00037.webp",
  },
  {
    id: "2",
    title: "Golenie tradycyjne",
    text: "Nauczymy Cię sztuki golenia tradycyjnego, włączając w to przygotowanie skóry, stosowanie gorących ręczników, użycie brzytwy i odpowiednich produktów pielęgnacyjnych.",
    image: "./img/image00005.webp",
  },
  {
    id: "3",
    title: "Stylizacja włosów",
    text: "Nauczymy Cię różnych technik stylizacji włosów męskich, włączając w to użycie produktów do stylizacji, formowanie fryzur i tworzenie modnych i nowoczesnych stylów.",
    image: "./img/image00002.webp",
  },
  {
    id: "4",
    title: "Obsługa klienta",
    text: "Zadbamy o to by umiejętności obsługi klienta, takie jak komunikacja, doradztwo w doborze fryzury i pielęgnacji włosów, oraz budowanie trwałych relacji z klientami.",
    image: "./img/image00003.webp",
  },
  {
    id: "5",
    title: "Higiena i bezpieczeństwo",
    text: "Nauczymy Cię również zasad higieny i bezpieczeństwa pracy, takich jak odpowiednie dezynfekowanie narzędzi i utrzymanie czystości w salonie.",
    image: "./img/image00036.webp",
  },
  {
    id: "6",
    title: "Biznes barberingowy",
    text: "Na kursie omówimy również podstawy prowadzenia własnego biznesu barberingowego, włączając w to marketing, zarządzanie finansami i budowanie marki.",
    image: "./img/image00038.webp",
  },
];

export default function CourseInfo() {
  return (
    <main className="min-h-screen bg-[#171A1B] text-white">
      <header className="border-b border-gold/40">
        <div className="max-w-[1800px] mx-auto px-8 py-10 flex justify-between items-center">
          <img src="/img/logo.svg" alt="GRIP" className="h-8" />
          <Link
            to="/"
            className="nav-underline tracking-widest text-xs uppercase"
          >
            Powrót
          </Link>
        </div>
      </header>

      <section className="py-40">
        <div className="max-w-[1500px] mx-auto px-8">
          <div className="text-center mb-40">
            <h1 className="tracking-widest uppercase text-gold text-xl">
              Program kursu
            </h1>
            <div className="mt-6 mx-auto w-24 h-px bg-gold" />
          </div>

          <div className="space-y-48">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative grid gap-20 items-center ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1fr_1.2fr]"
                    : "lg:grid-cols-[1.2fr_1fr]"
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 !== 0 ? "lg:order-2 lg:text-right" : ""
                  }`}
                >
                  <div className="absolute -top-24 -left-10 text-[180px] font-light text-gold/10 leading-none select-none">
                    {item.id}
                  </div>

                  <h2 className="text-3xl text-gold tracking-wide mb-6 relative">
                    {item.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed text-lg  relative">
                    {item.text}
                  </p>
                </div>

                <div
                  className={`relative ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="absolute -top-6 -left-6 w-full h-full bg-gold/20" />

                  <div className="relative aspect-[16/9] w-full max-h-[420px] lg:max-h-[520px] 2xl:max-h-[600px] overflow-hidden border border-gold/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-48 text-center text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Program kursu w Grip Barber Academy został zaprojektowany tak, aby
            krok po kroku przeprowadzić Cię przez wszystkie kluczowe
            umiejętności potrzebne do pracy w zawodzie barbera – od techniki,
            przez obsługę klienta, aż po prowadzenie własnego biznesu.
          </div>

          <div className="mt-24 flex justify-center">
            <Link
              to="/"
              className="px-12 py-3 bg-gold text-black tracking-widest text-xs uppercase hover:bg-[#b18f52] transition"
            >
              Powrót
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
