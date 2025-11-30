import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PriceCalculator({ open, onClose, initialCategory }) {
  const [category, setCategory] = useState(initialCategory || "Wedding Cards");
  const [subCategory, setSubCategory] = useState("");
  const [qty, setQty] = useState(100);

  useEffect(() => {
    setCategory(initialCategory);
    setSubCategory("");
    setQty(100);
  }, [initialCategory]);

  if (!open) return null;

  const calculatePrice = () => {
    if (category === "Wedding Cards") return qty * 10;

    if (category === "Visiting Cards") {
      if (qty === 1000) return 599;
      if (qty === 200) return 299;
      if (qty === 100) return 249;
      if (qty > 1000) return Math.round(qty * 0.59);
      if (qty > 200) return Math.round(qty * 1.49);
      return Math.round(qty * 2.49);
    }

    if (category === "Shagun Envelopes") {
      if (subCategory === "Full Size") return 550;
      if (subCategory === "Pocket Size") return 500;
    }

    if (category === "Bill Books") {
      if (qty < 10) return "Minimum 10 required";
      return qty * 130;
    }

    if (category === "Letterheads") return 2499;

    if (category === "Stamps") {
      if (subCategory === "Pre-Ink") return 550;
      if (subCategory === "Simple") return 250;
    }

    if (category === "Office Stationery") return 2499;

    return 0;
  };

  const price = calculatePrice();

  const whatsappMessage = `Hello Avon Print, I want to order:
Product: ${category}
Type: ${subCategory || "N/A"}
Quantity: ${qty}
Price: ₹${price}`;

  const subOptions = {
    "Shagun Envelopes": ["Full Size", "Pocket Size"],
    "Stamps": ["Pre-Ink", "Simple"],
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative max-w-xl w-full p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#E6DEC9]">

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1B1B1B] hover:text-[#D70073] transition"
        >
          <X size={28} />
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] text-center mb-8 relative z-10">
          Price Calculator
        </h2>

        {/* CMYK squares behind heading */}
        <div className="absolute -top-0 -left-60 opacity-30 pointer-events-none">
          <div className="cmyk-square cmyk-yellow" style={{ width: 100, height: 100 }} />
          <div className="cmyk-square cmyk-cyan" style={{ width: 100, height: 100, left: 40, top: 40 }} />
          <div className="cmyk-square cmyk-magenta" style={{ width: 100, height: 100, left: 20, top: 60 }} />
        </div>

        <div className="absolute -bottom--100 -right-10 opacity-30 pointer-events-none">
          <div className="cmyk-square cmyk-yellow" style={{ width: 100, height: 100 }} />
          <div className="cmyk-square cmyk-cyan" style={{ width: 100, height: 100, left: 40, top: 40 }} />
          <div className="cmyk-square cmyk-magenta" style={{ width: 100, height: 100, left: 20, top: 60 }} />
        </div>

        {/* CATEGORY */}
        <label className="font-semibold text-[#1B1B1B]">Choose Product</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubCategory("");
          }}
          className="w-full p-3 mt-2 mb-5 rounded-xl border border-[#E6DEC9] bg-white shadow-sm"
        >
          <option>Wedding Cards</option>
          <option>Visiting Cards</option>
          <option>Shagun Envelopes</option>
          <option>Bill Books</option>
          <option>Letterheads</option>
          <option>Stamps</option>
          <option>Office Stationery</option>
        </select>

        {/* SUB CATEGORY */}
        {subOptions[category] && (
          <>
            <label className="font-semibold text-[#1B1B1B]">Type</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full p-3 mt-2 mb-5 rounded-xl border border-[#E6DEC9] bg-white shadow-sm"
            >
              <option value="">Select Type</option>
              {subOptions[category].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </>
        )}

        {/* QUANTITY */}
        {category !== "Letterheads" &&
          category !== "Stamps" &&
          category !== "Office Stationery" &&
          category !== "Shagun Envelopes" && (
            <>
              <label className="font-semibold text-[#1B1B1B]">Quantity</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full p-3 mt-2 mb-6 rounded-xl border border-[#E6DEC9] bg-white shadow-sm"
              />
            </>
          )}

        {/* PRICE BOX */}
        <div className="p-5 bg-[#F0E6D8] rounded-xl text-center shadow-lg mt-4">
          <p className="text-lg font-medium text-[#1B1B1B]">Estimated Price</p>
          <h3 className="text-4xl font-bold mt-1 text-[#1B1B1B]">₹{price}</h3>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/916009570452?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          className="block mt-6 text-center px-6 py-3 bg-black text-white rounded-2xl font-semibold shadow hover:bg-[#1B1B1B] transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}