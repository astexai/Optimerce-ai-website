export function TrustedBySection() {
  const brands = [
    "Nike", "Shopify", "Unilever", "Samsung", "L'Oréal", 
    "Adidas", "Under Armour", "Sephora"
  ];

  return (
    <section className="border-y border-border/50 bg-muted/30 py-10">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          TRUSTED BY 2,000+ E-COMMERCE BRANDS WORLDWIDE
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-lg font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
