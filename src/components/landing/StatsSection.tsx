import { motion } from "framer-motion";

const stats = [
  { value: "2.3x", label: "Average ROI improvement" },
  { value: "95%", label: "Forecast accuracy" },
  { value: "$42M+", label: "Revenue optimized monthly" },
  { value: "38%", label: "Reduction in overstock" },
];

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-[0.03]" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
