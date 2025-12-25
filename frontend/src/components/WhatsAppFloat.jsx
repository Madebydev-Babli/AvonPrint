import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phone = "+917383521849";
  const whatsappUrl = `https://wa.me/91${phone.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Avon Print, I want to place an order."
  )}`;

  return (
    <button
      onClick={() => window.open(whatsappUrl, "_blank")}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-xl"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
}
