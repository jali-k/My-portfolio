import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME", isActive: true },
    { id: "about", label: "ABOUT", isActive: false },
    { id: "resume", label: "RESUME", isActive: false },
    { id: "portfolio", label: "PORTFOLIO", isActive: false },
    { id: "contact", label: "CONTACT", isActive: false },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 group cursor-pointer">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-xl border-2 border-blue-400/30 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

              {/* Inner rotating ring - opposite direction */}
              <div
                className="absolute inset-1 rounded-lg border border-blue-500/40"
                style={{ animation: "spin 15s linear infinite reverse" }}
              ></div>

              {/* Main logo container - outlined */}
              <div className="absolute inset-2 border-2 border-blue-500 rounded-lg flex items-center justify-center backdrop-blur-sm bg-dark-900/20 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all duration-500 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Pulsing dots */}
                <div
                  className="absolute top-1 right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDuration: "2s" }}
                ></div>
                <div
                  className="absolute bottom-1 left-1 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                ></div>

                {/* Letter J with glow effect */}
                <span className="relative text-blue-400 font-black text-sm tracking-tight z-10 drop-shadow-lg group-hover:text-blue-300 transition-colors duration-300">
                  J
                </span>

                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating particles */}
              <div
                className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-bounce"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Desktop Navigation - Simple text links like reference */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium hover:text-primary-500 transition-colors text-sm ${
                  item.isActive ? "text-primary-500" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-2 text-primary-500">
            <Phone size={16} />
            <span className="text-sm font-medium">+94 76 6934563</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dark-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 font-medium hover:text-primary-500 transition-colors ${
                    item.isActive ? "text-primary-500" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
