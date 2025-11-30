export default function Footer() {
  return (
    <footer className=" bg-[#F7F4EF] border-t border-[#E6DEC9] mt-24 pt-16 pb-10">

      {/* CMYK Decorative Squares */}
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="absolute -top-10 -right-10 opacity-40 pointer-events-none">
          <div className="cmyk-square cmyk-magenta" style={{ width: 120, height: 120 }} />
          <div className="cmyk-square cmyk-cyan absolute" style={{ width: 120, height: 120, left: 40, top: -20 }} />
          <div className="cmyk-square cmyk-yellow absolute" style={{ width: 120, height: 120, left: 20, top: 40 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">

          {/* BRAND */}
          <div className="space-y-3">
            <h3 className="text-3xl font-extrabold text-[#1B1B1B]">Avon Print</h3>
            <p className="text-gray-700 max-w-sm leading-relaxed">
              High-quality printing with perfect CMYK color accuracy, premium materials,
              and fast delivery — trusted by businesses & families across Punjab.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xl font-bold text-[#1B1B1B] mb-3">Our Services</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Wedding Cards</li>
              <li>Visiting Cards</li>
              <li>Shagun Envelopes</li>
              <li>Bill Books</li>
              <li>Letterheads</li>
              <li>Posters</li>
              <li>Stamps</li>
              <li>Office Stationery</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#1B1B1B]">Contact</h4>
            <p className="text-gray-700">📍 Punjab, India</p>
            <p className="text-gray-700">📞 +91 60095 70452</p>
            <a
              href={`https://wa.me/916009570452?text=${encodeURIComponent(
                "Hello Avon Print, I want to place an order."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-black text-white rounded-2xl font-semibold shadow hover:bg-[#1B1B1B] transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 text-sm mt-12 border-t border-[#E6DEC9] pt-4">
        © {new Date().getFullYear()} Avon Print — Premium Printing Solutions
      </div>
    </footer>
  );
}