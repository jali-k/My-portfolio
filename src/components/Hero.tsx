import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  MessageCircle,
  Globe,
} from "lucide-react";
import profilePhoto from "../assets/jaliya-modern-photo.png";

const Hero: React.FC = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/jali-k", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jaliya-kumarasiri-5a71441b4/",
      icon: Linkedin,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/94766934563",
      icon: MessageCircle,
    },
    {
      name: "Website",
      href: "https://jali-k.github.io/My-portfolio/",
      icon: Globe,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-dark-900 flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mb-8 lg:mb-0 text-center lg:text-left"
          >
            {/* Hello Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary-500 text-lg font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Jaliya
              </h1>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Rukmal
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-400 font-medium"
            >
              Software Engineer
            </motion.p>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Crafting exceptional digital experiences beyond the ordinary.
              <span className="text-primary-400 font-medium">
                {" "}
                Ready for extraordinary results?
              </span>
            </motion.p>

            {/* Hire Me Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Say Hello</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex space-x-4 pt-8 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 bg-dark-700 border border-dark-600 rounded flex items-center justify-center text-white hover:bg-dark-600 transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent
                      size={18}
                      className="text-gray-300 group-hover:text-white transition-colors"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full overflow-hidden"
          >
            <div className="relative w-full max-w-lg mx-auto px-4 sm:px-0">
              <div className="relative">
                {/* Enhanced Matte Texture Shadow */}
                <div
                  className="absolute rounded-2xl opacity-80"
                  style={{
                    top: "6px",
                    left: "6px",
                    right: "-6px",
                    bottom: "-6px",
                    backgroundImage: `
                      radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 2px, transparent 0),
                      radial-gradient(circle at 4px 4px, rgba(255,255,255,0.1) 1px, transparent 0),
                      linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)
                    `,
                    backgroundSize: "8px 8px, 6px 6px, 100% 100%",
                    filter: "blur(1px)",
                    zIndex: -1,
                  }}
                ></div>

                <img
                  src={profilePhoto}
                  alt="Jaliya Rukmal Kumarasiri"
                  className="relative w-full h-auto hover:scale-105 transition-all duration-500 rounded-2xl filter contrast-95 brightness-95"
                  style={{
                    boxShadow: `
                      0 12px 40px rgba(0,0,0,0.5),
                      0 6px 20px rgba(0,0,0,0.3),
                      inset 0 1px 0 rgba(255,255,255,0.1),
                      inset 0 -1px 0 rgba(0,0,0,0.1)
                    `,
                  }}
                />

                {/* Modern decorative elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute bottom-16 left-8 w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60"></div>
                <div className="absolute top-1/3 right-4 w-1 h-1 bg-white rounded-full opacity-40"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
