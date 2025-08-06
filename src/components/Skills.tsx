import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', percentage: 95 },
    { name: 'React', percentage: 95 },
    { name: 'NextJS', percentage: 95 },
    { name: 'NodeJS', percentage: 95 },
    { name: 'Java', percentage: 90 },
    { name: 'Javascript', percentage: 90 },
    { name: 'Flutter', percentage: 90 },
    { name: 'Springboot', percentage: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              All the skills that I have in the field of software development are mentioned.
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              I have extensive experience in various programming languages, frameworks, and technologies. 
              My expertise spans across full-stack development, mobile app development, and modern web technologies. 
              I continuously learn and adapt to new technologies to stay current with industry trends.
            </p>
          </motion.div>

          {/* Right - Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary-400 font-bold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

