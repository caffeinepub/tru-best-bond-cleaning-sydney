# Tru Best Bond Cleaning Sydney

## Current State
- React + TanStack Router app with Home, Services, ServiceDetail, About, Contact pages
- SEO meta tags on home page via useEffect
- Services data in src/data/services.ts
- No suburb-specific pages exist

## Requested Changes (Diff)

### Add
- suburbs data file: src/data/suburbs.ts with 10 Sydney suburbs, each with slug, name, metaTitle, metaDescription, content (~400 words), image path, imageAlt, keyFacts
- SuburbDetail page component: src/pages/suburbs/SuburbDetail.tsx — renders suburb content, meta tags, hero image, key facts, CTA
- Suburb index page: src/pages/Suburbs.tsx — lists all suburbs with links
- Routes: /suburbs and /suburbs/$slug in App.tsx
- Home page suburb section: grid of suburb links below services section for SEO internal linking
- 3 generated suburb hero images shared across suburb pages

### Modify
- App.tsx: add suburbsRoute and suburbDetailRoute
- Home.tsx: add "Areas We Serve" section with links to all 10 suburb pages

### Remove
- Nothing

## Implementation Plan
1. Create suburbs data file with 10 suburbs: Bondi, Parramatta, Chatswood, Newtown, Manly, Liverpool, Penrith, Bankstown, Surry Hills, North Sydney
2. Generate 3 suburb hero images
3. Create SuburbDetail page with useEffect for meta tags, title, description
4. Create Suburbs index page
5. Update App.tsx with new routes
6. Update Home.tsx with Areas We Serve section linking to all suburb pages
