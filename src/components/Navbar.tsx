"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Proyek", href: "#proyek" },
    { name: "Sertifikat", href: "#sertifikat" },
    { name: "HKI", href: "#hki" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#06275B]/90 backdrop-blur-md shadow-lg py-2.5"
          : "bg-transparent py-3"
        }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#cover"
          onClick={(e) => handleScrollTo(e, "#cover")}
          className="text-white flex items-center gap-2 group"
        >
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#8CC6EE] transition-colors">
            ALEA ATAPASYA
          </span>
          <span className="w-2 h-2 rounded-full bg-[#8CC6EE] animate-pulse"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-white/90 hover:text-white hover:bg-white/20 text-xs lg:text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06275B]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
