export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  shortDesc: string;
  content: ServiceSection[];
}

export interface ServiceSection {
  heading: string;
  body: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "bond-cleaning",
    title: "Bond Cleaning Sydney | End of Lease Cleaning Service",
    metaTitle: "Bond Cleaning Sydney | End of Lease Cleaning Service",
    metaDescription:
      "Professional bond cleaning in Sydney with 100% bond-back guarantee. We clean every corner so you get your full deposit back. Book now!",
    image: "/assets/generated/service-bond-cleaning.dim_800x500.jpg",
    imageAlt:
      "End of lease bond cleaning Sydney — spotless kitchen cleaned by Tru Best Bond Cleaning",
    shortDesc:
      "We do a full top-to-bottom clean of your rental property so you get your entire bond back. No stress, no shortcuts.",
    content: [
      {
        heading: "What Is Bond Cleaning?",
        body: "Bond cleaning — also called end of lease cleaning or vacate cleaning — is a thorough clean of your entire rental property when you move out. It covers every room, every surface, and every corner. Your property manager uses an exit report checklist to inspect the property. If it doesn't meet their standard, they take money from your bond to pay for professional cleaning. That's why getting a proper bond clean done right the first time is so important. At Tru Best Bond Cleaning Sydney, we follow the exact same checklists that real estate agents use, so nothing gets missed.",
      },
      {
        heading: "What's Included in Our Bond Clean?",
        body: "Our full bond clean covers: Kitchen — oven (inside and out), rangehood filter and exterior, stovetop, cupboards (inside and out), benchtops, sink, splashback, and dishwasher exterior. Bathrooms and toilets — scrubbing tiles, grout, shower screens, shower trays, vanity, mirrors, taps, and toilets. Bedrooms and living areas — vacuuming carpets, wiping skirting boards, dusting ceiling fans and light fittings, cleaning window sills and tracks, wiping light switches and power points. Laundry — tub, taps, and cabinets. General — removing cobwebs, vacuuming all floors, mopping hard floors, and spot-cleaning walls.",
      },
      {
        heading: "How Much Does a Bond Clean Cost in Sydney?",
        body: "Our prices are flat-rate and competitive with no hidden fees. A studio or 1-bedroom unit starts from $250. A 2-bedroom apartment is approximately $320–$420. A 3-bedroom house ranges from $450–$600. A 4-bedroom home starts from $600. Add-ons like carpet steam cleaning, pressure washing, and balcony cleaning are available at reasonable extra costs. We provide a written quote upfront so you always know what you're paying.",
      },
      {
        heading: "Our 100% Bond-Back Guarantee",
        body: "We stand behind every clean we do. If your property manager identifies any issues with our work during the final inspection, we come back and re-clean those areas for free within 72 hours. We've helped thousands of Sydney renters get their full bond back. That's thousands of people who had between $1,000 and $4,000 returned to their bank accounts because of a quality bond clean. Don't risk losing your bond — book Tru Best Bond Cleaning Sydney today. Contact us on WhatsApp 0488841883 or fill in our online quote form. Same-day bookings available.",
      },
    ],
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Steam Cleaning Sydney | Professional Carpet Cleaners",
    metaTitle: "Carpet Steam Cleaning Sydney | Professional Carpet Cleaners",
    metaDescription:
      "Professional carpet steam cleaning in Sydney. Remove stains, allergens and odours with our hot water extraction method. Affordable prices.",
    image: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning Sydney — hot water extraction on living room carpet",
    shortDesc:
      "We use hot water extraction steam cleaning to remove deep stains, pet odours, and allergens from your carpets.",
    content: [
      {
        heading: "What Is Carpet Steam Cleaning?",
        body: "Carpet steam cleaning — also called hot water extraction — is the most effective method for deep-cleaning carpets. We inject hot water mixed with a professional cleaning solution deep into your carpet fibres, then extract it along with all the dirt, bacteria, dust mites, allergens, and stains. This is the method recommended by most carpet manufacturers to maintain your carpet's quality and warranty. Regular vacuuming only removes surface dust. Steam cleaning removes what's buried deep in the fibres — the stuff you can't see but definitely affects your health and the look of your carpet.",
      },
      {
        heading: "What Stains Can We Remove?",
        body: "Our professional steam cleaning removes a wide range of stains and odours, including: red wine, coffee, tea, juice, pet urine and faeces, mud and dirt, food spills, grease, ink, and general soiling. We pre-treat stubborn stains before the main extraction process for the best possible result. Some very old or permanent stains may not fully remove — we'll let you know honestly before we start. For bond cleaning purposes, we focus on getting your carpets looking clean enough to pass the real estate agent's inspection.",
      },
      {
        heading: "Why Do You Need Professional Carpet Cleaning for Your Bond?",
        body: "Most real estate agents in Sydney require professional carpet steam cleaning as part of the end of lease clean. Simply vacuuming your carpets isn't enough. If your carpets aren't professionally cleaned, your agent will organise it themselves and deduct the cost from your bond — often at a higher price than if you'd booked it yourself. Our carpet steam cleaning starts from $50 per room. We combine carpet cleaning with your bond clean for the best value. You'll receive a receipt you can show your property manager as proof.",
      },
      {
        heading: "How Long Does Carpet Steam Cleaning Take?",
        body: "The time depends on how many rooms you have and the condition of the carpets. A typical 2-bedroom apartment takes around 1–2 hours for carpet cleaning alone. We recommend booking carpet cleaning at the end of your move-out day so the carpets have time to dry before the final inspection. Dry time is usually 4–6 hours with good ventilation. We use powerful truck-mounted or portable extraction machines to ensure thorough cleaning and faster drying. Book your carpet clean alongside your bond clean for the best package price. Call or WhatsApp 0488841883 today.",
      },
    ],
  },
  {
    slug: "oven-cleaning",
    title: "Oven Cleaning Sydney | Professional Oven & Stovetop Cleaning",
    metaTitle: "Oven Cleaning Sydney | Professional Oven & Stovetop Cleaning",
    metaDescription:
      "Professional oven cleaning Sydney. We degrease and restore ovens to like-new condition for your bond inspection. Book now.",
    image: "/assets/generated/service-oven-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional oven cleaning service Sydney — clean sparkling oven interior and stovetop",
    shortDesc:
      "We fully degrease and restore your oven, stovetop, and rangehood to like-new condition for your bond inspection.",
    content: [
      {
        heading: "Why Is Oven Cleaning So Hard?",
        body: "The oven is one of the most difficult parts of a rental property to clean, and it's one of the first things a property manager checks during a final inspection. Years of baked-on grease, burnt food, and carbon deposits build up inside the oven cavity, on the racks, on the glass door, and under the stovetop burners. Regular household cleaners don't have the strength to break through this. If your oven fails the inspection, your property manager can deduct $100–$200+ from your bond to have it professionally cleaned. That's a costly mistake easily avoided.",
      },
      {
        heading: "Our Professional Oven Cleaning Process",
        body: "Our oven cleaning technicians use commercial-grade degreasers and specialised tools to break down even the most stubborn baked-on grease. Our process: First, we dismantle all removable parts — oven racks, tray, glass door panels, and burner heads. We soak them in a professional degreasing solution. While soaking, we treat the oven cavity with our industrial cleaner and allow it to penetrate. We then scrub, wipe, and rinse every surface until it shines. We reassemble the oven and wipe down the stovetop, knobs, and rangehood filter. The result is an oven that looks like it just came out of the showroom.",
      },
      {
        heading: "What's Included in Our Oven Clean?",
        body: "Our complete oven cleaning service includes: full oven interior including cavity walls, ceiling, and floor; oven racks and trays; oven glass door (inside and out); stovetop surface, burner heads, and drip trays; control knobs; rangehood filters; and rangehood exterior. We also wipe down the oven exterior and surrounding cabinetry. This comprehensive approach means every part of your cooking appliances looks spotless for the final inspection.",
      },
      {
        heading: "How Much Does Oven Cleaning Cost in Sydney?",
        body: "A standalone professional oven clean in Sydney starts from $80. When you combine oven cleaning with a full bond clean package, you save money. We include oven cleaning as part of our standard bond clean packages at no extra charge, because we know the oven is a critical inspection item. Don't risk losing your bond over a dirty oven. Book Tru Best Bond Cleaning Sydney now — call or WhatsApp 0488841883. We're available seven days a week, including weekends and public holidays, to suit your move-out schedule.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning Sydney | Streak-Free Window Cleaners",
    metaTitle: "Window Cleaning Sydney | Streak-Free Window Cleaners",
    metaDescription:
      "Professional window cleaning in Sydney. Streak-free results, inside cleaning for bond inspections. Book Tru Best Bond Cleaning Sydney.",
    image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    imageAlt:
      "Window cleaning service Sydney apartment — streak-free clean windows with Sydney view",
    shortDesc:
      "We clean all interior windows, window tracks, and sills to streak-free perfection for your bond inspection.",
    content: [
      {
        heading: "Why Do Windows Matter for Your Bond?",
        body: "Clean windows make an enormous difference to how a property looks and feels. Property managers check windows during the final inspection — they look at the glass for smears and marks, the tracks for dust and grime, and the sills for mould and dirt. Dirty windows can result in a bond deduction. Over a tenancy, windows accumulate dust, fingerprints, pet nose prints, condensation marks, and mould around the seals. Our professional window cleaning restores them to a streak-free shine that impresses even the fussiest property manager.",
      },
      {
        heading: "Our Window Cleaning Process",
        body: "We use professional squeegees, microfibre cloths, and streak-free glass cleaner to ensure perfect results every time. Our process: We remove any insect screens and wipe them down. We clean the window tracks with a small brush to remove all dirt and dust. We wipe down the window sills and frames. We clean the glass with our professional solution and squeegee for a perfectly streak-free finish. We replace the screens and do a final check from all angles. The result is crystal-clear glass that lets the light pour in and makes your home look pristine.",
      },
      {
        heading: "What Windows Do We Clean?",
        body: "As part of our bond clean, we clean all interior-accessible windows in your property. This includes bedroom windows, living room windows, kitchen windows, bathroom windows, and sliding door glass. We clean the inside glass panel, the window frame, the sill, and the track. We also clean sliding door tracks which are notorious for collecting dust and grime. For multi-storey properties, we clean all windows reachable from inside. External window cleaning at height requires specialist equipment and is available as an add-on service — ask us when you book.",
      },
      {
        heading: "How Much Does Window Cleaning Cost?",
        body: "Window cleaning is included as part of our standard bond clean packages. As a standalone service, window cleaning in Sydney starts from $80 for a small apartment. Larger homes with many windows are priced based on the number of windows and screens. Getting your windows professionally cleaned is a small investment that protects your bond. One dirty window can be the difference between getting your full bond back or losing money. Book now — call or WhatsApp 0488841883 for a free quote. We offer same-day bookings where available.",
      },
    ],
  },
  {
    slug: "wall-washing",
    title: "Wall Washing Sydney | Scuff & Mark Removal Service",
    metaTitle: "Wall Washing Sydney | Scuff & Mark Removal Service",
    metaDescription:
      "Wall washing and scuff mark removal in Sydney. We clean walls, skirting boards and remove marks so you pass your final inspection.",
    image: "/assets/generated/service-bond-cleaning.dim_800x500.jpg",
    imageAlt:
      "Wall washing and scuff mark removal service Sydney — clean painted walls ready for inspection",
    shortDesc:
      "We remove scuff marks, fingerprints, and stains from your walls and skirting boards using professional sugar soap techniques.",
    content: [
      {
        heading: "Why Do Walls Get Dirty During a Tenancy?",
        body: "Walls take a lot of punishment during a tenancy. Everyday living leaves behind fingerprints near light switches, scuff marks from furniture being moved, crayon or pen marks from kids, grease splatter near the kitchen, and general grime that builds up over time. Most of these marks are not visible until someone looks closely — like a property manager with a torch during your exit inspection. In New South Wales, tenants are responsible for fair wear and tear, but excessive marks and scuffs go beyond that and can result in bond deductions.",
      },
      {
        heading: "Our Wall Washing Process",
        body: "We use a professional sugar soap solution, which is the gold standard for wall washing in Australia. Sugar soap is a powerful alkaline cleaner that lifts grease, grime, and most marks from painted walls without damaging the paint surface. Our process: We start with a dry wipe to remove any loose dust. We then apply diluted sugar soap solution with a clean microfibre cloth or sponge. We wipe in gentle circular motions, working from top to bottom. We rinse with a clean damp cloth to remove any residue. We pay special attention to high-traffic areas: around light switches, door handles, near the kitchen, and hallways.",
      },
      {
        heading: "What Do We Remove From Walls?",
        body: "Our wall washing service targets: fingerprints and handprints (especially around light switches, doors, and skirting boards); scuff marks from shoes, furniture, and bags; grease and cooking oil splatters near kitchens; general grime and dust build-up; crayon, pen, or pencil marks (where water-soluble); and sticky residue from tape or blu-tack. We also clean all skirting boards thoroughly — these are often overlooked but always checked by property managers. Skirting boards collect dust, scuffs, and pet hair that needs to be removed.",
      },
      {
        heading: "Is Wall Washing Included in a Standard Bond Clean?",
        body: "We include spot wall washing and full skirting board cleaning as part of every bond clean. If your walls have significant marks, stains, or require full wall washing of entire rooms, this may be an additional service. We'll assess your walls during the quote process and let you know exactly what's needed. Our honest approach means no surprises on the day. Protecting your bond is our priority. Get a free quote now — WhatsApp 0488841883 or fill in our contact form online. We service all Sydney suburbs seven days a week.",
      },
    ],
  },
  {
    slug: "move-in-out",
    title: "Move In Move Out Cleaning Sydney | Vacate Cleaning Service",
    metaTitle: "Move In Move Out Cleaning Sydney | Vacate Cleaning Service",
    metaDescription:
      "Move in move out cleaning in Sydney. Start fresh or leave spotless with our complete vacate cleaning service.",
    image: "/assets/generated/service-bond-cleaning.dim_800x500.jpg",
    imageAlt:
      "Move in move out cleaning service Sydney — fresh clean empty apartment ready for new tenant",
    shortDesc:
      "Moving in or moving out? We make your new place sparkle or leave your old place spotless. Flexible booking to suit your schedule.",
    content: [
      {
        heading: "Move-In vs Move-Out Cleaning — What's the Difference?",
        body: "A move-out clean (also called a vacate clean or bond clean) is done when you leave a rental property. The goal is to return the property to the same clean condition it was in when you moved in, so you get your full bond back from your landlord. A move-in clean is done before you move into a new property. Even if the previous tenant had a bond clean done, you may want your own independent clean to make sure your new home is hygienically clean and set up exactly the way you like it. Both types of cleaning use our same rigorous cleaning checklist.",
      },
      {
        heading: "Who Needs a Move-In/Move-Out Clean?",
        body: "Move-out cleaning is for: tenants moving out of a rental property who want their full bond returned; homeowners selling their property who want a deep clean before open inspections or handing over keys to the new owners; and landlords between tenants who want their property professionally cleaned and ready for new renters. Move-in cleaning is for: tenants starting in a new rental who want to start fresh; new homeowners who want to clean a property before moving their belongings in; and anyone who wants peace of mind that their new home is hygienically clean from day one.",
      },
      {
        heading: "What's Included in Our Move-In/Move-Out Clean?",
        body: "Our complete move-in/move-out clean covers everything from top to bottom: all kitchen appliances (oven, microwave, dishwasher, rangehood), all cupboards and drawers inside and out, all bathrooms and toilets, all bedrooms (vacuumed, dusted, windows cleaned), living areas, laundry, and garage. We clean skirting boards, light fittings, fans, switches, and power points. We remove cobwebs from ceilings and corners. We mop all hard floors and vacuum all carpets. Optional add-ons include carpet steam cleaning, pressure washing of outdoor areas, and balcony cleaning.",
      },
      {
        heading: "Flexible Scheduling Across All Sydney Suburbs",
        body: "We understand that moving is stressful and schedules can change at the last minute. That's why we offer flexible booking times including weekends, evenings, and public holidays. We cover all Sydney suburbs — from the Eastern Suburbs and Inner West to the Northern Beaches, South Sydney, Parramatta, Penrith, and everything in between. Same-day bookings are available where our schedule allows. We confirm your booking within 1 hour during business hours. Get a free quote now — WhatsApp 0488841883 or use our online contact form. Let us handle the cleaning so you can focus on your move.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
