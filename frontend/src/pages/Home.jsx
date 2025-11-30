import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import PriceCalculator from "../components/PriceCalculator";
import heroMock from "../assets/AvonLogo.jpeg";
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

export default function Home() {
  const [openService, setOpenService] = useState(null);

  return (
    <div className="pt-12 pb-24 min-h-screen" style={{ background: "#F7F4EF" }}>

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        <div>
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm mb-4 border border-[#E6DEC9] shadow-sm">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D7B88F] to-[#EFE5D2]"></div>
            <div className="text-sm text-[#6C5A3E]">Premium • Printing • Punjab</div>
          </div>

          <div className="relative">
            {/* CMYK squares behind heading */}
           <div className="absolute -left-4 -top-6 opacity-55 pointer-events-none md:-left-10 md:-top-8">
              <div className="cmyk-square cmyk-yellow" style={{ width: 150, height: 150 }} />
              <div className="cmyk-square cmyk-cyan" style={{ width: 150, height: 150, left: 50, top: 40 }} />
              <div className="cmyk-square cmyk-magenta" style={{ width: 150, height: 150, left: 0, top: 80 }} />
            </div>

            {/* Heading + tagline perfectly aligned */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111] relative z-10">
              We Print <span className="text-[#D70073]">Solutions</span>
            </h1>
            <div className="mt-1 text-sm text-[#111] uppercase tracking-wider relative z-10">
              Creative · Printing · Solutions
            </div>
          </div>

          <p className="mt-4 text-[#111] max-w-2xl">
            Elegant wedding invitations, luxury visiting cards, envelopes, posters & corporate stationery — with precision color accuracy and premium finishing.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setOpenService("Wedding Cards")}
              className="px-6 py-3 bg-black rounded-2xl font-semibold text-white shadow-lg relative z-1">
              Price Calculator
            </button>

            <a
              href="/services"
              className="px-6 py-3 rounded-2xl border border-[#DCCEB3] hover:bg-white/70 transition shadow-sm font-medium"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">

            <div
              className="absolute -inset-6 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(224,210,185,0.25), rgba(245,236,216,0.20))",
                transform: "rotate(-2deg)",
              }}
            />

            <div className="absolute right-0 -top-4 opacity-70 md:-right-12 md:-top-8">
              <div className="cmyk-square cmyk-magenta" style={{ width: 110, height: 110 }} />
              <div className="cmyk-square cmyk-cyan" style={{ left: 40, top: -10, width: 110, height: 110 }} />
              <div className="cmyk-square cmyk-yellow" style={{ left: 20, top: 40, width: 110, height: 110 }} />
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-xl border border-[#E6DEC9] relative z-10">
              <img
                src={heroMock}
                alt="Avon Print"
                className="w-full h-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <h3 className="text-3xl font-bold text-[#1B1B1B] mb-6">Our Services</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              onClick={() => setOpenService(s.title)}
              className="cursor-pointer transform hover:-translate-y-1 transition"
            >
              <div className="relative">
                <div
                  className="absolute -top-3 -left-3 w-2.5 h-10 rounded-xl opacity-70"
                />
                <ServiceCard
                  title={s.title}
                  desc={s.desc}
                  accent={s.accent}
                  image={s.image}
                  onSelect={() => setOpenService(s.title)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <Testimonials />
      </div>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft-lg flex flex-col md:flex-row items-center justify-between border border-[#E6DEC9]">
          <div>
            <h3 className="text-2xl font-bold text-[#1B1B1B]">Ready to Print?</h3>
            <p className="text-gray-600 max-w-md">
              Send your requirements on WhatsApp & get samples + pricing instantly.
            </p>
          </div>

          <a
            className="mt-4 md:mt-0 inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold shadow hover:shadow-md transition"
            href={`https://wa.me/916009570452?text=${encodeURIComponent(
              "Hello Avon Print, I want to place an order."
            )}`}
            target="_blank"
            rel="noreferrer">
            Order on WhatsApp
          </a>
        </div>
      </section>

      <PriceCalculator
        open={!!openService}
        onClose={() => setOpenService(null)}
        service={openService || "Wedding Cards"}
      />
    </div>
  );
}
