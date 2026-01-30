import SectionHeader from "../components/ui/SectionHeader";

const team = [
  {
    name: "Adam Kania",
    image: "/img/team-adam.jpg",
    description:
      "Adam to barber i przedsiębiorca, stojący za sukcesem kilku salonów. Doświadczenie w zarządzaniu i obsłudze klienta zdobywał już jako 22-latek w Irlandii, gdzie pracował na stanowisku menadżerskim. Po powrocie do Polski w 2012 roku współtworzył jeden z pierwszych barber shopów we Wrocławiu, a następnie połączył barbering ze swoją pasją do sportów motorowych, tworząc GRIP Barber Shop. Jest dwukrotnym wicemistrzem Pucharu Polski w enduro i cross country, a precyzję i determinację z toru przenosi do codziennej pracy. Przez lata współtworzył trendy barberingu w Polsce, szkolił wielu początkujących i współpracował z salonami w całym kraju. Obsługiwał m.in. Roberta Lewandowskiego. W akademii dzieli się praktyką, jakością i wiedzą o prowadzeniu barberowego biznesu.",
  },
  {
    name: "Michał Jurewicz",
    image: "/img/team-michal.jpg",
    description:
      "Michał Jurewicz, członek kadry szkoleniowej Grip Barber Academy, specjalizuje się w dłuższych formach fryzur męskich z nowymi trendami cieniowania. Jest również instruktorem kursów uzupełniających oraz specjalistą od fryzur typu modern. Barber z wieloletnim doświadczeniem, swoją przygodę rozpoczął w jednym z pierwszych barber shopów we Wrocławiu. Jego pasja do zawodu jest niezwykła – każdy klient może liczyć na indywidualne podejście i perfekcyjne wykonanie usługi. Michał jest również wielkim miłośnikiem muzyki, która stanowi dla niego nieodłączny element inspiracji i kreatywności.",
  },
  {
    name: "Szymon Lewończuk",
    image: "/img/team-szymon.jpg",
    description:
      "Szymon to doświadczony fryzjer z 20-letnim stażem, który pracował w wielu renomowanych salonach we Wrocławiu. Prowadzący praktyki szkoleniowe w Grip Barber Academy. Jest prawdziwym indywidualistą, prezentuje niekonwencjonalny styl i pasjonuje się muzyką oraz eksperymentalnymi brzmieniami. Jego motto to „Biegnij przed siebie, a nie za siebie” – zawsze dąży do rozwoju i inspiruje innych. Szymon chce pomagać ludziom, którzy pragną zmienić swoje życie poprzez zdobycie nowego zawodu i umiejętności. Jest również zaangażowany w niesienie pomocy osobom uzależnionym. Oprócz ogromnej pasji do fryzjerstwa, jest także oddanym biegaczem – dla niego to nie tylko forma aktywności fizycznej, ale również sposób na relaks i odnalezienie inspiracji.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#171A1B] text-white py-24 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Nasz zespół" />

        <div className="space-y-40">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`grid gap-16 items-center ${
                index % 2 === 0
                  ? "lg:grid-cols-[420px_1fr]"
                  : "lg:grid-cols-[1fr_420px]"
              }`}
            >
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover grayscale"
                />
              </div>

              <div
                className={`${index % 2 !== 0 ? "lg:order-1 text-right" : ""}`}
              >
                <h3 className="inline-block text-lg tracking-widest mb-6">
                  <span className="bg-[#c8a35d] text-black px-3 py-1">
                    {member.name}
                  </span>
                </h3>

                <p className="text-sm leading-relaxed text-slate-300 max-w-2xl">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
