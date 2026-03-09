# Tru Best Bond Cleaning Sydney

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Best Bond Cleaning Sydney (bond cleaning company)
- Pages: Home, Services (with sub-pages), About, Contact, FAQ
- 3000+ words of SEO-optimised content in Australian English, active voice, simple language
- Each service page: ~400 words
- Services: Bond/End-of-Lease Cleaning, Carpet Steam Cleaning, Oven Cleaning, Window Cleaning, Wall Washing, Move-in/Move-out Cleaning
- FAQ section on home page (12 questions including competitor list at Q5)
- Contact form that opens user's email client (mailto) to send to humptydumptybondcleaning@gmail.com (email NOT shown on site)
- WhatsApp button: 0488841883
- Branded images on every page with alt text
- Full SEO: title tags, meta descriptions, Open Graph, structured data (LocalBusiness schema)
- Google site verification meta tag: LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU
- Competitor list in FAQ Q5: 5 companies with ~100-word descriptions and websites; Tru Bond Cleaning at #5 (https://trubondcleaningbrisbane.com)
- Product recommendations for carpet cleaning with links
- Satisfaction guarantee mention
- Backend: simple contact inquiry storage in Motoko

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Generate logo, hero image, service images with branding
2. Motoko backend: store contact form submissions
3. React frontend:
   - App.tsx with React Router (Home, Services, About, Contact pages)
   - index.html with all SEO meta tags + Google verification
   - Home: hero, services overview, why us, FAQ (12 Qs), CTA
   - Services: individual pages with 400-word descriptions
   - Contact: mailto form, WhatsApp CTA
   - Global nav, footer with WhatsApp
   - Branded images with alt attributes
   - LocalBusiness JSON-LD schema
