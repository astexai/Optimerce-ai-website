import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to set up Optimerce AI?",
    a: "Most brands are up and running within 15 minutes. Simply connect your stores, and our AI begins analyzing your data immediately. Full insights are typically available within 24-48 hours.",
  },
  {
    q: "What platforms do you integrate with?",
    a: "We support 50+ integrations including Shopify, Amazon, WooCommerce, BigCommerce, Magento, eBay, Walmart, Meta Ads, Google Ads, TikTok Ads, Klaviyo, and many more.",
  },
  {
    q: "How accurate is the demand forecasting?",
    a: "Our AI models achieve 95%+ accuracy on average, continuously improving as they learn from your specific data patterns, seasonality, and market conditions.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use enterprise-grade encryption (AES-256), SOC 2 Type II compliance, and GDPR-compliant data handling. Your data is never shared with third parties.",
  },
  {
    q: "Can I use Optimerce AI for multiple brands?",
    a: "Yes! Our Growth and Enterprise plans support multiple stores and brands under a single dashboard with unified analytics across all your properties.",
  },
  {
    q: "What kind of ROI can I expect?",
    a: "On average, our customers see a 2.3x ROI improvement within the first 90 days, driven by optimized pricing, reduced overstock, and smarter marketing allocation.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-border/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
