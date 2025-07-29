"use client"

import { motion } from "framer-motion"
import { ArrowRight, User, Clock, BookOpen, Eye, MessageCircle, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { useState } from "react"

export function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const featuredPosts = [
    {
      title: "10 AI Tools Every Marketer Needs in 2025",
      excerpt: "Essential AI tools that will transform your marketing workflow and boost productivity.",
      author: "Michael Chen",
      date: "3 days ago",
      readTime: "8 min",
      image: "/placeholder.svg?height=300&width=400&text=AI+Tools+2025",
      category: "Tools",
      views: "8.2K",
      comments: 23,
    },
    {
      title: "Case Study: 400% ROI with AI Personalization",
      excerpt: "How one e-commerce brand achieved incredible results with AI-powered personalization.",
      author: "Emily Rodriguez",
      date: "5 days ago",
      readTime: "6 min",
      image: "/placeholder.svg?height=300&width=400&text=ROI+Case+Study",
      category: "Case Study",
      views: "15.1K",
      comments: 89,
    },
    {
      title: "Future of Content: AI vs Human Creativity",
      excerpt: "Exploring the balance between artificial intelligence and human creativity.",
      author: "David Kim",
      date: "1 week ago",
      readTime: "10 min",
      image: "/placeholder.svg?height=300&width=400&text=AI+vs+Human",
      category: "Insights",
      views: "6.8K",
      comments: 34,
    },
  ]

  const categories = [
    { name: "All", count: 24, color: "from-purple-500 to-pink-500" },
    { name: "Strategy", count: 8, color: "from-blue-500 to-cyan-500" },
    { name: "Tools", count: 6, color: "from-green-500 to-emerald-500" },
    { name: "Case Study", count: 4, color: "from-orange-500 to-red-500" },
    { name: "Tutorial", count: 6, color: "from-purple-500 to-indigo-500" },
    { name: "Analytics", count: 3, color: "from-pink-500 to-rose-500" },
  ]

  const trendingTopics = [
    "AI Personalization",
    "Marketing Automation",
    "Predictive Analytics",
    "Content Generation",
    "Customer Segmentation",
  ]

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300">Fresh Insights • Updated Daily</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Marketing Intelligence
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Hub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert insights, proven strategies, and the latest trends in AI-powered marketing.
          </p>
        </motion.div>

        {/* Trending Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-400 text-sm font-medium">Trending:</span>
            {trendingTopics.map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 border border-white/20"
              >
                #{topic.replace(" ", "")}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles - Masonry Layout */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer`}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <GlassCard className="overflow-hidden h-full hover:bg-white/15 transition-all duration-300 relative">
                  {/* Image */}
                  <div className={`relative overflow-hidden h-48`}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                        {post.category}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                        <Bookmark className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6`}>
                    <h3
                      className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 text-lg`}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{post.author}</div>
                          <div className="text-gray-400 text-xs">{post.date}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-white/10 group bg-transparent px-8 py-4"
          >
            View More Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <GlassCard className="p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Want More Insights?</h3>
            <p className="text-gray-300 mb-6">
              Join our community of 50,000+ marketers and get exclusive content, early access to new articles, and
              expert tips delivered weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Join Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent"
              >
                Browse All Articles
              </Button>
            </div>
          </GlassCard> */}
        </motion.div>
      </div>
    </section>
  )
}
