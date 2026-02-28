import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mo",
    description: "For growing DTC brands ready to level up.",
    features: [
      "Up to 5,000 SKUs",
      "2 connected stores",
      "Demand forecasting",
      "Basic pricing recommendations",
      "Email support",
      "7-day data history",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$599",
    period: "/mo",
    description: "For scaling brands that need full AI power.",
    features: [
      "Up to 50,000 SKUs",
      "10 connected stores",
      "All AI modules",
      "Dynamic pricing engine",
      "Marketing optimization",
      "AI Copilot",
      "Priority support",
      "90-day data history",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large retailers with complex needs.",
    features: [
      "Unlimited SKUs",
      "Unlimited stores",
      "All Growth features",
      "Decision automation",
      "Custom integrations",
      "Dedicated success manager",
      "SSO & SAML",
      "Unlimited data history",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Start free. Scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "gradient-bg text-primary-foreground shadow-2xl shadow-primary/20 scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-chart-4 text-xs font-bold text-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "bg-background text-foreground hover:bg-background/90" : "gradient-bg border-0"}`}
                asChild
              >
                <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
