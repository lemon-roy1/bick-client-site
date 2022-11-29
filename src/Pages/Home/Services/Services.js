import React from "react";
import fluoride from "../../../assets/images/img/download.jpg";
import cavity from "../../../assets/images/img/images (4).jpg";
import whitening from "../../../assets/images/img/images.jpg";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "dreamsbay bick",
      description:
        "Do you want BMW Bike Wallpaper? Now its easy! Here you can download the Best BMW Bike  iPhone & mobile phones for free.",
      img: fluoride,
      button: "dreams",
    }, 
    {
      id: 2,
      name: "getty bick",
      description:
        "Pngtree offers HD bike background images for free download. Download these bike background for many purposesas background and website background",
      img: cavity,
      button: "getty",
    },
    {
      id: 3,
      name: "alamy bick",
      description:
        " Known by many names, including the early invention has made Drais widely acknowledged as the father of the bicycle",
      img: whitening,
      button: "alamy",
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;