import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      position: 'Project Manager',
      company: 'TechCorp Solutions',
      rating: 5,
      review: 'Jaliya delivered exceptional work on our mobile application. His attention to detail and technical expertise exceeded our expectations. Highly recommended!',
      avatar: 'https://via.placeholder.com/80x80/1e293b/f59e0b?text=SJ',
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'StartupXYZ',
      rating: 5,
      review: 'Working with Jaliya was a fantastic experience. He understood our requirements perfectly and delivered a robust web application on time and within budget.',
      avatar: 'https://via.placeholder.com/80x80/1e293b/f59e0b?text=MC',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Owner',
      company: 'Digital Innovations',
      rating: 5,
      review: 'Jaliya\'s expertise in full-stack development is impressive. He created a seamless user experience and his code quality is top-notch. Will definitely work with him again.',
      avatar: 'https://via.placeholder.com/80x80/1e293b/f59e0b?text=ER',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            What clients say about my work and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8 h-full hover:border-primary-500 transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={32} className="text-primary-400" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-primary-400 fill-current"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-dark-300 leading-relaxed mb-8 italic">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-primary-500"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{review.name}</h4>
                    <p className="text-primary-400 text-sm font-medium">{review.position}</p>
                    <p className="text-dark-400 text-sm">{review.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

