import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Leaf,
  MessageCircle,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { servicesData } from "../data/services";

interface HomeProps {
  scrollToFaq?: boolean;
}

const trustBadges = [
  {
    icon: Shield,
    label: "100% Bond Back Guarantee",
    desc: "We re-clean for free if your agent isn't satisfied",
  },
  {
    icon: Clock,
    label: "Same Day Bookings",
    desc: "Last-minute? We've got you covered",
  },
  {
    icon: CheckCircle,
    label: "Fully Insured & Police Checked",
    desc: "Your home is in safe hands",
  },
  {
    icon: Leaf,
    label: "Eco-Friendly Products",
    desc: "Safe for kids, pets, and the planet",
  },
  {
    icon: Award,
    label: "5-Star Google Rated",
    desc: "247+ verified 5-star reviews",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Bondi, Sydney",
    rating: 5,
    text: "Got my full $2,800 bond back! The team was amazing \u2014 they cleaned things I didn't even think to clean. My property manager actually commented on how spotless the oven was. 100% recommend.",
  },
  {
    name: "James T.",
    suburb: "Parramatta, Sydney",
    rating: 5,
    text: "Booked them the day before my inspection. They showed up on time, worked incredibly hard for 4 hours, and left the apartment looking brand new. Worth every single dollar.",
  },
  {
    name: "Priya K.",
    suburb: "Chatswood, Sydney",
    rating: 5,
    text: "I've used them twice now and both times my landlord was blown away by the clean. The carpet steam cleaning removed a stain I thought was permanent. Absolutely legends!",
  },
];

const STARS = [1, 2, 3, 4, 5];

const faqItems = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough, top-to-bottom clean of your rental property when you move out. Your landlord or property manager requires it to make sure the place is as clean as it was when you moved in. If you skip it, your landlord can take money out of your bond (security deposit) to pay for professional cleaning. In New South Wales, tenants are legally required to leave the property reasonably clean. A professional bond clean covers every room \u2014 kitchen, bathrooms, bedrooms, living areas, windows, carpets, and more. Getting it done properly means you walk away with your full bond refunded. That can be $1,000 to $4,000 back in your pocket!",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is super important because it directly affects how much money you get back from your landlord. When you first rented your home, you paid a bond (usually 4 weeks\u2019 rent). Your landlord holds that money, and they only give it back if the property is returned in good condition. A proper bond clean protects you legally, saves you money, avoids disputes with your landlord, and helps you get a good rental reference for your next home. In Sydney, where rents are high, your bond could be worth thousands of dollars \u2014 so a professional clean is absolutely worth it.",
  },
  {
    q: "How much does a bond clean cost?",
    a: "Bond cleaning in Sydney typically costs between $250 and $700+ depending on the size of your property. A studio or 1-bedroom unit starts at around $250\u2013$320. A 2-bedroom apartment costs roughly $320\u2013$420. A 3-bedroom house ranges from $450\u2013$600. A 4-bedroom home can cost $600\u2013$800+. Prices also depend on extras like carpet steam cleaning, oven cleaning, and wall washing. At Tru Best Bond Cleaning Sydney, we offer competitive flat-rate pricing with no hidden fees. Get a free quote today by contacting us on WhatsApp 0488 841 883.",
  },
  {
    q: "What is a full bond clean?",
    a: "A full bond clean is a complete, thorough clean of every single part of your rental property. It covers the entire kitchen (including oven, stovetop, rangehood, cupboards inside and out, benchtops, sink), all bathrooms and toilets (scrubbed tiles, grout, shower screens, vanities), all bedrooms (vacuumed, dusted, windows wiped), living areas, laundry, garage, and outdoor areas. It also includes carpet vacuuming, window cleaning (inside), wall spot-cleaning, skirting boards, light fittings, and light switches. A full bond clean is designed to meet your real estate agent\u2019s exit report checklist.",
  },
  {
    q: "Which are the top-rated bond cleaning companies near me in Sydney?",
    a: "Here are five highly rated bond cleaning companies in Sydney:\n\n1. End of Lease Cleaning Sydney (endofleasecleaningsydney.com.au) \u2014 A well-established Sydney cleaning company offering comprehensive end of lease packages. Known for trained staff and attention to detail, they service most Sydney suburbs with competitive pricing and a satisfaction guarantee.\n\n2. Whistle Clean Australia (whistleclean.com.au) \u2014 Highly rated in New South Wales, specialising in bond cleaning, carpet steam cleaning, and commercial cleaning. They offer a 72-hour re-clean guarantee.\n\n3. Clean Australia Service (cleanaustraliaservice.com.au) \u2014 Operates across Sydney with eco-friendly products and background-checked staff. Flexible scheduling and transparent pricing.\n\n4. Bond Cleaning in Sydney (bondcleaninginsydney.com.au) \u2014 Dedicated bond cleaning specialist servicing all major Sydney suburbs, trained to follow real estate agency checklists.\n\n5. Tru Best Bond Cleaning Sydney (trubondcleaningbrisbane.com) \u2014 Trusted local bond cleaning company proudly serving Sydney renters. 100% bond-back guarantee, eco-friendly professional-grade products, fully insured and police-checked team. Competitive flat-rate pricing for all property sizes, same-day bookings available. Contact us on WhatsApp 0488 841 883 for a free quote.",
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "Professional bond cleaners use specific products that cut through grease, mould, and grime without damaging surfaces. The best products include: Selleys Sugar Soap for wall washing and general surface cleaning; Exit Mould spray for bathroom tiles and grout; Jif Cream Cleanser for sinks and bathtubs; Oven Pride or Selleys Oven Cleaner for ovens and stovetops; Mr Muscle Glass Cleaner for windows and mirrors; White King Bleach for toilets and drains; and Orange Power Degreaser for kitchen surfaces and rangehoods. Using the right product for each surface gets better results and avoids damage.",
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: "Professional bond cleaning costs in Australia vary by property size and location. In Sydney, expect to pay $250\u2013$320 for a 1-bedroom unit, $320\u2013$420 for a 2-bedroom, $450\u2013$600 for a 3-bedroom, and $600\u2013$850 for 4+ bedrooms. Carpet steam cleaning adds $50\u2013$150 depending on the number of rooms. Oven cleaning adds $50\u2013$80. Window cleaning adds $50\u2013$100. Always ask for a written quote and check what\u2019s included. Avoid very cheap quotes \u2014 they often miss important areas and your bond may still be withheld. Tru Best Bond Cleaning Sydney offers honest flat-rate pricing with no surprises.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "The best carpet cleaning products and equipment for bond cleaning include professional hot-water extraction machines (steam cleaners) \u2014 the gold standard recommended by carpet manufacturers. For DIY pre-treatment, use Vanish Carpet Foam or Bissell OxyKic Carpet Spray (available at Woolworths and Bunnings). For stubborn stains, try White King Carpet Stain Remover. For deodorising, Febreze Heavy Duty Fabric Refresher works well. However, for a bond return, we strongly recommend hiring a professional steam cleaning service. Useful resources: vanish.com.au, bissell.com.au, and Bunnings carpet cleaner section.",
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: "Choosing the right bond cleaner saves you money and stress. Look for these key things: (1) Bond-back guarantee \u2014 they re-clean for free if your agent isn\u2019t happy; (2) Insurance \u2014 public liability insurance protects you if anything gets damaged; (3) Police-checked staff \u2014 for your security and peace of mind; (4) Clear written quote \u2014 know exactly what\u2019s included before they start; (5) Good Google reviews \u2014 check for recent, genuine reviews from real customers; (6) Experience with real estate checklists \u2014 they must know what agents look for; (7) No hidden fees \u2014 flat-rate pricing is best. Tru Best Bond Cleaning Sydney ticks all these boxes.",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! You can book Tru Best Bond Cleaning Sydney online or via WhatsApp right now. We back every clean with our 100% Bond-Back Satisfaction Guarantee \u2014 if your property manager or landlord identifies any issues with our cleaning, we\u2019ll come back and re-clean those areas for free within 72 hours. Just fill in our contact form or send us a message on WhatsApp 0488 841 883. Online booking is fast, easy, and takes less than 2 minutes. We confirm your booking within 1 hour during business hours.",
  },
  {
    q: "How much is a cleaner per hour in Sydney?",
    a: "In Sydney, a general house cleaner typically charges between $35 and $55 per hour. Bond and end-of-lease cleaners charge slightly more \u2014 usually $45 to $65 per hour \u2014 because the work is more detailed and thorough. Some companies charge a flat rate for the whole job rather than by the hour, which is often better value as you always know the full cost upfront. At Tru Best Bond Cleaning Sydney, we use flat-rate pricing so you always know the full cost with zero surprises. No hidden fees, no hourly blow-outs.",
  },
  {
    q: "How much is an end of lease clean in Australia? How much do you pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?",
    a: "End of lease clean cost in Australia: Nationally, prices range from $200 (small studio) to $800+ (large 4-bedroom house). Sydney and Melbourne tend to be slightly higher due to living costs. Always get at least 2\u20133 quotes. Paying a cleaner for 3 hours: At Sydney rates of $35\u2013$55/hour, expect to pay $105\u2013$165 for a 3-hour standard clean. For a bond cleaner at $45\u2013$65/hour, that\u2019s $135\u2013$195 for 3 hours. The 20-minute rule: This is a popular household cleaning tip where you clean one room for 20 minutes before moving to the next. It makes big cleaning jobs feel more manageable by breaking them into short, focused bursts. Professional bond cleaners don\u2019t use this rule \u2014 they work systematically through a full real estate checklist to ensure nothing is missed.",
  },
];

export default function Home({ scrollToFaq }: HomeProps) {
  useEffect(() => {
    document.title =
      "Tru Best Bond Cleaning Sydney | #1 Bond Cleaning Service in Sydney";
    if (scrollToFaq) {
      setTimeout(() => {
        const el = document.getElementById("faq");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [scrollToFaq]);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bond-cleaning-sydney.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />{" "}
              Sydney's #1 Rated Bond Cleaning Service
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sydney's Best Bond Cleaning Service \u2014{" "}
              <span className="text-accent">100% Bond Back Guaranteed</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8">
              We make your rental property spotless so you get your full bond
              back. Fast, affordable, and trusted by thousands of Sydney
              renters. We've helped recover over $5 million in bonds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-7 text-base font-bold shadow-lg"
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <a
                href="tel:0488841883"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-6 py-3 text-base font-bold transition-all"
              >
                <Phone className="w-5 h-5" /> Call: 0488 841 883
              </a>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "2,000+ Cleans Done",
                "100% Bond Back Rate",
                "Same Day Available",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <CheckCircle className="w-4 h-4 text-accent" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hidden">
        <img
          src="/assets/generated/hero-bond-cleaning-sydney.dim_1200x600.jpg"
          alt="Professional bond cleaning team in Sydney apartment \u2014 Tru Best Bond Cleaning Sydney"
          width={1200}
          height={600}
        />
      </div>

      <section className="bg-muted py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="trust-badge">
                <badge.icon className="w-8 h-8 text-primary" />
                <span className="font-display font-bold text-sm text-foreground text-center">
                  {badge.label}
                </span>
                <span className="text-xs text-muted-foreground text-center">
                  {badge.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 max-w-4xl">
        <h2 className="section-heading mb-4">
          Sydney's Most Trusted Bond Cleaning Company
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Moving out of a rental property in Sydney? You need a professional
          bond clean that gets every corner right. At{" "}
          <strong>Tru Best Bond Cleaning Sydney</strong>, we've helped over
          2,000 Sydney renters get their full bond back \u2014 and we're ready
          to help you too.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Bond cleaning (also called end of lease cleaning or vacate cleaning)
          is one of the most important things you do when you move out. Your
          landlord holds your bond \u2014 usually 4 weeks of rent \u2014 and
          they only return it if the property is cleaned to a professional
          standard. Our expert cleaners follow the exact same checklists that
          real estate agents use, so you pass your final inspection first time,
          every time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We cover all Sydney suburbs including Bondi, Newtown, Parramatta,
          Chatswood, Manly, Liverpool, Penrith, Bankstown, and everywhere in
          between. Our team works seven days a week, including public holidays,
          to fit your move-out schedule.
        </p>
      </section>

      <section className="bg-muted/50 py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Our Bond Cleaning Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to get your full bond back. Book individual
              services or bundle them for the best price.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
              <div
                key={service.slug}
                data-ocid={`services.item.${i + 1}`}
                className="service-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg mb-2">
                    {service.metaTitle.split(" | ")[0]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    data-ocid={`services.item.${i + 1}`}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                  >
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="flex items-center gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">How It Works</h2>
          <p className="text-muted-foreground">
            Getting your bond back is this simple
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            {
              step: "1",
              title: "Book Online",
              desc: "Fill in our quick form or WhatsApp us. We send you a flat-rate quote within 1 hour.",
            },
            {
              step: "2",
              title: "We Clean",
              desc: "Our expert team arrives on time and cleans every corner to real estate agent standards.",
            },
            {
              step: "3",
              title: "Get Bond Back",
              desc: "Pass your inspection and get your full bond returned. If not, we re-clean for free.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4 shadow-card">
                {item.step}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              What Sydney Renters Say
            </h2>
            <p className="text-primary-foreground/80">
              Real reviews from real customers across Sydney
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                <div className="flex gap-0.5 mb-3">
                  {STARS.filter((s) => s <= t.rating).map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-primary-foreground/60 text-xs">
                    {t.suburb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-14 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">Bond Cleaning FAQs</h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers. Everything you need to know about
            bond cleaning in Sydney.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              data-ocid={`faq.item.${i + 1}`}
              className="border border-border rounded-xl overflow-hidden px-2"
            >
              <AccordionTrigger
                data-ocid={`faq.item.${i + 1}`}
                className="font-display font-semibold text-left text-sm md:text-base py-4 hover:no-underline hover:text-primary"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 whitespace-pre-line">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="bg-muted/50 py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru Best Bond Cleaning Sydney professional team ready to clean your rental property"
                className="rounded-2xl w-full object-cover shadow-card"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="section-heading mb-4">
                About Tru Best Bond Cleaning Sydney
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started Tru Best Bond Cleaning Sydney because we saw too many
                renters lose hundreds of dollars from their bond just because
                they didn't know what was expected. We wanted to fix that.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of professional cleaners knows exactly what real estate
                agents look for. We follow their checklists to the letter and
                back every clean with our 100% bond-back guarantee.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { n: "2,000+", l: "Cleans Done" },
                  { n: "100%", l: "Bond Back Rate" },
                  { n: "5\u2605", l: "Google Rating" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="text-center p-3 bg-white rounded-xl border border-border"
                  >
                    <div className="font-display font-bold text-xl text-primary">
                      {s.n}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                data-ocid="about.primary_button"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Book your clean today and join 2,000+ Sydney renters who got their
            full bond back with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              data-ocid="cta.primary_button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-bold"
            >
              <Link to="/contact">Book Your Clean Today</Link>
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.primary_button"
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
