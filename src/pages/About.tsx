import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Ex-Amazon, 15yr e-commerce", avatar: "AR" },
  { name: "Priya Patel", role: "CTO & Co-Founder", bio: "Ex-Google AI, PhD ML", avatar: "PP" },
  { name: "James Morrison", role: "VP of Product", bio: "Ex-Shopify, product lead", avatar: "JM" },
  { name: "Lisa Zhang", role: "Head of Data Science", bio: "Ex-Meta, forecasting expert", avatar: "LZ" },
  { name: "David Kim", role: "VP Engineering", bio: "Ex-Stripe, platform architect", avatar: "DK" },
  { name: "Sofia Martinez", role: "Head of Customer Success", bio: "Ex-Salesforce, 10yr SaaS", avatar: "SM" },
];

const values = [
  { icon: Target, title: "Customer Obsession", desc: "Every feature we build starts with a real merchant pain point." },
  { icon: Lightbulb, title: "Innovation First", desc: "We push the boundaries of what AI can do for commerce." },
  { icon: Heart, title: "Transparency", desc: "Clear pricing, explainable AI, and honest communication." },
  { icon: Eye, title: "Data-Driven", desc: "We practice what we preach — every decision is backed by data." },
];

const About = () => (
  <MarketingLayout>
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
            Building the Future of <span className="gradient-text">E-Commerce Intelligence</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded in 2023, Optimerce AI was born from a simple observation: e-commerce brands are drowning in data but starving for insights. 
            Our team of AI researchers and commerce veterans built the platform we wished existed.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10">
            <h2 className="font-display font-bold text-2xl mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize AI-powered decision intelligence for every e-commerce brand — from growing DTC startups to global enterprises — so they can compete and win on insight, not just instinct.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-10">
            <h2 className="font-display font-bold text-2xl mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where every commerce decision — pricing, stocking, spending — is optimized by AI that understands your business as well as you do.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8 text-center">
                <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="font-display text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="glass rounded-2xl p-8 text-center">
                <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <h3 className="font-display font-bold text-lg">{t.name}</h3>
                <p className="text-sm text-primary mb-1">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default About;
