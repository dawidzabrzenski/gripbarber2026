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
    <section id="workshops" className="bg-white py-24 sm:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Warsztaty" />

        <div className="space-y-24">
          {workshops.map((workshop, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-3 -left-3 w-full h-full bg-[#c8a35d]  transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />

              <div className="relative bg-white border border-slate-200 min-h-[320px] flex">
                <div className="grid md:grid-cols-[200px_1fr]">
                  <div className="border-r border-slate-200 p-6 flex flex-col justify-center text-center text-sm">
                    <span className="font-medium">{workshop.days}</span>
                    <span className="mt-2 text-slate-500">
                      {workshop.price}
                    </span>
                  </div>

                  <div className="p-8 space-y-4 text-sm leading-relaxed flex flex-col justify-center">
                    <h3 className="font-medium text-base">{workshop.title}</h3>

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
