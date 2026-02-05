import SectionHeader from "../components/ui/SectionHeader";

const workshops = [
  {
    title: "Warsztat – Modern Długie włosy",
    days: "1 dniowy",
    price: "1000 zł",
    description: [
      "Podczas szkolenia będziesz mieć okazję obserwować i praktykować różne techniki, które są popularne w dzisiejszych trendach fryzjerskich. Będziesz również uczyć się, jak dobierać odpowiednie narzędzia i produkty do długich włosów, aby osiągnąć pożądane efekty.",
      "Szkolenie Modern look&learn - długie włosy jest skierowane zarówno do fryzjerów początkujących, jak i do bardziej doświadczonych profesjonalistów, którzy chcą poszerzyć swoją wiedzę i umiejętności w zakresie fryzjerstwa dla długich włosów. Nie są wymagane żadne wcześniejsze doświadczenia ani umiejętności, ponieważ szkolenie jest oparte na praktyce i umożliwia uczestnikom naukę poprzez obserwację i praktykę",
      "Całe szkolenie trwa jeden dzień i odbywa się w grupie. Uczestnicy mają możliwość zadawania pytań, uzyskiwania informacji zwrotnych od instruktora i wymiany doświadczeń z innymi uczestnikami. Po ukończeniu szkolenia otrzymasz certyfikat potwierdzający udział w kursie Modern look&learn - długie włosy.",
    ],
  },
  {
    title: "Warsztat – Krótkie Fryzury",
    days: "1 dniowy",
    price: "1000 zł",
    description: [
      "Przeżyj intensywny dzień kreatywnego szkolenia z nowymi trendami w świecie krótkich fryzur męskich. Nasz jednodniowy kurs uzupełniający to idealna okazja, by nauczyć się zaawansowanych technik nowoczesnego męskiego fryzjerstwa. Będziesz obserwować, uczyć się i praktykować na główkach fryzjerskich, zgłębiając tajniki połączenia użytkowych, krótkich form z finezyjnym cieniowaniem. Zostań mistrzem w kreowaniu krótkich, stylowych cięć!",
    ],
  },
  {
    title: "Warsztat – doszkalający „Barber”",
    days: "3 dniowy",
    price: "2200 zł",
    description: [
      "Nasz kurs doszkalający z cięcia i stylizacji brody, golenia tradycyjnego oraz technik fryzjerskich męskich to idealna opcja dla tych, którzy chcą poszerzyć swoje umiejętności w dziedzinie barberingu. Podczas tego kursu skupiamy się na doskonaleniu technik cięcia i stylizacji brody, aby uczestnicy mogli stworzyć idealne kształty i linie. Ponadto, uczymy również tradycyjnego golenia, który jest jednym z najbardziej wymagających zabiegów w barberingu. Nasi instruktorzy podzielą się swoją wiedzą na temat różnych narzędzi i technik, aby uczestnicy mogli opanować różne style fryzur męskich. Ten kurs to doskonała okazja dla fryzjerów, którzy chcą rozwinąć swoje umiejętności w barberingu i zaoferować swoim klientom kompleksowe usługi związane z pielęgnacją brody i włosów męskich. Dołącz do nas i zdobądź niezbędną wiedzę i umiejętności, aby odnieść sukces w świecie barberingu!",
    ],
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="bg-white py-32">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader title="Warsztaty" />

        <div className="space-y-20 md:space-y-40">
          {workshops.map((workshop, index) => (
            <div key={index} className="grid gap-16 lg:grid-cols-[240px_1fr]">
              <div className="relative ml-auto mr-auto ">
                <div className="sticky top-40 space-y-4">
                  <div className="text-sm tracking-widest uppercase text-gold">
                    {workshop.days}
                  </div>
                  <div className="text-2xl font-light">{workshop.price}</div>

                  <div className="w-16 h-[2px] bg-gold" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gold/10" />

                <div className="relative bg-white border border-slate-200 p-10 lg:p-14">
                  <h3 className="text-2xl font-medium mb-8">
                    {workshop.title}
                  </h3>

                  <div className="space-y-6 text-slate-700 leading-relaxed text-sm lg:text-base text-justify">
                    {workshop.description.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
