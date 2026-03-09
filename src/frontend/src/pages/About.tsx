import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Heart, Shield, Smile } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title =
      "About Tru Best Bond Cleaning Sydney | Trusted Local Cleaners";
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Tru Best Bond Cleaning Sydney
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            We're a local Sydney cleaning company with one mission: help every
            renter get their full bond back.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <img
              src="/assets/generated/about-team.dim_800x500.jpg"
              alt="Tru Best Bond Cleaning Sydney professional cleaning team \u2014 experienced, insured, police-checked"
              className="rounded-2xl w-full object-cover shadow-card"
            />
          </div>
          <div>
            <h2 className="section-heading mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We started Tru Best Bond Cleaning Sydney because we saw too many
              good people losing hundreds \u2014 sometimes thousands \u2014 of
              dollars from their bond. Not because they were bad tenants, but
              because they didn't know exactly what real estate agents expected
              during a final inspection.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our founders are former property managers who know the checklist
              inside out. We built our cleaning process around that checklist,
              trained our team to meet those exact standards, and backed it all
              with a 100% bond-back guarantee.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since then, we've completed over 2,000 bond cleans across Sydney
              and achieved a 5-star Google rating from our customers. We're
              proud of that. But we're even prouder of the money we've helped
              put back in Sydney renters' pockets.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Fully Insured",
                "Police Checked",
                "Eco-Friendly Products",
                "Real Estate Trained",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-muted text-sm font-semibold px-3 py-1.5 rounded-full border border-border"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-accent" /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            {[
              { n: "2,000+", l: "Bond Cleans Completed" },
              { n: "100%", l: "Bond-Back Guarantee" },
              { n: "5\u2605", l: "Google Rating" },
              { n: "7 Days", l: "A Week Service" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-accent">
                  {s.n}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="section-heading mb-3">Our Core Values</h2>
          <p className="text-muted-foreground">
            Three things we never compromise on
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Heart,
              title: "Honest Pricing",
              desc: "We give you a flat-rate quote upfront. What we quote is what you pay. No surprise fees. No hidden charges. Ever.",
            },
            {
              icon: Shield,
              title: "Quality Results",
              desc: "We follow real estate checklists to the letter. Our 100% bond-back guarantee means we don't consider a job done until your agent is satisfied.",
            },
            {
              icon: Smile,
              title: "Friendly Service",
              desc: "We understand moving is stressful. Our team is always polite, professional, and punctual. We make the experience as easy as possible for you.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="text-center p-6 rounded-2xl bg-muted/50 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                {val.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Get a free quote today. We'll have you booked in no time.
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
