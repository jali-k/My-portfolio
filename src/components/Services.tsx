import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Creating innovative mobile applications using Flutter and native technologies for both iOS and Android platforms.',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Building modern, responsive web applications using React, Next.js, and other cutting-edge technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces that provide exceptional user experiences.',
    },
    {
      icon: Wrench,
      title: 'Web/Mobile Tools',
      description: 'Developing custom tools and solutions. If the goal is extraordinary, I\'ll accept it and make it happen.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8 h-full hover:border-primary-500 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-dark-700 border border-dark-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 group-hover:border-primary-500 transition-all duration-300">
                  <service.icon size={32} className="text-dark-300 group-hover:text-primary-400 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

