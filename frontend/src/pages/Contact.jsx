import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_6e93975",     
        "template_1lynwpm",    
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Ws8a081cVL2ggYxM-"    
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again!");
        }
      );
  };

  return (
    <div
      className="pt-20 pb-24 min-h-screen relative overflow-hidden"
      style={{ background: "#F7F4EF" }}
    >
      {/* 🎨 CMYK TOP LEFT */}
      <div className="absolute -top-0 -left-0 opacity-40 scale-90 pointer-events-none z-0">
        <div className="relative">
          <div className="cmyk-square cmyk-yellow" style={{ width: 150, height: 150 }} />
          <div
            className="cmyk-square cmyk-cyan absolute"
            style={{ width: 150, height: 150, left: 50, top: 40 }}
          />
          <div
            className="cmyk-square cmyk-magenta absolute"
            style={{ width: 150, height: 150, left: 0, top: 80 }}
          />
        </div>
      </div>

      {/* 🎨 CMYK BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 opacity-40 scale-90 pointer-events-none translate-y-12 translate-x-12 z-0">
        <div className="relative">
          <div className="cmyk-square cmyk-yellow" style={{ width: 150, height: 150 }} />
          <div
            className="cmyk-square cmyk-cyan absolute"
            style={{ width: 150, height: 150, left: 50, top: 40 }}
          />
          <div
            className="cmyk-square cmyk-magenta absolute"
            style={{ width: 150, height: 150, left: 0, top: 80 }}
          />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B1B1B]">
            Contact <span className="text-[#D70073]">Avon Print</span>
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Reach us anytime for printing enquiries, quotes, samples, or support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE INFO */}
          <div className="space-y-6">
            {/* PHONE */}
            <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E6DEC9]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D70073]/15 flex items-center justify-center">
                  <Phone className="text-[#D70073]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    Phone / WhatsApp
                  </h3>
                  <p className="text-gray-600">+91 60095 70452</p>
                </div>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E6DEC9]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0096CD]/15 flex items-center justify-center">
                  <Mail className="text-[#0096CD]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    Email
                  </h3>
                  <p className="text-gray-600">avonprint1313@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* ADDRESS */}
            <motion.div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E6DEC9]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFC700]/20 flex items-center justify-center">
                  <MapPin className="text-[#FFC700]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    Location
                  </h3>
                  <p className="text-gray-600">Avon Print Studio, Punjab</p>
                </div>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div className="rounded-2xl overflow-hidden border border-[#E6DEC9] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.119842054472!2d75.8483!3d31.5154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzU1LjQiTiA3NcKwNTEnMDYuMCJF!5e0!3m2!1sen!2sin!4v1732943100000"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#E6DEC9]"
          >
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-6">
              Send a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#DCCEB3] focus:border-[#D70073] outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#DCCEB3] focus:border-[#0096CD] outline-none"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#DCCEB3] focus:border-[#FFC700] outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white font-semibold rounded-2xl shadow hover:shadow-md"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className="text-center mt-4 text-sm font-medium text-[#1B1B1B]">
                {status}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}