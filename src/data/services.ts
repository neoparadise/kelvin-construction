export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    description:
      "From bespoke family homes to luxury estates, we deliver turnkey residential construction solutions across the Western Cape. Our experienced team manages every phase — from slab to handover — ensuring quality craftsmanship and on-time delivery.",
    icon: "Building2",
    features: [
      "Custom home design & build",
      "Turnkey project delivery",
      "NHBRC-registered construction",
      "Structural warranty included",
      "Energy-efficient building practices",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "home-renovations",
    title: "Home Renovations & Extensions",
    description:
      "Breathe new life into your existing home with our full-service renovation and extension offerings. Whether you need an extra bedroom, an open-plan living area, or a complete home makeover, Kelvin Construction delivers stunning transformations.",
    icon: "Hammer",
    features: [
      "Single & double-storey extensions",
      "Open-plan conversions",
      "Structural alterations",
      "Ceiling & partitioning",
      "Building plan approvals",
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "kitchen-bathroom-remodels",
    title: "Kitchen & Bathroom Remodels",
    description:
      "Transform the most important rooms in your home with our specialised kitchen and bathroom remodelling service. We handle everything from design consultation to final fitting, using premium materials and modern finishes.",
    icon: "Wrench",
    features: [
      "Design consultation & 3D renders",
      "Built-in cupboards & cabinetry",
      "Granite, quartz & solid surface countertops",
      "Plumbing & tiling",
      "Fixture installation (basins, baths, toilets)",
    ],
    image:
      "https://images.unsplash.com/photo-1556911220-bffb4a0e1b4b?w=800&q=80",
  },
  {
    id: "tiling-flooring",
    title: "Tiling & Flooring",
    description:
      "Expert tiling and flooring installation for residential and commercial spaces. We work with ceramic, porcelain, natural stone, laminate, and vinyl to create durable, beautiful floors that stand the test of time.",
    icon: "SquareStack",
    features: [
      "Ceramic & porcelain tiling",
      "Natural stone & marble",
      "Laminate & engineered wood flooring",
      "Vinyl & luxury vinyl tile (LVT)",
      "Underfloor heating installation",
    ],
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
  {
    id: "roofing",
    title: "Roofing & Roof Repairs",
    description:
      "Comprehensive roofing services including new installations, repairs, and maintenance. From concrete and clay tiles to IBR and Chromadek sheeting, we ensure your roof is watertight and built to last through Cape Town's wet winters.",
    icon: "Triangle",
    features: [
      "New roof installations",
      "Leak detection & repairs",
      "Ceiling insulation",
      "Gutter & fascia replacement",
      "Roof painting & coating",
    ],
    image:
      "https://images.unsplash.com/photo-1600573472584-c1b5e2a2c7f8?w=800&q=80",
  },
  {
    id: "bricklaying-plastering",
    title: "Bricklaying & Plastering",
    description:
      "Professional bricklaying and plastering services for new builds, extensions, and renovations. Our skilled artisans deliver clean, level, and durable masonry work that forms the backbone of any quality structure.",
    icon: "BrickWall",
    features: [
      "Face brick & plaster brickwork",
      "Cavity walls & retaining walls",
      "Cement & gypsum plastering",
      "Cornices & ceiling coving",
      "Screeding & floor preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1590579491624-f98f46d8c357?w=800&q=80",
  },
  {
    id: "painting-waterproofing",
    title: "Painting & Waterproofing",
    description:
      "Interior and exterior painting coupled with professional waterproofing solutions. We use premium paints and sealants to protect your property from the elements while giving it a flawless, long-lasting finish.",
    icon: "PaintBucket",
    features: [
      "Interior wall & ceiling painting",
      "Exterior wall painting & coating",
      "Waterproofing of walls & roofs",
      "Damp proofing & sealants",
      "Wallpaper removal & installation",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  },
  {
    id: "paving-driveways",
    title: "Paving & Driveways",
    description:
      "High-quality paving for driveways, patios, walkways, and commercial parking areas. We offer concrete pavers, clay brick paving, and interlocking blocks in a wide range of colours and patterns.",
    icon: "Grid3x3",
    features: [
      "Concrete paver installation",
      "Clay brick & cobble paving",
      "Interlocking block paving",
      "Driveway excavation & preparation",
      "Concrete kerbing & edging",
    ],
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d45fcc98c9?w=800&q=80",
  },
  {
    id: "general-maintenance",
    title: "General Maintenance",
    description:
      "Reliable property maintenance services for homeowners and estate agents. From minor plumbing and electrical repairs to carpentry and painting touch-ups, we keep your property in pristine condition year-round.",
    icon: "Tool",
    features: [
      "Plumbing repairs & installations",
      "Basic electrical work",
      "Carpentry & joinery",
      "Gate & fence repairs",
      "Emergency call-out service",
    ],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d3fc6?w=800&q=80",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "End-to-end construction project management for homeowners and developers. We oversee budgets, timelines, subcontractors, and compliance so you can enjoy a stress-free building experience from start to finish.",
    icon: "ClipboardCheck",
    features: [
      "Full project oversight",
      "Subcontractor management",
      "Budget & cost control",
      "Scheduling & timeline tracking",
      "Quality assurance & snagging",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-8426c3c2e0b0?w=800&q=80",
  },
]
