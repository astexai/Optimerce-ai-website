import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Optimerce AI increased our profit margin by 22% in the first quarter. The demand forecasting alone pays for itself 10x over.",
    name: "Sarah Chen",
    title: "VP of E-Commerce, NovaBrands",
    avatar: "SC",
  },
  {
    quote: "We cut marketing waste by 40% while scaling revenue. The cross-channel optimization is unlike anything else on the market.",
    name: "Marcus Rodriguez",
    title: "CMO, Velocity Commerce",
    avatar: "MR",
  },
  {
    quote: "The AI Copilot is a game-changer. Our team gets instant answers instead of waiting days for analyst reports.",
    name: "Emma Thompson",
    title: "Head of Operations, LuxeRetail",
    avatar: "ET",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
