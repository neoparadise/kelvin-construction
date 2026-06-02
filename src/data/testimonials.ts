export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "jaco-van-der-merwe",
    name: "Jaco van der Merwe",
    role: "Homeowner",
    company: "Durbanville, Cape Town",
    quote:
      "Kelvin Construction built our family home from the ground up. The quality of workmanship is outstanding — every detail was handled with care. They kept us informed throughout the entire process and delivered on time and within budget.",
    rating: 5,
  },
  {
    id: "marlize-botha",
    name: "Marlize Botha",
    role: "Homeowner",
    company: "Oude Kerk, Bellville",
    quote:
      "We renovated our heritage cottage and were nervous about finding a contractor who would respect its character. Kelvin Construction understood exactly what we wanted. The result is a perfect blend of old-world charm and modern convenience.",
    rating: 5,
  },
  {
    id: "andries-kapp",
    name: "Andries Kapp",
    role: "Homeowner",
    company: "Goeie Hoop, Bellville",
    quote:
      "After years of dealing with roof leaks every winter, Kelvin Construction finally sorted the problem permanently. Their roofing team was professional, punctual, and cleaned up thoroughly every day. Highly recommended.",
    rating: 5,
  },
  {
    id: "rene-september",
    name: "René September",
    role: "Homeowner",
    company: "Welgedacht, Bellville",
    quote:
      "The exterior painting and waterproofing team did an exceptional job on our double-storey home. They were meticulous with the prep work and the finish is flawless. Our damp issues are completely gone.",
    rating: 5,
  },
  {
    id: "esther-williams",
    name: "Esther Williams",
    role: "Estate Manager",
    company: "Stellenberg Security Estate",
    quote:
      "We contracted Kelvin Construction for our estate's ongoing maintenance and they have been exceptional. Response times are quick, the work is always high quality, and their team is professional and friendly.",
    rating: 4,
  },
  {
    id: "pieter-jordaan",
    name: "Pieter Jordaan",
    role: "Property Developer",
    company: "Parow CBD",
    quote:
      "I've worked with many contractors over the years, and Kelvin Construction stands out for their reliability. They completed our retail complex fit-out in record time without compromising on quality. Will definitely use them again.",
    rating: 5,
  },
]
