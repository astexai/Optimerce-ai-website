import { motion } from "framer-motion";
import { Link2, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Connect Your Stores",
    description: "Plug in Shopify, Amazon, WooCommerce, and more in minutes. Your data syncs automatically.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analyzes Everything",
    description: "Our models crunch pricing, inventory, demand, and marketing data across all channels simultaneously.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Act on Smart Decisions",
    description: "Get actionable recommendations, automate decisions, and watch your revenue and margins grow.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Up and Running in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to transform your e-commerce operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="h-16 w-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 relative z-10">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest">{step.step}</span>
              <h3 className="font-display font-bold text-xl mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
