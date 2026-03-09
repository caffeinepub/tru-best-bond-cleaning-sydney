import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import { getServiceBySlug, servicesData } from "../../data/services";

export default function ServiceDetail() {
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (!service) {
      navigate({ to: "/services" });
      return;
    }
    document.title = service.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = service.metaDescription;
  }, [service, navigate]);

  if (!service) return null;

  const others = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" data-ocid="nav.link" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/services"
            data-ocid="nav.link"
            className="hover:text-primary"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">
            {service.metaTitle.split(" | ")[0]}
          </span>
        </nav>
      </div>

      <section className="relative overflow-hidden">
        <div className="aspect-[3/1] md:aspect-[4/1] max-h-96 overflow-hidden relative">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                {service.metaTitle.split(" | ")[0]}
              </h1>
              <p className="text-white/85 text-lg mt-3 max-w-xl">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {service.content.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-primary mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-muted rounded-2xl p-6 sticky top-24">
              <h3 className="font-display font-bold text-lg mb-4">
                Get a Free Quote
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Book now or ask us anything. We respond within 1 hour during
                business hours.
              </p>
              <div className="space-y-3">
                <Button
                  asChild
                  data-ocid="service.primary_button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  <Link to="/contact">Book This Service</Link>
                </Button>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="service.primary_button"
                  className="flex items-center justify-center gap-2 w-full rounded-full py-2.5 text-sm font-semibold text-white transition-all"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a
                  href="tel:0488841883"
                  data-ocid="service.secondary_button"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary rounded-full py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Phone className="w-4 h-4" /> 0488 841 883
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-border space-y-2">
                {[
                  "100% Bond-Back Guarantee",
                  "No Hidden Fees",
                  "Same Day Available",
                  "Fully Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-6">
            Other Services You May Need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                data-ocid={`related.item.${i + 1}`}
                className="service-card group block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-sm mb-1">
                    {s.metaTitle.split(" | ")[0]}
                  </h3>
                  <p className="text-xs text-primary flex items-center gap-1 mt-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
