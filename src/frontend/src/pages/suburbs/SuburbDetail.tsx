import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useEffect } from "react";
import { getSuburbBySlug, suburbsData } from "../../data/suburbs";

export default function SuburbDetail() {
  const { slug } = useParams({ from: "/suburbs/$slug" });
  const suburb = getSuburbBySlug(slug);

  useEffect(() => {
    if (suburb) {
      document.title = suburb.metaTitle;
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        (metaDesc as HTMLMetaElement).name = "description";
        document.head.appendChild(metaDesc);
      }
      (metaDesc as HTMLMetaElement).content = suburb.metaDescription;

      // OG tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        (ogTitle as HTMLMetaElement).setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      (ogTitle as HTMLMetaElement).content = suburb.metaTitle;

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        (ogDesc as HTMLMetaElement).setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      (ogDesc as HTMLMetaElement).content = suburb.metaDescription;
    }
  }, [suburb]);

  if (!suburb) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Suburb not found</h1>
        <Button asChild>
          <Link to="/suburbs">View All Areas We Serve</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('${suburb.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-14 md:py-20">
          <Link
            to="/suburbs"
            data-ocid="suburb.link"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Areas We Serve
          </Link>
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" /> Bond Cleaning in {suburb.name},
            Sydney
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
            Bond Cleaning {suburb.name} Sydney
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
            {suburb.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              data-ocid="suburb.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-7 font-bold shadow-lg"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <a
              href="tel:0488841883"
              data-ocid="suburb.secondary_button"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-6 py-3 font-bold transition-all"
            >
              <Phone className="w-5 h-5" /> 0488 841 883
            </a>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.primary_button"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main image + key facts */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <img
              src={suburb.image}
              alt={suburb.imageAlt}
              className="rounded-2xl w-full object-cover shadow-lg"
              width={800}
              height={500}
              loading="lazy"
            />
            {/* Key facts */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {suburb.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-muted rounded-xl p-3 border border-border"
                >
                  <div className="text-xs text-muted-foreground mb-1">
                    {fact.label}
                  </div>
                  <div className="font-display font-bold text-sm text-foreground">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {suburb.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 30)}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us checklist */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose Tru Best Bond Cleaning in {suburb.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "100% Bond-Back Guarantee",
              "Free re-clean within 72 hours if needed",
              "Fully insured and police-checked staff",
              "Eco-friendly, professional-grade products",
              "Flat-rate pricing with no hidden fees",
              "We follow real estate agent checklists exactly",
              "Carpet steam cleaning available",
              "Same-day bookings available",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other suburbs links */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="font-display text-xl font-bold mb-6 text-center">
          Bond Cleaning in Other Sydney Suburbs
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {suburbsData
            .filter((s) => s.slug !== slug)
            .map((s) => (
              <Link
                key={s.slug}
                to="/suburbs/$slug"
                params={{ slug: s.slug }}
                data-ocid="suburb.link"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary text-sm font-medium transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                {s.name}
              </Link>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your {suburb.name} Bond Back?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Book your {suburb.name} bond clean today. We'll handle everything so
            you can focus on your move.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              data-ocid="suburb.cta.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-bold"
            >
              <Link to="/contact">Book Your Clean Today</Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.cta.secondary_button"
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
