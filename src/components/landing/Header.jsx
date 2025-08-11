"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-strong border-b border-gray-100"
          : "bg-gradient-to-r from-purple-900 to-blue-900 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <h1
              className={`text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gradient-primary" : "text-white"
              }`}
            >
              SoftwareHouse
            </h1>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-gray-700 hover:text-purple-600"
                    : "text-white hover:text-purple-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Hover Underline Effect */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "opacity-100" : "opacity-80"
                  }`}
                ></span>

                {/* Hover Background */}
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? "bg-purple-50 opacity-0 group-hover:opacity-100"
                      : "bg-white/10 opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div
            className="hidden md:block animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              className={`btn-modern px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-glow hover:shadow-glow-hover"
                  : "bg-white text-purple-700 hover:bg-purple-50 shadow-soft hover:shadow-medium"
              }`}
            >
              <span>Login</span>
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className={`py-4 space-y-2 border-t transition-all duration-300 ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button
                className={`w-full btn-modern px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-glow"
                    : "bg-white text-purple-700 shadow-soft"
                }`}
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
