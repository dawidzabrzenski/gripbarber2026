import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";

const courses = [
  {
    title: "Miesięczny kurs",
    hours: "100h",
    price: "11.000zł",
    image: "/img/course/course-1.webp",
    description:
      "Intensywne miesięczne szkolenie obejmujące pełne 100 godzin praktyki i teorii. Program skupia się na rozwijaniu umiejętności barberskich od podstaw aż po techniki zaawansowane, umożliwiając szybkie wejście do zawodu.",
  },
  {
    title: "2-Miesięczny kurs",
    hours: "70h",
    price: "9.000zł",
    image: "/img/course/course-2.webp",
    description:
      "Elastyczny kurs przeznaczony dla osób pracujących. Zajęcia odbywają się wyłącznie w weekendy i obejmują 70 godzin nauki. Idealny wybór, jeśli chcesz zdobyć solidne podstawy bez rezygnacji z codziennej aktywności.",
  },
  {
    title: "4-Miesięczny kurs",
    hours: "300h",
    price: "24.000zł",
    image: "/img/course/course-3.webp",
    description:
      "Kompleksowy program szkoleniowy obejmujący 4 miesiące intensywnych zajęć, łącznie 220 godzin praktyki oraz dodatkowe 80 godzin stażu w naszym salonie. Kurs zapewnia pełne przygotowanie zawodowe oraz gwarancję zatrudnienia po zakończeniu szkolenia.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#161a19] text-white py-24 sm:py-32">
      <div className="max-w-screen-xl mx-auto px-12 md:px-4">
        <SectionHeader title="Kursy" />

        <div className="grid gap-16 md:gap-20 lg:gap-32 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="relative group">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gold transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />

              <div className="relative bg-white text-slate-800 flex flex-col h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-medium text-sm tracking-wide">
                      {course.title}
                    </h3>
                    <span className="text-sm font-bold">{course.price}</span>
                  </div>

                  <span className="text-xs text-gold tracking-widest font-semibold mb-4">
                    {course.hours}
                  </span>

                  <p className="text-sm leading-relaxed flex-1 text-justify">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col sm:flex-row justify-center gap-6">
          <Button href="/coursesinfo">Dowiedz się więcej</Button>
          <Button href="#contact">Dofinansowanie</Button>
        </div>
      </div>
    </section>
  );
}
