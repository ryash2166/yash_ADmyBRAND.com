"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Rocket, Building, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { useState } from "react"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      icon: Rocket,
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      yearlyPrice: 24,
      originalPrice: 39,
      features: [
        "Up to 5 campaigns",
        "Basic AI content generation",
        "10,000 monthly impressions",
        "Email support",
        "Basic analytics dashboard",
        "2 team members",
        "Standard templates",
        "Mobile app access",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 79,
      originalPrice: 129,
      features: [
        "Unlimited campaigns",
        "Advanced AI features",
        "100,000 monthly impressions",
        "Priority support (24/7)",
        "Advanced analytics & insights",
        "10 team members",
        "A/B testing suite",
        "Custom integrations",
        "White-label reports",
        "API access",
        "Custom templates",
        "Advanced automation",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      name: "Enterprise",
      icon: Building,
      description: "For large organizations",
      monthlyPrice: 299,
      yearlyPrice: 249,
      originalPrice: 399,
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "Unlimited impressions",
        "Dedicated account manager",
        "White-label solution",
        "Unlimited team members",
        "Advanced security (SSO)",
        "Custom reporting",
        "Priority feature requests",
        "Custom integrations",
        "SLA guarantee",
        "Onboarding support",
      ],
      popular: false,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
    },
  ]

  const addOns = [
    { name: "Extra Team Members", price: 15, unit: "per user/month" },
    { name: "Additional Impressions", price: 25, unit: "per 50K/month" },
    { name: "Premium Support", price: 99, unit: "per month" },
    { name: "Custom Integration", price: 199, unit: "one-time" },
  ]

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-300">14-Day Free Trial • No Credit Card Required</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Choose Your </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free, scale fast. Choose the perfect plan for your business needs and upgrade anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <GlassCard className="p-1 inline-flex gap-2">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Yearly
              <span className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </GlassCard>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )} */}

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`h-full ${plan.popular ? "lg:scale-105" : ""}`}
              >
                <GlassCard
                  className={`p-8 h-full relative overflow-hidden ${
                    plan.popular ? "ring-2 ring-purple-500/50 bg-white/15" : "hover:bg-white/10"
                  } transition-all duration-500`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Plan Header */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      {plan.popular && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                          <Star className="w-4 h-4 mr-2" />
                          Most Popular
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>

                    {/* Pricing */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">
                          ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-400 ml-2">/month</span>
                        {billingCycle === "yearly" && (
                          <span className="text-sm text-gray-500 line-through ml-2">${plan.monthlyPrice}</span>
                        )}
                      </div>
                      {billingCycle === "yearly" && (
                        <div className="text-sm text-green-400 mt-1">
                          Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full group ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
                          : "bg-white/10 hover:bg-white/20 border border-white/20"
                      }`}
                      size="lg"
                    >
                      {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {/* Additional Info */}
                    <div className="text-center mt-4">
                      <span className="text-sm text-gray-400">No setup fees • Cancel anytime</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Optional Add-ons</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <GlassCard className="p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <h4 className="text-white font-semibold mb-2">{addon.name}</h4>
                  <div className="text-2xl font-bold text-purple-400 mb-1">${addon.price}</div>
                  <div className="text-sm text-gray-400">{addon.unit}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Custom Pricing Calculator</h3>
          <PricingCalculator />
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <GlassCard className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              Get in touch with our sales team for custom pricing, dedicated support, and enterprise features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </GlassCard> */}
        </motion.div>
      </div>
    </section>
  )
}
