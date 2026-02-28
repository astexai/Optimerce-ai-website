import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthly: 199,
    annually: 159,
    description: "For growing DTC brands ready to level up.",
    features: ["Up to 5,000 SKUs", "2 connected stores", "Demand forecasting", "Basic pricing recommendations", "Email support", "7-day data history"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    monthly: 599,
    annually: 479,
    description: "For scaling brands that need full AI power.",
    features: ["Up to 50,000 SKUs", "10 connected stores", "All AI modules", "Dynamic pricing engine", "Marketing optimization", "AI Copilot", "Priority support", "90-day data history"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annually: null,
    description: "For large retailers with complex needs.",
    features: ["Unlimited SKUs", "Unlimited stores", "All Growth features", "Decision automation", "Custom integrations", "Dedicated success manager", "SSO & SAML", "Unlimited data history", "Custom SLAs"],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "SKU Limit", starter: "5,000", growth: "50,000", enterprise: "Unlimited" },
  { name: "Connected Stores", starter: "2", growth: "10", enterprise: "Unlimited" },
  { name: "Demand Forecasting", starter: true, growth: true, enterprise: true },
  { name: "Dynamic Pricing", starter: false, growth: true, enterprise: true },
  { name: "Inventory Intelligence", starter: true, growth: true, enterprise: true },
  { name: "Marketing Optimization", starter: false, growth: true, enterprise: true },
  { name: "AI Copilot", starter: false, growth: true, enterprise: true },
  { name: "Decision Automation", starter: false, growth: false, enterprise: true },
  { name: "Scenario Simulator", starter: false, growth: true, enterprise: true },
  { name: "Custom Integrations", starter: false, growth: false, enterprise: true },
  { name: "SSO / SAML", starter: false, growth: false, enterprise: true },
  { name: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated" },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <MarketingLayout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Plans & <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">Start free. Upgrade when you're ready.</p>
            <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
              >
                Annual <span className="text-primary text-xs ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 relative ${plan.popular ? "gradient-bg text-primary-foreground shadow-2xl shadow-primary/20 scale-105" : "glass"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-chart-4 text-xs font-bold text-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.description}</p>
                <div className="mb-6">
                  {plan.monthly ? (
                    <>
                      <span className="text-4xl font-display font-extrabold">${annual ? plan.annually : plan.monthly}</span>
                      <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-display font-extrabold">Custom</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? "bg-background text-foreground hover:bg-background/90" : "gradient-bg border-0"}`} asChild>
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center mb-8">Feature Comparison</h2>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-semibold">Feature</th>
                      <th className="text-center p-4 text-sm font-semibold">Starter</th>
                      <th className="text-center p-4 text-sm font-semibold text-primary">Growth</th>
                      <th className="text-center p-4 text-sm font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((f) => (
                      <tr key={f.name} className="border-b border-border/50">
                        <td className="p-4 text-sm">{f.name}</td>
                        {[f.starter, f.growth, f.enterprise].map((val, j) => (
                          <td key={j} className="text-center p-4 text-sm">
                            {typeof val === "boolean" ? (
                              val ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>
                            ) : (
                              val
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Pricing;
