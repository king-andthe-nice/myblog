'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, Star, Eye } from 'lucide-react'

export default function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: '深入理解React Hooks：从基础到高级应用',
      excerpt: '全面解析React Hooks的使用方法，包括useState、useEffect、useContext等核心Hook，以及如何创建自定义Hook来解决复杂的状态管理问题。',
      author: '张三',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      category: '技术开发',
      readTime: '8 分钟',
      publishDate: '2024-01-15',
      views: 1250,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cce?w=400&h=250&fit=crop',
      href: '#'
    },
    {
      id: 2,
      title: '现代Web设计趋势：2024年UI/UX设计指南',
      excerpt: '探索2024年最新的Web设计趋势，包括微交互、暗色模式、3D元素等，为你的下一个项目提供设计灵感。',
      author: '李四',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      category: '设计创意',
      readTime: '6 分钟',
      publishDate: '2024-01-12',
      views: 980,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      href: '#'
    },
    {
      id: 3,
      title: '摄影构图技巧：如何拍出令人印象深刻的照片',
      excerpt: '从基础构图法则到高级拍摄技巧，分享实用的摄影经验，帮助你提升摄影水平，拍出更专业的作品。',
      author: '王五',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      category: '摄影艺术',
      readTime: '10 分钟',
      publishDate: '2024-01-10',
      views: 756,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop',
      href: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-dark-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            精选
            <span className="gradient-text"> 文章</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            发现最受欢迎和最有价值的内容
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group glass rounded-xl overflow-hidden card-hover"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 text-white">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{post.rating}</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={post.authorAvatar}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm text-gray-300">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.publishDate}</div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">阅读</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>查看更多文章</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}