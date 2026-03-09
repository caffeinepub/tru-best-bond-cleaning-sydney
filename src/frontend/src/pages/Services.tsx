import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { servicesData } from "../data/services";

export default function Services() {
  useEffect(() => {
    document.title = "Bond Cleaning Services Sydney | Tru Best Bond Cleaning";
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Professional bond cleaning services across all Sydney suburbs. Book
            one service or bundle them all for the best price.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <article
              key={service.slug}
              data-ocid={`services.item.${i + 1}`}
              className="service-card flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-display font-bold text-xl mb-3">
                  {service.metaTitle.split(" | ")[0]}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1 mb-5">
                  {service.content.slice(0, 3).map((section) => (
                    <li
                      key={section.heading}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{section.heading}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  data-ocid={`services.item.${i + 1}`}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-auto"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Contact us and we'll recommend the right package for your property
            size and budget.
          </p>
          <Button
            asChild
            size="lg"
            data-ocid="cta.primary_button"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
