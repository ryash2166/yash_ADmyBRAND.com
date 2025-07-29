"use client"

import { motion } from "framer-motion"
import { FAQItem } from "@/components/ui/faq-item"

export function FAQSection() {
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer:
        "Our AI uses advanced natural language processing to understand your brand voice, target audience, and campaign objectives. It then generates high-quality content that aligns with your marketing goals, from ad copy to social media posts.",
    },
    {
      question: "Can I integrate with my existing marketing tools?",
      answer:
        "Yes! ADmyBRAND AI integrates with over 50 popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Mailchimp, and many more. Our API also allows for custom integrations.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a 14-day free trial with full access to all features. No credit card required to get started. You can explore all the capabilities and see the results for yourself.",
    },
    {
      question: "How accurate is the AI targeting?",
      answer:
        "Our AI targeting system uses machine learning algorithms trained on millions of data points to achieve 95%+ accuracy in audience identification. It continuously learns and improves based on campaign performance.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also have extensive documentation and video tutorials.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your current billing period.",
    },
  ]

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Here are the most common questions about ADmyBRAND AI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
