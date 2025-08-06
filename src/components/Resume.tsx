import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'BSc. Computer Engineering',
      period: '2019 - 2025',
      institution: 'University of Peradeniya',
      description: 'Specialized in software engineering, algorithms, and system design. Gained comprehensive knowledge in computer science fundamentals and practical software development.',
    },
  ];

  const experience = [
    {
      position: 'Software Engineer Intern',
      period: '2023 - 2024',
      company: 'Clouda',
      description: 'Worked on developing scalable web applications and mobile solutions. Gained hands-on experience with modern development practices and agile methodologies.',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap size={24} className="text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  
                  <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 hover:border-primary-500 transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-primary-400" />
                      <span className="text-primary-400 font-medium">{edu.period}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-primary-400 font-medium mb-3">{edu.institution}</p>
                    <p className="text-dark-300 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <Briefcase size={24} className="text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  
                  <div className="bg-dark-800 border border-dark-600 rounded-xl p-6 hover:border-primary-500 transition-colors duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-primary-400" />
                      <span className="text-primary-400 font-medium">{exp.period}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{exp.position}</h4>
                    <p className="text-primary-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-dark-300 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

