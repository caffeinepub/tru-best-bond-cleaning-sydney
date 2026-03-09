import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { suburbsData } from "../data/suburbs";

export default function Suburbs() {
  useEffect(() => {
    document.title =
      "Bond Cleaning Sydney Suburbs | Areas We Serve | Tru Best Bond Cleaning";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content =
      "Tru Best Bond Cleaning Sydney services all Sydney suburbs. Find your suburb and get a free bond cleaning quote. 100% bond-back guarantee. Call 0488 841 883.";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" /> All Sydney Suburbs
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
            Bond Cleaning Across All Sydney Suburbs
          </h1>
          <p className="text-lg text-white/85 leading-relaxed mb-8">
            We service every corner of Sydney. Find your suburb below and get a
            free quote for your bond clean.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              data-ocid="suburbs.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-7 font-bold shadow-lg"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburbs.secondary_button"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Suburb grid */}
      <section className="container mx-auto px-4 py-14 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
          Select Your Sydney Suburb
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Click your suburb to learn more about our bond cleaning service in
          your area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suburbsData.map((suburb, i) => (
            <Link
              key={suburb.slug}
              to="/suburbs/$slug"
              params={{ slug: suburb.slug }}
              data-ocid={`suburbs.item.${i + 1}`}
              className="group block rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg hover:border-primary transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={suburb.image}
                  alt={suburb.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-lg">
                    {suburb.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {suburb.intro}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  View {suburb.name} Bond Cleaning{" "}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Suburb?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            We service ALL Sydney suburbs. Contact us for a free quote no matter
            where you are in Sydney.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              data-ocid="suburbs.cta.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-bold"
            >
              <Link to="/contact">Book Your Clean Today</Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburbs.cta.secondary_button"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition-all"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
