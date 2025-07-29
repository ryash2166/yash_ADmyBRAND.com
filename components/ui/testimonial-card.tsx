"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { GlassCard } from "./glass-card"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export function TestimonialCard({ name, role, company, content, avatar, rating }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className="flex-shrink-0 w-80">
      <GlassCard className="p-6 h-full">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
          ))}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">"{content}"</p>
        <div className="flex items-center">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-gray-400 text-sm">
              {role} at {company}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
