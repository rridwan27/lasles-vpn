"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Features", href: "features" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Help", href: "faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(NAV_LINKS.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Logo.svg" alt="LaslesVPN" width={120} height={64} />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={`#${link.href}`}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href
                    ? "text-red-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors cursor-pointer">
            Sign In
          </button>
          <Button variant="outline">Sign Up</Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-red-500 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="flex gap-4 pt-2">
            <button className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Sign In
            </button>
            <Button variant="outline">Sign Up</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
