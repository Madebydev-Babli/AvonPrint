import React from "react";
import heroMock from "../assets/AvonLogo.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-16 pb-24 min-h-screen relative overflow-hidden" style={{ background: "#F7F4EF" }}>

      {/* 🎨 CMYK TOP LEFT */}
      <div className="absolute -top-6 -left-4 md:-top-10 md:-left-10 opacity-40 scale-90 pointer-events-none z-0">
  <div className="relative">
    <div className="cmyk-square cmyk-yellow" style={{ width: 120, height: 120 }} />
    <div className="cmyk-square cmyk-cyan absolute" style={{ width: 120, height: 120, left: 40, top: 30 }} />
    <div className="cmyk-square cmyk-magenta absolute" style={{ width: 120, height: 120, left: 0, top: 60 }} />
  </div>
</div>

      
      {/* 🎨 CMYK BOTTOM RIGHT */}
      <div className="absolute bottom-4 right-4 md:bottom-12 md:right-20 opacity-40 scale-90 pointer-events-none z-0">
  <div className="relative">
    <div className="cmyk-square cmyk-yellow" style={{ width: 120, height: 120 }} />
    <div className="cmyk-square cmyk-cyan absolute" style={{ width: 120, height: 120, left: 40, top: 30 }} />
    <div className="cmyk-square cmyk-magenta absolute" style={{ width: 120, height: 120, left: 0, top: 60 }} />
  </div>
</div>
      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111]">
            About <span className="text-[#D70073]">Avon Print</span>
          </h1>
          <p className="mt-3 text-lg text-[#3F3F3F] max-w-2xl">
            We are a premium print studio committed to delivering top-quality printing
            with precision, creativity, and the perfect CMYK color balance.
          </p>
        </section>

        {/* STORY SECTION */}
        <section className="max-w-5xl mx-auto px6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE BLOCK */}
          <div className="relative w-full">
            <div
              className="absolute -inset-6 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(224,210,185,0.25), rgba(245,236,216,0.20))",
                transform: "rotate(-2deg)",
              }}
            />
            <div className="bg-white rounded-3xl p-5 shadow-xl border border-[#E6DEC9] relative z-10">
              <img
                src={heroMock}
                alt="Avon Print"
                className="w-full h-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* TEXT BLOCK */}
          <div>
            <h2 className="text-3xl font-bold text-[#1B1B1B] mb-3">
              Crafting Prints With Passion
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              For over a decade, we have specialized in delivering premium printing
              solutions — from elegant wedding invitations to corporate stationery and
              brand identity materials. Our focus is simple:
            </p>

            <ul className="mt-4 space-y-2 text-[#3B3B3B]">
              <li>✔ Perfect color accuracy (CMYK optimized)</li>
              <li>✔ Modern printing technologies</li>
              <li>✔ High-quality materials & textures</li>
              <li>✔ Fast delivery & professional finishing</li>
            </ul>

            <p className="mt-4 text-[#4A4A4A]">
              Whether it's a one-time print or a bulk business order, our team ensures
              every project gets the attention it deserves.
            </p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h3 className="text-4xl font-extrabold text-[#1B1B1B] mb-10 text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white shadow-[0px_8px_28px_rgba(0,0,0,0.08)] border border-[#E7DFCC] p-8 hover:shadow-lg transition"
            >
              <div className="w-full h-1.5 rounded-full mb-6" style={{ background: "#D70073" }}></div>
              <h4 className="text-2xl font-semibold text-[#111]">Quality First</h4>
              <p className="mt-3 text-gray-600 leading-relaxed">
                From materials to finishing, quality comes before everything else.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white shadow-[0px_8px_28px_rgba(0,0,0,0.08)] border border-[#E7DFCC] p-8 hover:shadow-lg transition"
            >
              <div className="w-full h-1.5 rounded-full mb-6" style={{ background: "#0096CD" }}></div>
              <h4 className="text-2xl font-semibold text-[#111]">Creative Approach</h4>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Every print is crafted with modern design, brand identity, and trends.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white shadow-[0px_8px_28px_rgba(0,0,0,0.08)] border border-[#E7DFCC] p-8 hover:shadow-lg transition"
            >
              <div className="w-full h-1.5 rounded-full mb-6" style={{ background: "#FFC700" }}></div>
              <h4 className="text-2xl font-semibold text-[#111]">Fast & Reliable</h4>
              <p className="mt-3 text-gray-600 leading-relaxed">
                On-time delivery with premium finishing. Always.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

    </div>
  );
}
