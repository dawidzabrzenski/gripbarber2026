import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/motion/Reveal";
import { motion } from "../styles/motion";

const team = [
  {
    firstName: "Adam",
    lastName: "Kania",
    image: "/img/team/team-adam.webp",
    description:
      "Adam to barber i przedsiębiorca, stojący za sukcesem kilku salonów. Doświadczenie w zarządzaniu i obsłudze klienta zdobywał już jako 22-latek w Irlandii, gdzie pracował na stanowisku menadżerskim. Po powrocie do Polski w 2012 roku współtworzył jedne z pierwszych barber shopów we Wrocławiu, a następnie połączył barbering ze swoją pasją do sportów motorowych, tworząc GRIP Barber Shop. Jest dwukrotnym wicemistrzem Pucharu Polski w enduro i cross country, a precyzję i determinację z toru przenosi do codziennej pracy. Przez lata współtworzył trendy barberingu w Polsce, szkolił wielu początkujących i współpracował z salonami w całym kraju. Obsługiwał m.in. Roberta Lewandowskiego. W akademii dzieli się praktyką, jakością i wiedzą o prowadzeniu barberowego biznesu.",
  },
  {
    firstName: "Michał",
    lastName: "Jurewicz",
    image: "/img/team/team-michal.webp",
    description:
      "Michał Jurewicz, członek kadry szkoleniowej Grip Barber Academy, specjalizuje się w dłuższych formach fryzur męskich z nowymi trendami cieniowania. Jest również instruktorem kursów uzupełniających oraz specjalistą od fryzur typu modern. Barber z wieloletnim doświadczeniem, Michał rozpoczął swoją przygodę w jednym z pierwszych barber shopów we Wrocławiu. Jego pasja do tego zawodu jest niezwykła - każdy klient może liczyć na indywidualne podejście i perfekcyjne wykonanie usługi. Poza tym, Michał jest również wielkim miłośnikiem muzyki, która stanowi dla niego nieodłączny element inspiracji i kreatywności.",
  },
  {
    firstName: "Szymon",
    lastName: "Lewończuk",
    image: "/img/team/team-szymon.webp",
    description:
      "Szymon to doświadczony fryzjer z 20-letnim stażem, który pracował w wielu renomowanych salonach we Wrocławiu.  Prowadzący praktyki szkoleniowe w Grip Barber Academy .Jest prawdziwym indywidualistą, prezentuje niekonwencjonalny styl .  Jest pasjonatem muzyki i eksperymentalnych brzmień. Jego motto to „Biegnij przed siebie, a nie za siebie” - zawsze dąży do rozwoju i inspiruje innych do tego samego. Szymon chce pomagać ludziom, którzy pragną zmienić swoje życie poprzez zdobycie nowego zawodu i nowych umiejętności. Jest również zaangażowany w niesienie pomocy osobom uzależnionym. Oprócz swojej ogromnej pasji do fryzjerstwa, jest również oddanym biegaczem. To dla niego nie tylko forma aktywności fizycznej, ale także sposób na relaks i znalezienie inspiracji.",
  },
  {
    firstName: "Klaudia",
    lastName: "Nahrebcka",
    image: "/img/team/team-klaudia.webp",
    description:
      "Klaudia to utalentowana fryzjerka z imponującym 11letnim stażem pracy.Prowadząca praktyki szkoleniowe w Grip Barber Academy.Jej pasja do strzyżeń łączy się z umiejętnością tworzenia modnych stylizacji, wykraczających poza przeciętność. Jest oddana swojemu zawodowi i zawsze śledzi nowe trendy w świecie mody fryzjerskiej. Klaudia potrafi nie tylko stworzyć efektowne fryzury, ale także udzielać klientom indywidualnych porad w zakresie pielęgnacji i utrzymywania fryzury. Jej profesjonalne podejście i dbałość o szczegóły zapewniają wysoki stopień zadowolenia klientów. Dla Natalii fryzjerstwo to nie tylko praca, ale proces twórczy, w którym poprzez każdy ruch nożyczek może wyrazić swoją indywidualność i talent.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#171A1B] text-white py-48">
      <div className="max-w-[1800px] mx-auto px-8 xl:px-20">
        <Reveal>
          <SectionHeader title="Nasz zespół" />
        </Reveal>

        <div className="space-y-[6rem]">
          {team.map((member, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <Reveal
                key={member.firstName}
                delay={index * motion.reveal.delayStep}
              >
                <div
                  className={`relative grid items-center gap-28 ${
                    isReversed
                      ? "lg:grid-cols-[1fr_540px]"
                      : "lg:grid-cols-[540px_1fr]"
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.firstName} ${member.lastName}`}
                        loading="lazy"
                        className="w-[85%] object-cover grayscale transition duration-700 hover:scale-[1.06]"
                      />
                    </div>
                  </div>

                  <div
                    className={`relative pl-10 ${
                      isReversed ? "lg:order-1 text-right pr-10 pl-0" : ""
                    }`}
                  >
                    <div
                      className={`absolute top-0 bottom-0 w-[2px] bg-gold ${
                        isReversed ? "right-0" : "left-0"
                      }`}
                    />

                    <div className="inline-block mb-4">
                      <div
                        className={`flex items-baseline gap-3 ${
                          isReversed ? "justify-end" : ""
                        }`}
                      >
                        <span className="bg-gold text-white px-3 py-1 text-2xl tracking-widest">
                          {member.firstName}
                        </span>
                        <span className="text-2xl tracking-widest text-gold">
                          {member.lastName}
                        </span>
                      </div>
                    </div>

                    <p className="text-xl font-light leading-relaxed text-slate-300 text-justify">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
