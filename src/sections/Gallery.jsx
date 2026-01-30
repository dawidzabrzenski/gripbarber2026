import React from "react";
import SectionHeading from "./Utility/SectionHeading";

function Gallery() {
  return (
    <div className="bg-dark w-full pt-8 lg:py-8 lg:px-8" id="gallery">
      <SectionHeading title="GALERIA" />
      <div className="lg:flex gap-4">
        <div className="overflow-hidden lg:flex flex-col gap-4 lg:w-3/5">
          <img
            className="object-cover w-full max-h-72 sm:max-h-96 lg:max-h-none "
            src="./img/photos/photo-3.png"
            alt="Barbershop at work"
          ></img>
          <img
            className="object-cover w-full max-h-72 sm:max-h-96 lg:max-h-none"
            src="./img/photos/photo-4.jpg"
            alt="Barbering station"
          ></img>
        </div>
        <div className="overflow-hidden lg:flex flex-col gap-4 lg:w-2/5 ">
          <img
            className="object-cover w-full max-h-72 sm:max-h-96 lg:h-1/4 lg:max-h-none "
            src="./img/photos/photo-1.png"
            alt="Pose present atmosphere between clients and barbers"
          ></img>
          <img
            className="object-cover w-full max-h-72 sm:max-h-96 lg:h-3/4 lg:max-h-none"
            src="./img/photos/photo-2.png"
            alt="Person waiting for a haircut"
          ></img>
        </div>
      </div>
      <div className="overflow-hidden lg:flex flex-row gap-4 lg:mt-4 ">
        <img
          className="object-cover w-full max-h-72 sm:max-h-96 lg:w-1/2  lg:max-h-none"
          src="./img/photos/photo-5.png"
          alt="Professional Barbering Equipment"
        ></img>
        <img
          className="object-cover w-full max-h-72 sm:max-h-96 lg:w-1/2 lg:max-h-none"
          src="./img/photos/photo-5.png"
          alt="Professional Barbering Equipments"
        ></img>
      </div>
    </div>
  );
}

export default Gallery;
