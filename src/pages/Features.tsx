import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, Package, Target, MessageSquare, Zap,
  BarChart3, Globe, Database, ShieldCheck, Bell, Sliders, LineChart, Bot
} from "lucide-react";

const allFeatures = [
  { icon: Globe, title: "Multi-Platform Integration", desc: "Connect Shopify, Amazon, WooCommerce, and 50+ platforms. Sync inventory, orders, and pricing data in real-time across every channel." },
  { icon: Database, title: "Unified Data Model", desc: "One source of truth. See every product, SKU, and metric across all channels in a single, searchable, filterable table." },
  { icon: TrendingUp, title: "Demand Forecasting", desc: "ML-powered predictions with 95%+ accuracy. Weekly and monthly views, seasonal adjustments, and confidence intervals." },
  { icon: Package, title: "Inventory Intelligence", desc: "Prevent stock-outs and overstock. AI-generated reorder dates, health scoring, and automated alert thresholds." },
  { icon: DollarSign, title: "Dynamic Pricing", desc: "Real-time competitive pricing engine. See current vs. recommended prices, estimated profit impact, and apply changes instantly." },
  { icon: Target, title: "Marketing Optimization", desc: "Optimize spend across Meta, Google, and TikTok. AI recommends budget shifts to maximize ROI across channels." },
  { icon: BarChart3, title: "Cross-Domain Optimization", desc: "See how pricing, inventory, and marketing interact. Trade-off visualizations and impact simulators for holistic decisions." },
  { icon: Bot, title: "AI Recommendations Center", desc: "Prioritized, actionable suggestions with estimated revenue impact. Accept or ignore with one click, track history." },
  { icon: Zap, title: "Decision Automation", desc: "Build if-then rules with a visual editor. Automate pricing, restocking, and campaign adjustments — no engineering needed." },
  { icon: MessageSquare, title: "AI Copilot", desc: "Chat with your data in plain English. Ask questions, get charts, and receive insights instantly." },
  { icon: LineChart, title: "Analytics & Reports", desc: "Comprehensive dashboards with downloadable reports. Channel comparison, profit trends, and performance breakdowns." },
  { icon: Bell, title: "Alerts & Notifications", desc: "Real-time alerts for inventory risks, pricing opportunities, and marketing anomalies. Never miss a critical event." },
  { icon: Sliders, title: "Scenario Simulator", desc: "What-if modeling with interactive sliders. See projected impact before making any pricing, spend, or inventory changes." },
  { icon: ShieldCheck, title: "Revenue Impact Dashboard", desc: "Track AI-driven savings, conversion uplift, and ROI. Built-in calculator to project future returns." },
];

const Features = () => (
  <MarketingLayout>
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Platform Features</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
            14 Powerful Modules, <span className="gradient-text">One Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Every tool an e-commerce team needs to forecast, price, stock, market, and automate — powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {allFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="glass rounded-2xl p-8 flex gap-6 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="h-14 w-14 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="gradient-bg border-0 px-8" asChild>
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default Features;
