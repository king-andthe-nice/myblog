'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Camera, 
  Music, 
  Gamepad2, 
  Heart, 
  Briefcase, 
  BookOpen,
  ArrowRight
} from 'lucide-react'

export default function CategoryGrid() {
  const categories = [
    {
      icon: Code,
      title: '技术开发',
      description: '编程语言、框架、工具、最佳实践',
      color: 'from-blue-500 to-cyan-500',
      posts: 120,
      href: '#'
    },
    {
      icon: Palette,
      title: '设计创意',
      description: 'UI/UX设计、平面设计、创意灵感',
      color: 'from-purple-500 to-pink-500',
      posts: 85,
      href: '#'
    },
    {
      icon: Camera,
      title: '摄影艺术',
      description: '摄影技巧、后期处理、器材评测',
      color: 'from-orange-500 to-red-500',
      posts: 65,
      href: '#'
    },
    {
      icon: Music,
      title: '音乐影视',
      description: '音乐推荐、电影评论、娱乐资讯',
      color: 'from-green-500 to-teal-500',
      posts: 45,
      href: '#'
    },
    {
      icon: Gamepad2,
      title: '游戏电竞',
      description: '游戏评测、攻略分享、电竞资讯',
      color: 'from-yellow-500 to-orange-500',
      posts: 78,
      href: '#'
    },
    {
      icon: Heart,
      title: '生活感悟',
      description: '个人成长、情感分享、生活记录',
      color: 'from-pink-500 to-rose-500',
      posts: 92,
      href: '#'
    },
    {
      icon: Briefcase,
      title: '职场发展',
      description: '职业规划、技能提升、行业洞察',
      color: 'from-indigo-500 to-purple-500',
      posts: 56,
      href: '#'
    },
    {
      icon: BookOpen,
      title: '读书笔记',
      description: '好书推荐、读书心得、知识总结',
      color: 'from-emerald-500 to-green-500',
      posts: 73,
      href: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
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
            探索不同
            <span className="gradient-text"> 领域</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            精心分类的博客内容，满足你的各种兴趣和需求
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group glass rounded-xl p-6 card-hover cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {category.posts} 篇文章
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}