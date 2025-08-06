import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Latest Trends in React Development',
      excerpt: 'Exploring the newest features and best practices in React 18 and beyond, including concurrent features and server components.',
      author: 'Jaliya',
      date: '2024-01-15',
      category: 'React',
      image: 'https://via.placeholder.com/400x250/1e293b/f59e0b?text=React+Trends',
      readTime: '5 min read',
    },
    {
      title: 'Building Scalable Mobile Apps with Flutter',
      excerpt: 'A comprehensive guide to creating performant and maintainable mobile applications using Flutter and Dart.',
      author: 'Jaliya',
      date: '2024-01-10',
      category: 'Flutter',
      image: 'https://via.placeholder.com/400x250/1e293b/f59e0b?text=Flutter+Guide',
      readTime: '8 min read',
    },
    {
      title: 'TypeScript Best Practices for Large Projects',
      excerpt: 'Essential TypeScript patterns and practices for maintaining code quality in enterprise-level applications.',
      author: 'Jaliya',
      date: '2024-01-05',
      category: 'TypeScript',
      image: 'https://via.placeholder.com/400x250/1e293b/f59e0b?text=TypeScript+Tips',
      readTime: '6 min read',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 bg-dark-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-dark-900 border border-dark-600 rounded-2xl overflow-hidden hover:border-primary-500 transition-all duration-300">
                {/* Featured Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-dark-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-dark-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dark-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center space-x-2 text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:trandark-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Posts</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

