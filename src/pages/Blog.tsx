import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Product Updates", "Industry Insights", "Case Studies", "Guides"];

const posts = [
  { title: "How AI Is Reshaping E-Commerce Pricing Strategies in 2026", category: "Industry Insights", date: "Feb 25, 2026", readTime: "8 min", excerpt: "Discover why leading brands are shifting from rule-based pricing to AI-driven dynamic models." },
  { title: "Optimerce AI Launches Cross-Domain Optimization Engine", category: "Product Updates", date: "Feb 18, 2026", readTime: "4 min", excerpt: "Our newest module connects pricing, inventory, and marketing for holistic decision-making." },
  { title: "NovaBrands Achieves 22% Margin Lift with Optimerce AI", category: "Case Studies", date: "Feb 10, 2026", readTime: "6 min", excerpt: "Learn how NovaBrands leveraged demand forecasting and dynamic pricing to transform their DTC business." },
  { title: "The Complete Guide to E-Commerce Demand Forecasting", category: "Guides", date: "Feb 3, 2026", readTime: "12 min", excerpt: "Everything you need to know about predicting customer demand, from basics to advanced ML techniques." },
  { title: "5 Signs Your Inventory Strategy Needs AI", category: "Industry Insights", date: "Jan 28, 2026", readTime: "5 min", excerpt: "Stock-outs, overstock, and margin erosion are all symptoms of a reactive inventory approach." },
  { title: "Introducing the AI Copilot: Chat With Your Commerce Data", category: "Product Updates", date: "Jan 20, 2026", readTime: "3 min", excerpt: "Ask questions in plain English and get instant insights, charts, and recommended actions." },
];

const Blog = () => (
  <MarketingLayout>
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Blog & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg text-muted-foreground">Insights, updates, and guides from the Optimerce AI team.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 max-w-4xl mx-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button key={cat} className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted hover:bg-muted/80 transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="h-40 gradient-bg-subtle flex items-center justify-center">
                <div className="text-4xl font-display font-bold text-primary/20">{post.category.charAt(0)}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link to="#" className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </MarketingLayout>
);

export default Blog;
