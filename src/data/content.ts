import heroBg from "../assets/images/cleanroom-workers.jpg";
import serviceFactory from "../assets/images/factory-worker-glass.jpg";
import serviceScientist from "../assets/images/scientist-machine.jpg";
import serviceLab from "../assets/images/lab-workers.jpg";
import serviceChip from "../assets/images/futuristic-chip.jpg";
import industryCar from "../assets/images/car-assembly.jpg";
import industryHealthcare from "../assets/images/healthcare-ai.jpg";
import industryMedical from "../assets/images/medical-ppe-lab.jpg";
import prodAHU from "../assets/images/air-handling-unit-user.png";
import prodAirShower from "../assets/images/air-shower.png";
import prodModularPanels from "../assets/images/modular-panels-new.png";
import prodDehumidifier from "../assets/images/dehumidifier.png";
import prodDuctingPiping from "../assets/images/ducting-piping.png";
import prodDoor from "../assets/images/cleanroom-door.png";
import prodPiping from "../assets/images/piping-insulation.png";
import prodCeiling from "../assets/images/walkable-ceiling.png";
import prodRAR from "../assets/images/return-air-riser.png";
import prodFullGlass from "../assets/images/full-glass-panel.png";
import prodPreformed from "../assets/images/preformed-panels.png";
import prodFireRated from "../assets/images/fire-rated-panels.png";
import prodFlooring from "../assets/images/epoxy-flooring.png";
import cleanroomCorridor from "../assets/images/cleanroom-corridor.png";
import prodVRV from "../assets/images/vrv-condensing-unit.png";


export const company = {
  name: "KEMMAX",
  legalName: "Clean Room Projects (OPC) Pvt Ltd",
  tagline: "Engineering Clean. Building Trust.",
  phone: "+91 9042676645",
  phoneRaw: "919042676645",
  email: "Kemmaxcpl@gmail.com",
  address:
    "Plot No.16, Kuppusamy Nagar, Thirumazhisai Poonamalle, Chennai - 600 124",
  whatsapp: "https://wa.me/919042676645",
  mapEmbed:
    "https://maps.google.com/maps?q=Plot+No.16+Kuppusamy+Nagar+Thirumazhisai+Poonamalle+Chennai&output=embed",
  yearEstablished: "2021",
  yearsExperience: "5+",
  projectsCompleted: "100+",
  industriesServed: "5+",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export const hero = {
  headline: "Your Vision. Our Cleanroom Solutions.",
  subheadline:
    "KEMMAX delivers end-to-end cleanroom solutions for industries where precision and purity are non-negotiable. From design and supply to installation and validation, we engineer controlled environments built to international standards.",
  cta: "Get Started",
  stats: [
    { value: "ISO", label: "Aligned Standards" },
    { value: "100+", label: "Projects Delivered" },
    { value: "24/7", label: "Technical Support" },
  ],
  backgroundImage: heroBg,
};

export const services = [
  {
    title: "Design",
    subtitle: "Concept to Blueprint",
    description:
      "Comprehensive clean room layout design aligned with ISO and GMP standards for optimal workflow and contamination control.",
    image: serviceFactory,
    path: "/about",
  },
  {
    title: "Engineering",
    subtitle: "Precision Systems",
    description:
      "Advanced HVAC, filtration, and pressure cascade engineering for pharmaceutical, semiconductor, and healthcare facilities.",
    image: serviceScientist,
    path: "/about",
  },
  {
    title: "Commissioning",
    subtitle: "Validation Ready",
    description:
      "Full IQ/OQ/PQ commissioning and performance qualification to ensure your clean room meets regulatory requirements.",
    image: serviceLab,
    path: "/about",
  },
  {
    title: "HVAC",
    subtitle: "Climate Control",
    description:
      "Specialized air handling systems with HEPA filtration, temperature control, and humidity management for critical environments.",
    image: serviceChip,
    path: "/products",
  },
];

export const companyIntro = {
  title: "Engineering Clean. Building Trust.",
  description:
    "KEMMAX is a specialist cleanroom solutions company dedicated to delivering controlled environments that meet the highest standards of cleanliness, safety, and regulatory compliance. We work with clients across India and abroad to design, supply, install, and validate cleanrooms tailored to their exact operational and compliance requirements.",
  highlights: [
    `${company.yearsExperience} years of industry experience`,
    "Turnkey clean room solutions — design, supply, install & validate",
    "ISO & GMP compliant products and practices",
    "Pan-India project delivery with reliable after-sales support",
  ],
};

export const industries = [
  {
    name: "Pharmaceutical",
    description:
      "GMP-compliant clean rooms for drug manufacturing, sterile processing, and quality control laboratories.",
    icon: "pill",
    image: heroBg,
  },
  {
    name: "Semiconductor",
    description:
      "Ultra-clean environments with precise particle control for wafer fabrication and microelectronics assembly.",
    icon: "cpu",
    image: serviceChip,
  },
  {
    name: "Automotive",
    description:
      "Controlled environments for precision component manufacturing, painting booths, and quality inspection areas.",
    icon: "car",
    image: industryCar,
  },
  {
    name: "Healthcare",
    description:
      "Sterile processing areas, isolation rooms, and specialized medical device manufacturing facilities.",
    icon: "heart-pulse",
    image: industryMedical,
  },
  {
    name: "Operation Theatre",
    description:
      "Hospital-grade OT suites with laminar airflow, HEPA filtration, and infection control systems.",
    icon: "stethoscope",
    image: industryHealthcare,
  },
];

export const featuredProducts = [
  {
    id: "modular-panels",
    name: "Modular Clean Room Panels",
    description:
      "Prefabricated modular sandwich panels with seamless joints, antimicrobial coatings, and integrated utilities. Available in PUF, PIR, or Rockwool insulation options.",
    category: "Panels",
    image: prodModularPanels,
  },
  {
    id: "ahu-systems",
    name: "Air Handling Units (AHU)",
    description:
      "Custom-engineered double-skinned Air Handling Units with integrated cooling, heating, and multistage filtration (EU3 to HEPA) to maintain strict cleanroom parameters.",
    category: "HVAC",
    image: prodAHU,
  },
  {
    id: "air-showers",
    name: "Air Showers & Entry Chambers",
    description:
      "Premium stainless steel cleanroom air showers equipped with high-velocity air nozzles (20-25 m/s) and HEPA filters to decontaminate personnel prior to entry.",
    category: "Equipment",
    image: prodAirShower,
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: "dehumidification-systems",
    name: "Industrial Dehumidifiers & Ambiators",
    description:
      "Advanced desiccant and refrigeration-based dehumidifiers integrated with adiabatic cooling (ambiator) systems for high-precision humidity control.",
    category: "HVAC",
    image: prodDehumidifier,
  },
  {
    id: "ventilation-heat-recovery",
    name: "Ventilation & Heat Recovery Units",
    description:
      "Energy-efficient fresh air ventilation systems equipped with heat recovery wheels or plate heat exchangers to optimize thermal load management.",
    category: "HVAC",
    image: serviceScientist,
  },
  {
    id: "vrv-condensing-units",
    name: "VRVs & Condensing Units",
    description:
      "High-efficiency Variable Refrigerant Volume (VRV) systems and robust outdoor condensing units tailored for heavy-duty cleanroom HVAC demands.",
    category: "HVAC",
    image: prodVRV,
  },
  {
    id: "ducting-insulation",
    name: "Cleanroom Ducting Works",
    description:
      "Pre-fabricated rectangular and spiral GI / pre-insulated ducting works, meticulously sealed and leak-tested to ensure contamination-free air supply.",
    category: "HVAC",
    image: prodDuctingPiping,
  },
  {
    id: "piping-utility-insulation",
    name: "Piping & Utility Insulation",
    description:
      "High-grade chilled water, hot water, and utility piping networks insulated with nitrile rubber or glasswool for optimal thermal efficiency.",
    category: "HVAC",
    image: prodPiping,
  },
  {
    id: "clean-room-doors",
    name: "Doors and View Panels",
    description:
      "Hermetically sealed cleanroom doors and flush-mounted double glazed view panels with interlocking mechanisms, dropdown seals, and fire-resistant cores.",
    category: "Doors",
    image: prodDoor,
  },
  {
    id: "full-glass-panels",
    name: "Full Glass Panels & Partitions",
    description:
      "Aesthetic, frameless, and flush-mounted full glass panel partitions for maximum visibility and architectural brilliance in modern sterile facilities.",
    category: "Panels",
    image: prodFullGlass,
  },
  {
    id: "fire-rated-panels",
    name: "Fire Rated Panels",
    description:
      "Tested and certified modular fire-rated cleanroom wall and ceiling panels (up to 2 hours rating) with Rockwool cores to ensure maximum safety.",
    category: "Panels",
    image: prodFireRated,
  },
  {
    id: "preformed-panels",
    name: "Pre-formed Panels",
    description:
      "Specialized pre-formed modular cleanroom wall, ceiling, and corner panels designed with integrated radius covings to eliminate sharp 90-degree angles.",
    category: "Panels",
    image: prodPreformed,
  },
  {
    id: "walkable-ceiling-systems",
    name: "Walkable & Non-Walkable Ceilings",
    description:
      "Heavy-duty walkable ceiling panel grids designed to support maintenance loads, and cost-effective non-walkable ceilings for lighter installations.",
    category: "Panels",
    image: prodCeiling,
  },
  {
    id: "return-air-risers",
    name: "Inbuilt & Exposed Return Air Risers (RAR)",
    description:
      "Flush inbuilt or surface-mounted Return Air Risers (RAR) designed for optimal air recycling and laminar flow maintenance inside cleanrooms.",
    category: "HVAC",
    image: prodRAR,
  },
  {
    id: "cleanroom-flooring",
    name: "Cleanroom Flooring Systems",
    description:
      "Self-leveling epoxy and polyurethane (PU) flooring systems, creating a seamless, chemical-resistant, and electrostatic discharge (ESD) safe surface.",
    category: "Flooring",
    image: prodFlooring,
  },
];

export const productCategories = [
  "All",
  "Panels",
  "HVAC",
  "Doors",
  "Flooring",
  "Equipment",
];

export const whyChooseUs = [
  {
    title: "Complete Service",
    description:
      "Design, supply, installation, and validation under one roof — seamless end-to-end delivery.",
    icon: "building-2",
    highlighted: true,
  },
  {
    title: "ISO & GMP Compliant",
    description:
      "Every project adheres to ISO 14644, EU GMP, and WHO guidelines with documented quality assurance.",
    icon: "shield-check",
    highlighted: false,
  },
  {
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across pharmaceutical, semiconductor, healthcare, and automotive sectors.",
    icon: "award",
    highlighted: false,
  },
  {
    title: "Project Experience",
    description:
      "100+ successful clean room installations delivered on time and within budget across India.",
    icon: "wrench",
    highlighted: false,
  },
  {
    title: "Customer Commitment",
    description:
      "Dedicated project managers and 24/7 post-commissioning support for long-term partnership.",
    icon: "users",
    highlighted: false,
  },
];

export const cta = {
  headline: "Ready to Build Your Cleanroom?",
  message:
    "Contact KEMMAX today for a free consultation and quote. Our team is ready to engineer the right controlled environment for your facility.",
  button: "Contact Us",
  image: cleanroomCorridor,
};

export const about = {
  overview: [
    "KEMMAX is a specialist cleanroom solutions company dedicated to delivering controlled environments that meet the highest standards of cleanliness, safety, and regulatory compliance. We work with clients across India and abroad to design, supply, install, and validate cleanrooms tailored to their exact operational and compliance requirements.",
    "We provide a comprehensive range of cleanroom products and turnkey project services — from modular cleanroom systems, molecular clean rooms, HVAC solutions, and operation theatres to validation support and compliance documentation. Whether you're building a new facility or upgrading an existing one, KEMMAX handles every stage of the process.",
    "With deep expertise across pharmaceutical, semiconductor, healthcare, automobiles, food processing units, and industrial sectors, KEMMAX is your trusted partner for compliant, high-performance cleanroom environments. Our commitment to quality, innovation, and customer satisfaction has made us a preferred partner for organizations that cannot compromise on environmental control.",
  ],
  vision:
    "To be the most trusted cleanroom solutions provider in India — recognised for our engineering precision, quality standards, and commitment to every client we serve.",
  mission:
    "To deliver cleanroom environments that empower our clients to operate with confidence, meet regulatory requirements, and achieve the highest levels of product and process integrity.",
  values: [
    {
      title: "Quality",
      description:
        "ISO-compliant products and installation at every stage of the project lifecycle.",
      icon: "shield-check",
    },
    {
      title: "Reliability",
      description:
        "On-time delivery and dependable after-sales support you can count on.",
      icon: "handshake",
    },
    {
      title: "Expertise",
      description:
        "Deep technical knowledge across all cleanroom disciplines and regulatory standards.",
      icon: "crosshair",
    },
    {
      title: "Integrity",
      description:
        "Honest, transparent, and accountable in everything we do.",
      icon: "scale",
    },
    {
      title: "Innovation",
      description:
        "Continuously improving our solutions and processes to stay ahead.",
      icon: "lightbulb",
    },
  ],
  stats: [
    { value: company.yearEstablished, label: "Year Established" },
    { value: company.projectsCompleted, label: "Projects Completed" },
    { value: company.industriesServed, label: "Industries Served" },
    { value: company.yearsExperience, label: "Years Experience" },
  ],
};

export const socialLinks = [
  { platform: "LinkedIn", url: "#", icon: "linkedin" },
  { platform: "Facebook", url: "#", icon: "facebook" },
  { platform: "Instagram", url: "#", icon: "instagram" },
];

export const contactForm = {
  title: "Send Us a Message",
  subtitle:
    "Fill out the form below and our team will get back to you within 24 hours.",
  productOptions: allProducts.map((p) => p.name),
};
