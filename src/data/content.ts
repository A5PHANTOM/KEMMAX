import heroBg from "../assets/images/cleanroom-workers.jpg";
import serviceFactory from "../assets/images/factory-worker-glass.jpg";
import serviceScientist from "../assets/images/scientist-machine.jpg";
import serviceLab from "../assets/images/lab-workers.jpg";
import serviceChip from "../assets/images/futuristic-chip.jpg";
import industryCar from "../assets/images/car-assembly.jpg";
import industryHealthcare from "../assets/images/healthcare-ai.jpg";
import industryMedical from "../assets/images/medical-ppe-lab.jpg";

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
  yearEstablished: "2010",
  yearsExperience: "15+",
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
  headline: "Your Vision. Our Clean Room Engineering.",
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
    "KEMMAX is a specialist cleanroom solutions company dedicated to delivering controlled environments that meet the highest standards of cleanliness, safety, and regulatory compliance. We work with clients across India to design, supply, install, and validate cleanrooms tailored to their exact operational and compliance requirements.",
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
    image: industryHealthcare,
  },
  {
    name: "Operation Theatre",
    description:
      "Hospital-grade OT suites with laminar airflow, HEPA filtration, and infection control systems.",
    icon: "stethoscope",
    image: industryMedical,
  },
];

export const featuredProducts = [
  {
    id: "modular-panels",
    name: "Modular Clean Room Panels",
    description:
      "Prefabricated sandwich panels with seamless joints, antimicrobial coatings, and integrated cable management for rapid deployment.",
    category: "Panels",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd87a?w=600&q=80",
  },
  {
    id: "hepa-filtration",
    name: "HEPA Filtration Systems",
    description:
      "High-efficiency particulate air filtration units achieving 99.97% efficiency at 0.3 microns for critical clean room zones.",
    category: "Filtration",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
  },
  {
    id: "ahu-systems",
    name: "HVAC Air Handling Units",
    description:
      "Custom-engineered AHU systems with precise temperature, humidity, and pressure control for validated environments.",
    category: "HVAC",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
];

export const allProducts = [
  ...featuredProducts,
  {
    id: "clean-room-doors",
    name: "Clean Room Doors",
    description:
      "Hermetically sealed doors with interlocking systems, vision panels, and automatic sliding mechanisms for contamination control.",
    category: "Doors",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: "pass-box",
    name: "Pass Box Systems",
    description:
      "Static and dynamic pass boxes with UV sterilization and interlock systems for safe material transfer between zones.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: "monitoring-system",
    name: "Environmental Monitoring",
    description:
      "Real-time particle counters, differential pressure monitors, and temperature/humidity logging for continuous compliance.",
    category: "Monitoring",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "validation-services",
    name: "Validation Services",
    description:
      "Complete IQ/OQ/PQ documentation, airflow visualization, and recovery testing per ISO 14644 and EU GMP guidelines.",
    category: "Validation",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9db0281ae?w=600&q=80",
  },
  {
    id: "laminar-flow",
    name: "Laminar Flow Units",
    description:
      "Vertical and horizontal laminar airflow hoods for sterile work zones with integrated HEPA filtration and lighting.",
    category: "Filtration",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
];

export const productCategories = [
  "All",
  "Panels",
  "HVAC",
  "Filtration",
  "Doors",
  "Monitoring",
  "Validation",
  "Accessories",
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
  image: serviceFactory,
};

export const about = {
  overview: [
    "KEMMAX is a specialist cleanroom solutions company dedicated to delivering controlled environments that meet the highest standards of cleanliness, safety, and regulatory compliance. We work with clients across India to design, supply, install, and validate cleanrooms tailored to their exact operational and compliance requirements.",
    "We provide a comprehensive range of cleanroom products and turnkey project services — from modular cleanroom systems and HVAC solutions to validation support and compliance documentation. Whether you're building a new facility or upgrading an existing one, KEMMAX handles every stage of the process.",
    "With deep expertise across pharmaceutical, semiconductor, healthcare, and industrial sectors, KEMMAX is your trusted partner for compliant, high-performance cleanroom environments. Our commitment to quality, innovation, and customer satisfaction has made us a preferred partner for organizations that cannot compromise on environmental control.",
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
