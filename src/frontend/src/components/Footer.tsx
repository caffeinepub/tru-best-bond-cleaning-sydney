import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru Best Bond Cleaning Sydney logo"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Sydney's most trusted bond cleaning service. We help thousands of
              renters get their full bond back every year.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold">
              ⭐⭐⭐⭐⭐ Trusted by 2,000+ Sydney renters
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  data-ocid="nav.link"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  data-ocid="nav.link"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  data-ocid="nav.link"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-ocid="nav.link"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  data-ocid="nav.link"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-base mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Bond Cleaning", "bond-cleaning"],
                ["Carpet Steam Cleaning", "carpet-cleaning"],
                ["Oven Cleaning", "oven-cleaning"],
                ["Window Cleaning", "window-cleaning"],
                ["Wall Washing", "wall-washing"],
                ["Move In/Out Cleaning", "move-in-out"],
              ].map(([label, slug]) => (
                <li key={slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug }}
                    data-ocid="nav.link"
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-base mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.link"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" /> WhatsApp:
                  0488 841 883
                </a>
              </li>
              <li>
                <a
                  href="tel:0488841883"
                  data-ocid="nav.link"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" /> Call: 0488 841 883
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> Sydney, NSW,
                Australia
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-primary-foreground/60">
                Mon – Sun: 7:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {year} Tru Best Bond Cleaning Sydney. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
