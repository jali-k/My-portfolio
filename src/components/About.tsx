import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Globe,
  Briefcase,
} from "lucide-react";
import profilePhoto from "../assets/jaliya-about-photo.png";
import cvFile from "../assets/files/Jaliya_Kumarasiri_Software_Engineer_Resume.pdf";

const About: React.FC = () => {
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "November 03, 2000" },
    { icon: Phone, label: "Phone", value: "+94 76 6934563" },
    { icon: Mail, label: "Email", value: "jaliya.r.kumarasiri@gmail.com" },
    { icon: MapPin, label: "From", value: "Srilanka, Kandy, Peradeniya" },
    { icon: Globe, label: "Language", value: "English, Sinhala" },
    { icon: Briefcase, label: "Freelance", value: "Fulltime with my own team" },
  ];

  return (
    <section id="about" className="pt-20 pb-20 bg-dark-800 overflow-hidden">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={profilePhoto}
                alt="Jaliya Rukmal Kumarasiri"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Hi There! I'm Jaliya Rukmal Kumarasiri
              </h3>
              <p className="text-primary-400 text-xl font-medium mb-6">
                Software Engineer
              </p>
              <p className="text-dark-300 text-lg leading-relaxed">
                I am a passionate Software Engineer with expertise in full-stack
                development. I specialize in creating innovative solutions using
                modern technologies and frameworks. My goal is to build
                extraordinary applications that make a positive impact on users'
                lives.
              </p>
            </div>

            {/* Personal Information Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-dark-900/50 rounded-lg border border-dark-600"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <info.icon size={16} className="text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-dark-400 text-sm font-medium">
                      {info.label}
                    </p>
                    <p className="text-white text-sm break-words break-all">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href={cvFile}
              download="Jaliya_Kumarasiri_Software_Engineer_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold items-center space-x-2 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group"
            >
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
