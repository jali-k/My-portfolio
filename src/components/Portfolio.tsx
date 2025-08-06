import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

// Project images
import dopamineLiteImage from "../assets/projects/Dopamine lite.jpg";
import dopamineImage from "../assets/projects/Dopamine.jpg";
import fixerImage from "../assets/projects/fixer.jpg";
import supermarketNavImage from "../assets/projects/supermarket nav.jpg";
import acesFundImage from "../assets/projects/ACES fund management system.jpg";
import biologyLearningImage from "../assets/projects/Biology learning platform.jpg";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Dopamine Lite Web Application",
      category: "Web Development",
      type: "web",
      description:
        "A modern web application built with React and TypeScript, featuring responsive design, video stream security and user access management",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: dopamineLiteImage,
      liveUrl: "dopamineapplite.com",
      githubUrl: "private",
      githubMessage: "Codebase is private",
    },
    {
      title: "Dopamine Mobile Application",
      category: "Mobile Development",
      type: "mobile",
      description:
        "Cross-platform mobile application developed with Flutter, providing seamless user experience across iOS and Android.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: dopamineImage,
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.spt.spt&hl=en",
      githubUrl: "private",
      githubMessage: "Codebase is private",
    },
    {
      title: "Fixr - Issue Tracking System",
      category: "Full Stack Development",
      type: "web",
      description:
        "A comprehensive issue tracking system with user authentication, real-time messaging, and project management features.",
      technologies: ["React", "Node.js", "Firebase"],
      image: fixerImage,
      liveUrl: "https://support.sddopamine.com/",
      githubUrl: "private",
      githubMessage: "Codebase is private",
    },
    {
      title: "Real-Time Navigation System",
      category: "Web & Mobile Development",
      type: "mobile",
      description:
        "Real-time navigation app with live location tracking and route optimization.",
      technologies: ["Flutter", "React", "AWS"],
      image: supermarketNavImage,
      liveUrl:
        "https://cepdnaclk.github.io/e19-3yp-smart-supermarket-navigation-system/",
      githubUrl:
        "https://github.com/cepdnaclk/e19-3yp-smart-supermarket-navigation-system",
    },
    {
      title: "ACES Fund management system",
      category: "Web Development",
      type: "web",
      description:
        "Modern fund management automation system for association of computer engineering students with user-friendly interface and robust features.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: acesFundImage,
      liveUrl: "department-only",
      liveMessage:
        "Yet accessible inside the department. Will be publicly visible soon.",
      githubUrl:
        "https://github.com/cepdnaclk/e19-co227-ACES-Project-Fund-Requests",
    },
    {
      title: "Biology learning Platform",
      category: "Web Design",
      type: "web",
      description:
        "Beautiful biology learning platform with interactive lessons and study tools.",
      technologies: ["React", "Figma"],
      image: biologyLearningImage,
      liveUrl:
        "https://www.figma.com/proto/DJis2L0Q1GxeVAnflglnSp/Untitled?page-id=0%3A1&node-id=607-114&viewport=3593%2C1375%2C0.5&t=BeVPlsTWD6POog5X-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=607%3A114&show-proto-sidebar=1",
      githubUrl: "design-only",
      githubMessage: "No codebase - Design only",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-800 overflow-hidden">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-dark-900 border border-dark-600 rounded-2xl overflow-hidden hover:border-primary-500 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Partial color overlay for theme blending - bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-500/30 via-primary-500/15 to-transparent mix-blend-overlay"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-900/40 to-transparent"></div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Type Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      {project.type === "web" ? (
                        <Globe size={20} className="text-primary-400" />
                      ) : (
                        <Smartphone size={20} className="text-primary-400" />
                      )}
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Live/Demo Button */}
                    {project.liveUrl === "department-only" ? (
                      <div className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-not-allowed">
                        <ExternalLink size={16} />
                        <span className="text-xs text-center">
                          {project.liveMessage}
                        </span>
                      </div>
                    ) : (
                      <a
                        href={
                          project.liveUrl.startsWith("http")
                            ? project.liveUrl
                            : `https://${project.liveUrl}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>
                    )}

                    {/* GitHub/Code Button */}
                    {project.githubUrl === "private" ? (
                      <div className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-not-allowed">
                        <Github size={16} />
                        <span className="text-xs text-center">
                          {project.githubMessage}
                        </span>
                      </div>
                    ) : project.githubUrl === "design-only" ? (
                      <div className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 cursor-not-allowed">
                        <Github size={16} />
                        <span className="text-xs text-center">
                          {project.githubMessage}
                        </span>
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-dark-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-dark-600 transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-primary-400 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-primary-400 text-xs font-medium rounded-full border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
          >
            Contact Me for More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
