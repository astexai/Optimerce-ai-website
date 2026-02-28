import { TrendingUp, DollarSign, Package, Target, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict demand with 95%+ accuracy using AI models trained on your historical data, seasonality, and market trends.",
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing",
    description: "Automatically optimize prices across channels to maximize margin while staying competitive in real-time.",
  },
  {
    icon: Package,
    title: "Inventory Intelligence",
    description: "Prevent stock-outs and overstock with smart reorder alerts, health scoring, and AI-powered recommendations.",
  },
  {
    icon: Target,
    title: "Marketing Optimization",
    description: "Allocate ad spend across Meta, Google, and TikTok with AI-driven ROI projections and budget suggestions.",
  },
  {
    icon: MessageSquare,
    title: "AI Copilot",
    description: "Ask your data anything. Get instant answers, charts, and actionable insights through natural conversation.",
  },
  {
    icon: Zap,
    title: "Decision Automation",
    description: "Build if-then rules to automate pricing, restocking, and marketing decisions — no code required.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Core Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Outsmart</span> the Competition
          </h2>
          <p className="text-muted-foreground text-lg">
            Six AI-powered modules working together to drive revenue, cut waste, and scale smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
