"use client"

import { motion } from "framer-motion"
import { Brain, Target, BarChart3, Zap, Users, Globe, MessageSquare, Palette, ArrowRight, Sparkles } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description:
        "Create compelling ad copy, social media posts, and marketing materials with our advanced AI engine that understands your brand voice.",
      highlight: "Generate 10x faster",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Smart Targeting",
      description:
        "Identify and reach your ideal audience with precision using machine learning algorithms that analyze behavior patterns.",
      highlight: "95% accuracy rate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track campaign performance in real-time with detailed insights, predictive analytics, and actionable recommendations.",
      highlight: "Real-time insights",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const secondaryFeatures = [
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Automate repetitive marketing tasks and focus on strategy while AI handles the execution.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using built-in collaboration tools and workflow management.",
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Connect with all major advertising platforms and social media channels from one dashboard.",
    },
    {
      icon: MessageSquare,
      title: "Customer Insights",
      description: "Understand your customers better with AI-powered sentiment analysis and behavior tracking.",
    },
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain brand voice and visual consistency across all marketing channels automatically.",
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Powered by Advanced AI</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing strategy with cutting-edge AI technology designed for the future of digital
            advertising.
          </p>
        </motion.div>

        {/* Main Features - Large Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <GlassCard className="p-8 h-full hover:bg-white/15 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm text-green-300 font-medium">{feature.highlight}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">{feature.description}</p>

                {/* Learn More Link */}
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-12">Plus Everything Else You Need</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {secondaryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <GlassCard className="p-6 h-full hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Video Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative max-w-5xl mx-auto">
            <GlassCard className="p-2 hover:bg-white/15 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 via-slate-900/50 to-pink-900/50 rounded-xl border border-white/20 overflow-hidden relative group">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                  >
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                  </motion.button>
                </div>

                {/* Video Thumbnail */}
                <img
                  src="/placeholder.svg?height=500&width=900&text=AI+Marketing+Dashboard+Demo"
                  alt="Product Demo Video"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />

                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">Live Demo</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30"
                >
                  <div className="text-white text-sm">
                    <div className="font-medium">Campaign Performance</div>
                    <div className="text-green-300">+247% ROI</div>
                  </div>
                </motion.div>
              </div>
            </GlassCard>

            {/* Video Description */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">See ADmyBRAND AI in Action</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Watch how our AI-powered platform transforms marketing campaigns from concept to conversion in minutes,
                not hours.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
