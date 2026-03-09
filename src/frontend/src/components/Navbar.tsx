import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navServices = [
  { label: "Bond Cleaning", href: "/services/bond-cleaning" },
  { label: "Carpet Steam Cleaning", href: "/services/carpet-cleaning" },
  { label: "Oven Cleaning", href: "/services/oven-cleaning" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  { label: "Wall Washing", href: "/services/wall-washing" },
  { label: "Move In/Out Cleaning", href: "/services/move-in-out" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm border-b border-border"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            data-ocid="nav.link"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru Best Bond Cleaning Sydney logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              data-ocid="nav.link"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                data-ocid="nav.toggle"
                className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                aria-expanded={servicesOpen}
              >
                Services{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-border min-w-52 py-2 z-50">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-muted transition-colors border-b border-border mb-1"
                  >
                    All Services
                  </Link>
                  {navServices.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href as "/services/$slug"}
                      params={{ slug: s.href.split("/").pop() ?? "" }}
                      data-ocid="nav.link"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              data-ocid="nav.link"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/faq"
              data-ocid="nav.link"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              data-ocid="nav.link"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0488841883"
              data-ocid="nav.primary_button"
              className="text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              0488 841 883
            </a>
            <Button
              asChild
              data-ocid="nav.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-5"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              to="/"
              data-ocid="nav.link"
              className="py-2 px-3 rounded-lg font-semibold text-foreground hover:bg-muted hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/services"
              data-ocid="nav.link"
              className="py-2 px-3 rounded-lg font-semibold text-foreground hover:bg-muted hover:text-primary"
            >
              All Services
            </Link>
            {navServices.map((s) => (
              <Link
                key={s.href}
                to="/services/$slug"
                params={{ slug: s.href.split("/").pop() ?? "" }}
                data-ocid="nav.link"
                className="py-2 px-6 rounded-lg text-sm text-foreground hover:bg-muted hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/about"
              data-ocid="nav.link"
              className="py-2 px-3 rounded-lg font-semibold text-foreground hover:bg-muted hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/faq"
              data-ocid="nav.link"
              className="py-2 px-3 rounded-lg font-semibold text-foreground hover:bg-muted hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              data-ocid="nav.link"
              className="py-2 px-3 rounded-lg font-semibold text-foreground hover:bg-muted hover:text-primary"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:0488841883"
                className="py-2 px-3 text-center font-bold text-primary text-lg"
              >
                📞 0488 841 883
              </a>
              <Button
                asChild
                data-ocid="nav.primary_button"
                className="bg-accent text-accent-foreground rounded-full"
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
