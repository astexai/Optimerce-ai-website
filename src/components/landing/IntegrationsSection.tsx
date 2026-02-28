import { motion } from "framer-motion";

const platforms = [
  "Shopify", "Amazon", "WooCommerce", "BigCommerce", "Magento",
  "eBay", "Walmart", "Etsy", "Meta Ads", "Google Ads",
  "TikTok Ads", "Klaviyo", "Stripe", "PayPal", "QuickBooks", "Zapier",
];

export function IntegrationsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Integrations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Connects to Your <span className="gradient-text">Entire Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One-click integrations with 50+ e-commerce platforms, ad networks, and business tools.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass rounded-xl p-4 flex items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold text-muted-foreground">{platform}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
