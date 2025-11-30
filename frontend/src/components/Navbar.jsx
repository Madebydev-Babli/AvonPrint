import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/AvonLogo.jpeg";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Avon Print"
            className="w-28 h-auto object-contain transition group-hover:opacity-90"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-semibold tracking-wider text-gray-800">
              Avon Print
            </span>
            <span className="text-xs text-gray-500 tracking-wide">
              Premium Printing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition 
                ${isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"} 
                after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                after:bg-black after:scale-x-0 hover:after:scale-x-100 
                after:origin-left after:transition-transform`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2.5 rounded-full border border-gray-200 bg-white shadow-sm"
        >
          {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <nav className="max-w-6xl mx-auto flex flex-col px-4 py-3 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm transition 
                  ${isActive 
                    ? "bg-gray-100 text-black font-semibold" 
                    : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}