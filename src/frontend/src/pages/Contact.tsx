import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertySize: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Tru Best Bond Cleaning Sydney | Free Quote";
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const recipient = atob(
        "aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==",
      );
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry \u2014 ${form.name}`,
      );
      const body = encodeURIComponent(
        `New Enquiry from Tru Best Bond Cleaning Sydney Website\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service || "Not specified"}\nProperty Size: ${form.propertySize || "Not specified"}\nMessage: ${form.message || "No message provided"}\n\nSent from: ${window.location.hostname}`,
      );
      if (actor) {
        const fullMessage = `Service: ${form.service || "N/A"} | Property: ${form.propertySize || "N/A"} | ${form.message}`;
        await actor.submitInquiry(
          form.name,
          form.email,
          form.phone,
          fullMessage,
        );
      }
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      toast.success(
        "Your enquiry is ready to send! Your email client should open now.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        propertySize: "",
        message: "",
      });
    } catch (_err) {
      toast.error(
        "Something went wrong. Please WhatsApp us directly at 0488 841 883.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-[oklch(0.22_0.07_250)] text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact Tru Best Bond Cleaning Sydney
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Get a free quote in minutes. Fill in your details below or message
            us on WhatsApp.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">
              Get Your Free Quote
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.modal"
            >
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  data-ocid="contact.input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  data-ocid="contact.input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  data-ocid="contact.input"
                  placeholder="04xx xxx xxx"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="service">Service Type</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => handleChange("service", v)}
                >
                  <SelectTrigger
                    id="service"
                    data-ocid="contact.select"
                    className="mt-1"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bond-clean">
                      Bond Clean (End of Lease)
                    </SelectItem>
                    <SelectItem value="carpet-clean">
                      Carpet Steam Cleaning
                    </SelectItem>
                    <SelectItem value="oven-clean">Oven Cleaning</SelectItem>
                    <SelectItem value="window-clean">
                      Window Cleaning
                    </SelectItem>
                    <SelectItem value="wall-wash">Wall Washing</SelectItem>
                    <SelectItem value="move-in-out">
                      Move In / Move Out Cleaning
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="property-size">Property Size</Label>
                <Select
                  value={form.propertySize}
                  onValueChange={(v) => handleChange("propertySize", v)}
                >
                  <SelectTrigger
                    id="property-size"
                    data-ocid="contact.select"
                    className="mt-1"
                  >
                    <SelectValue placeholder="Select property size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio-1br">
                      Studio / 1 Bedroom
                    </SelectItem>
                    <SelectItem value="2br">2 Bedrooms</SelectItem>
                    <SelectItem value="3br">3 Bedrooms</SelectItem>
                    <SelectItem value="4br-plus">4 Bedrooms+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  data-ocid="contact.textarea"
                  placeholder="Tell us about your property, move-out date, or any special requests..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                data-ocid="contact.submit_button"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold"
              >
                {submitting ? "Sending..." : "Send My Enquiry"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 1 hour during business hours (7am–8pm, 7
                days)
              </p>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-6">
              Other Ways to Reach Us
            </h2>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="flex items-center gap-4 p-5 rounded-2xl mb-4 text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-10 h-10 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">
                  0488 841 883 — Fastest response
                </div>
              </div>
            </a>
            <a
              href="tel:0488841883"
              data-ocid="contact.secondary_button"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:bg-muted transition-all mb-6"
            >
              <Phone className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-bold">Call Us</div>
                <div className="text-muted-foreground text-sm">
                  0488 841 883
                </div>
              </div>
            </a>
            <div className="bg-muted rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-lg">
                Business Information
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Service Area</div>
                  <div className="text-muted-foreground text-sm">
                    All Sydney suburbs, NSW, Australia
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Business Hours</div>
                  <div className="text-muted-foreground text-sm">
                    Monday – Sunday: 7:00 AM – 8:00 PM
                    <br />
                    Public Holidays: Available (surcharge may apply)
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-border">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "100% Bond-Back Guarantee",
                    "Same Day Available",
                    "Flat-Rate Pricing",
                    "Free Re-Clean",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
