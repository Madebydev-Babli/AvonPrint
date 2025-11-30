import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import PriceCalculator from "../components/PriceCalculator";

// IMPORT IMAGES
import wedding from "../assets/Wedding.jpg";
import visiting from "../assets/Visiting-card.jpg";
import shagun from "../assets/Shagun-Envelopes.jpg";
import billbook from "../assets/billBook.jfif";
import letterhead from "../assets/letter.jfif";
import poster from "../assets/posters.webp";
import stamp from "../assets/Stamps.webp";
import stationery from "../assets/stationery.jfif";

const services = [
  { title: "Wedding Cards", desc: "Premium designs & luxury paper", accent: "magenta", image: wedding },
  { title: "Visiting Cards", desc: "Matt, Glossy, UV finishes", accent: "cyan", image: visiting },
  { title: "Shagun Envelopes", desc: "Elegant & traditional prints", accent: "yellow", image: shagun },
  { title: "Bill Books", desc: "Custom serial printed office books", accent: "magenta", image: billbook },
  { title: "Letterheads", desc: "Corporate letterheads & invoices", accent: "cyan", image: letterhead },
  { title: "Posters", desc: "Large high-quality poster printing", accent: "magenta", image: poster },
  { title: "Stamps", desc: "Self-inking & custom rubber stamps", accent: "yellow", image: stamp },
  { title: "Stationery", desc: "Office envelopes & forms", accent: "cyan", image: stationery },
];

export default function Services() {
  const [openCalc, setOpenCalc] = useState(false);
  const [selectedService, setSelectedService] = useState("Wedding Cards");

  const handleSelect = (service) => {
    setSelectedService(service);
    setOpenCalc(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-avonBlack mb-6">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((i) => (
          <ServiceCard
            key={i.title}
            title={i.title}
            desc={i.desc}
            image={i.image}
            accent={i.accent}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <PriceCalculator
        open={openCalc}
        onClose={() => setOpenCalc(false)}
        initialCategory={selectedService}
      />
    </div>
  );
}