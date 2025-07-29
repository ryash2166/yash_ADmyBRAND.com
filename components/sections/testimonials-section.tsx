"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "ADmyBRAND AI has revolutionized our marketing campaigns. We've seen a 300% increase in engagement and our ROI has never been better. The AI understands our brand voice perfectly.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      logo: "/placeholder.svg?height=40&width=120&text=TechCorp",
      metrics: { engagement: "+300%", roi: "+150%", time: "-70%" },
      featured: true,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content:
        "The AI-powered content generation is incredible. It understands our brand voice perfectly and creates content that converts. We've scaled our content production by 10x.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      logo: "/placeholder.svg?height=40&width=120&text=StartupXYZ",
      metrics: { content: "+1000%", conversion: "+85%", cost: "-60%" },
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Manager",
      company: "E-commerce Plus",
      content:
        "The automation features have saved us countless hours. We can now focus on strategy while the AI handles execution flawlessly. Our team productivity has doubled.",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      logo: "/placeholder.svg?height=40&width=120&text=E-commerce+Plus",
      metrics: { productivity: "+200%", automation: "95%", savings: "$50K" },
      featured: true,
    },
  ];

  const gridTestimonials = [
    {
      name: "David Kim",
      role: "CMO",
      company: "Global Brands",
      content:
        "Outstanding platform! The analytics and insights have helped us optimize our campaigns like never before.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=Global",
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Manager",
      company: "Creative Agency",
      content:
        "The team collaboration features are fantastic. Our entire marketing team can work together seamlessly.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=Creative",
    },
    {
      name: "James Wilson",
      role: "Digital Director",
      company: "Retail Corp",
      content:
        "AI targeting has improved our ad performance by 400%. The ROI is incredible.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=Retail",
    },
    {
      name: "Anna Martinez",
      role: "Brand Manager",
      company: "Fashion Co",
      content:
        "Brand consistency across all channels has never been easier. The AI maintains our voice perfectly.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=Fashion",
    },
    {
      name: "Robert Taylor",
      role: "VP Marketing",
      company: "SaaS Inc",
      content:
        "The multi-platform integration saved us months of development time. Everything just works.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=SaaS",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Lead",
      company: "FinTech Pro",
      content:
        "Customer insights from the AI have transformed how we understand our audience.",
      avatar: "/placeholder.svg?height=48&width=48",
      rating: 5,
      logo: "/placeholder.svg?height=30&width=80&text=FinTech",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
            <Star className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300">
              Trusted by 50,000+ Marketers
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories from
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how top brands are transforming their marketing with ADmyBRAND
            AI and achieving unprecedented results.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-20">
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Content */}
              <div>
                <GlassCard className="p-8 relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-gray-300 text-sm">5.0</span>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl text-gray-200 leading-relaxed mb-8 font-medium">
                    "{featuredTestimonials[activeTestimonial].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center mb-6">
                    <img
                      src={
                        featuredTestimonials[activeTestimonial].avatar ||
                        "/placeholder.svg"
                      }
                      alt={featuredTestimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {featuredTestimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-400">
                        {featuredTestimonials[activeTestimonial].role} at{" "}
                        {featuredTestimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <img
                    src={
                      featuredTestimonials[activeTestimonial].logo ||
                      "/placeholder.svg"
                    }
                    alt={`${featuredTestimonials[activeTestimonial].company} logo`}
                    className="h-8 opacity-60"
                  />
                </GlassCard>
              </div>

              {/* Right Side - Metrics */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Results Achieved
                </h3>
                {Object.entries(
                  featuredTestimonials[activeTestimonial].metrics
                ).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400 capitalize mb-1">
                            {key === "roi"
                              ? "ROI"
                              : key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-2xl font-bold text-white">
                            {value}
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent" />
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActiveTestimonial(
                    activeTestimonial === 0
                      ? featuredTestimonials.length - 1
                      : activeTestimonial - 1
                  )
                }
                className="bg-white/10 border-white/20 hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
              </Button>

              <div className="flex space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-blue-400 w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActiveTestimonial(
                    activeTestimonial === featuredTestimonials.length - 1
                      ? 0
                      : activeTestimonial + 1
                  )
                }
                className="bg-white/10 border-white/20 hover:bg-white/20"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-white mb-12"
          >
            Join Thousands of Happy Customers
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <GlassCard className="p-6 h-full hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author & Company */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 border border-white/20"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.company} logo`}
                      className="h-6 opacity-60"
                    />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Watch Customer Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <GlassCard className="p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=Video+${video}`}
                      alt={`Video testimonial ${video}`}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-white font-medium text-sm">
                      Customer Success Story
                    </div>
                    <div className="text-gray-400 text-xs">2:30 min</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
