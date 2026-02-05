import { useState, useRef } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "../components/ui/Button";

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const galleryRef = useRef(null);

  const handleToggle = () => {
    if (isExpanded) {
      galleryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => setIsExpanded(false), 300);
    } else {
      setIsExpanded(true);
    }
  };

  const imagePairs = [
    ["image002.webp", "image004.webp"],
    ["image005.webp", "image006.webp"],
    ["image008.webp", "image009.webp"],
    ["image010.webp", "image012.webp"],
    ["image013.webp", "image014.webp"],
    ["image016.webp", "image017.webp"],
    ["image011.webp", "image023.webp"],
    ["image021.webp", "image019.webp"],
    ["image020.webp", "image022.webp"],
  ];

  const displayedPairs = imagePairs;

  return (
    <div
      ref={galleryRef}
      className="mx-auto max-w-[75%] py-24 sm:py-32 relative"
      id="gallery"
    >
      <SectionHeader title="Galeria" />

      <div className="space-y-4 lg:space-y-4">
        <div className="lg:flex gap-4">
          <div className="overflow-hidden lg:flex flex-col gap-4 lg:w-3/5 space-y-4 lg:space-y-0">
            <img
              className="object-cover w-full max-h-72 sm:max-h-96 lg:max-h-none"
              src="./img/gallery/image000.webp"
              alt="Barbershop at work"
            />
            <img
              className="object-cover w-full max-h-72 sm:max-h-96 lg:max-h-none"
              src="./img/gallery/image007.webp"
              alt="Barbering station"
            />
          </div>
          <div className="overflow-hidden lg:flex flex-col gap-4 lg:w-2/5 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
            <img
              className="object-cover w-full max-h-72 sm:max-h-96 lg:h-1/4 lg:max-h-none"
              src="./img/gallery/image001.webp"
              alt="Pose present atmosphere between clients and barbers"
            />
            <img
              className="object-cover w-full max-h-72 sm:max-h-96 lg:h-3/4 lg:max-h-none"
              src="./img/gallery/image015.webp"
              alt="Person waiting for a haircut"
            />
          </div>
        </div>

        <div
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{
            maxHeight: isExpanded ? "10000px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
        >
          {displayedPairs.map((pair, rowIndex) => (
            <div
              key={rowIndex}
              className="overflow-hidden lg:flex flex-row gap-4 space-y-4 lg:space-y-0 mt-4 lg:mt-4"
            >
              {pair.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  className="object-cover w-full max-h-72 sm:max-h-96 lg:w-1/2 lg:max-h-none"
                  src={`./img/gallery/${img}`}
                  alt="Professional Barbering"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-8 mt-12 flex justify-center z-10">
        <Button
          onClick={handleToggle}
          className="flex items-center gap-2 bg-gold text-white px-8 py-3 shadow-lg hover:bg-gold/90 transition-all duration-300 text-sm tracking-wider uppercase"
        >
          {isExpanded ? (
            <>
              Zwiń galerię
              <ChevronUp className="w-5 h-5" />
            </>
          ) : (
            <>
              Rozwiń galerię
              <ChevronDown className="w-5 h-5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
