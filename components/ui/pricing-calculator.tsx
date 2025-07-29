"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { GlassCard } from "@/components/ui/glass-card"

export function PricingCalculator() {
  const [users, setUsers] = useState([10])
  const [campaigns, setCampaigns] = useState([5])

  const calculatePrice = () => {
    const basePrice = 29
    const userPrice = users[0] * 2
    const campaignPrice = campaigns[0] * 10
    return basePrice + userPrice + campaignPrice
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Custom Pricing Calculator</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Team Members: {users[0]}</label>
            <Slider value={users} onValueChange={setUsers} max={100} min={1} step={1} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Active Campaigns: {campaigns[0]}</label>
            <Slider value={campaigns} onValueChange={setCampaigns} max={50} min={1} step={1} className="w-full" />
          </div>

          <div className="pt-4 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-300">Monthly Total:</span>
              <span className="text-2xl font-bold text-white">${calculatePrice()}</span>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
