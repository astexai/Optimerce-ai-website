import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp, DollarSign, Package, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkle /> Now with GPT-5 powered insights
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              The AI Brain Behind{" "}
              <span className="gradient-text">Smarter E-Commerce</span>{" "}
              Decisions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Unify pricing, inventory, and marketing intelligence across every channel. 
              Optimerce AI turns your data into revenue-driving decisions — automatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-bg border-0 text-base px-8 h-12" asChild>
                <Link to="/signup">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">No credit card required · 14-day free trial · Cancel anytime</p>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                <div className="w-3 h-3 rounded-full bg-chart-3/60" />
                <span className="ml-2 text-xs text-muted-foreground">Optimerce Dashboard</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Revenue", value: "$2.4M", change: "+23%", icon: DollarSign, color: "text-chart-3" },
                  { label: "Profit Margin", value: "34.2%", change: "+5.1%", icon: TrendingUp, color: "text-primary" },
                  { label: "Inventory Health", value: "94%", change: "+8%", icon: Package, color: "text-chart-2" },
                  { label: "Marketing ROI", value: "3.8x", change: "+0.6x", icon: BarChart3, color: "text-chart-4" },
                ].map((kpi) => (
                  <div key={kpi.label} className="rounded-xl bg-background/60 border border-border/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">{kpi.label}</span>
                      <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                    </div>
                    <div className="text-xl font-bold font-display">{kpi.value}</div>
                    <span className="text-xs text-chart-3 font-medium">{kpi.change}</span>
                  </div>
                ))}
              </div>

              {/* Mini chart mockup */}
              <div className="rounded-xl bg-background/60 border border-border/50 p-4">
                <div className="text-xs text-muted-foreground mb-3">Demand Forecast — Next 30 Days</div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 72, 90, 88, 95, 82].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t gradient-bg opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-chart-3" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI Recommendation</div>
                  <div className="text-xs text-muted-foreground">Raise price by 8% on 12 SKUs</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sparkle() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
    </svg>
  );
}
