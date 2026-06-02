export interface Project {
  id: string
  title: string
  category: string
  location: string
  description: string
  images: string[]
  beforeImage?: string
  afterImage?: string
  completed: string
  testimonial?: { name: string; quote: string }
}

export const projects: Project[] = [
  {
    id: "modern-family-home-durbanville",
    title: "Modern Family Home — Durbanville",
    category: "residential",
    location: "Durbanville, Cape Town",
    description:
      "A brand-new 4-bedroom family home with an open-plan living area, modern kitchen, and covered patio. The project included a double garage, solar-ready roof structure, and full landscaping. Completed on schedule within 9 months.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    completed: "March 2025",
    testimonial: {
      name: "Jaco van der Merwe",
      quote:
        "Kelvin Construction built our dream home. Their attention to detail and communication throughout the build was exceptional.",
    },
  },
  {
    id: "cottage-renovation-oudekerk",
    title: "Heritage Cottage Renovation — Oude Kerk",
    category: "renovation",
    location: "Oude Kerk, Bellville",
    description:
      "A full renovation of a 1950s heritage cottage in Bellville's historic Oude Kerk area. Work included structural reinforcement, new roofing, rewiring, plumbing, and a modern open-plan kitchen-living layout while preserving original wooden floors and ceiling beams.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    completed: "November 2024",
    testimonial: {
      name: "Marlize Botha",
      quote:
        "They respected the character of our old cottage while bringing it into the 21st century. Absolutely thrilled with the result.",
    },
  },
  {
    id: "retail-complex-parow",
    title: "Retail Complex Fit-Out — Parow",
    category: "commercial",
    location: "Parow, Cape Town",
    description:
      "Complete interior fit-out for a 450 m² retail complex in Parow's central business district. Scope included partitioning, ceiling installation, plumbing, electrical, flooring, and storefront glazing. Delivered in 8 weeks for the tenant's scheduled opening.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    completed: "July 2024",
  },
  {
    id: "roof-replacement-goeie-hoop",
    title: "Full Roof Replacement — Goeie Hoop",
    category: "roofing",
    location: "Goeie Hoop, Bellville",
    description:
      "Complete strip and replacement of a leaking concrete tile roof on a 3-bedroom home. Replaced with lightweight IBR sheeting, added ceiling insulation, new gutters and fascia boards. Solved persistent damp issues in the ceiling.",
    images: [
      "https://images.unsplash.com/photo-1600573472584-c1b5e2a2c7f8?w=800&q=80",
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1590496794047-73347d7c8e7d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    completed: "November 2023",
    testimonial: {
      name: "Andries Kapp",
      quote:
        "Our roof had been leaking for years. Kelvin Construction sorted it out properly — not a single leak this winter.",
    },
  },
  {
    id: "luxury-vinyl-tiling-tygerberg",
    title: "Luxury Vinyl Flooring — Tygerberg",
    category: "flooring",
    location: "Tygerberg, Bellville",
    description:
      "Installation of luxury vinyl tile (LVT) flooring throughout a 200 m² apartment in Tygerberg. Included underfloor preparation, moisture barrier, and waterproof LVT in bathrooms and kitchen. Seamless click-lock system used for durability.",
    images: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1600573472556-6c0d4c0fe9b9?w=800&q=80",
    completed: "February 2025",
  },
  {
    id: "exterior-painting-welgedacht",
    title: "Exterior Painting & Waterproofing — Welgedacht",
    category: "painting",
    location: "Welgedacht, Bellville",
    description:
      "Full exterior painting and waterproofing for a double-storey home in Welgedacht. Applied elastomeric waterproof coating to external walls, painted all window frames and gutters, and sealed the driveway. Completed in 10 days.",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    ],
    beforeImage:
      "https://images.unsplash.com/photo-1564078516393-cf04bd96a897?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    completed: "January 2025",
    testimonial: {
      name: "Rene September",
      quote:
        "The house looks brand new. The waterproofing has already made a huge difference with the damp on our south-facing wall.",
    },
  },
  {
    id: "driveway-paving-avondale",
    title: "Driveway & Patio Paving — Avondale",
    category: "paving",
    location: "Avondale, Bellville",
    description:
      "Interlocking concrete block paving for a double driveway, front walkway, and back patio in Avondale. Used 60 mm medium-grey pavers with a herringbone pattern. Included excavation, layer works, and concrete kerbing.",
    images: [
      "https://images.unsplash.com/photo-1582213782179-e0d45fcc98c9?w=800&q=80",
    ],
    completed: "October 2024",
  },
  {
    id: "general-maintenance-stellenberg",
    title: "Estate Maintenance Contract — Stellenberg",
    category: "maintenance",
    location: "Stellenberg, Durbanville",
    description:
      "Ongoing general maintenance contract for a 40-unit security estate in Stellenberg. Services include plumbing repairs, electrical fault-finding, carpentry, painting touch-ups, and gate automation maintenance. Monthly inspections and emergency call-out.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d3fc6?w=800&q=80",
    ],
    completed: "April 2025",
    testimonial: {
      name: "Esther Williams",
      quote:
        "Having Kelvin Construction on retainer has saved us so much hassle. They respond quickly and the work is always top quality.",
    },
  },
]
