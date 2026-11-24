import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

const spanish: Record<string, string> = {
  Home: "Inicio",
  Services: "Servicios",
  About: "Nosotros",
  Contact: "Contacto",
  "Book online": "Reservar",
  "Request service": "Solicitar servicio",
  "Serving Elizabeth, NJ & surrounding areas": "Atendemos Elizabeth, NJ y alrededores",
  "Mon–Fri 8am–6pm": "Lun–Vie 8am–6pm",
  "Complete comfort care": "Soluciones completas",
  "How can we help?": "¿Cómo podemos ayudar?",
  "Explore residential HVAC and commercial refrigeration services.":
    "Explore nuestros servicios de climatización y refrigeración comercial.",
  "View all services": "Ver todos los servicios",
  "About Dyett": "Acerca de Dyett",
  "Our approach and standards": "Nuestro enfoque y estándares",
  "Contact our team": "Contacte a nuestro equipo",
  "Phone, email and office details": "Teléfono, correo y oficina",
  "Choose a service starting point": "Elija el servicio que necesita",
  Explore: "Explorar",
  "About us": "Nosotros",
  Hours: "Horario",
  "Mon–Fri: 8am–6pm": "Lun–Vie: 8am–6pm",
  "Saturday: 8am–4pm": "Sábado: 8am–4pm",
  "Sunday: Emergency only": "Domingo: solo emergencias",
  "Residential & commercial service": "Servicio residencial y comercial",
  "HVAC & refrigeration experts": "Expertos en climatización y refrigeración",
  "Comfort done right.": "Confort bien hecho.",
  "Service you can trust.": "Servicio en el que puede confiar.",
  "Professional heating, cooling and commercial refrigeration service for homes and businesses across Elizabeth, NJ.":
    "Servicio profesional de calefacción, aire acondicionado y refrigeración comercial para hogares y negocios de Elizabeth, NJ.",
  "Transparent estimates": "Presupuestos transparentes",
  "Skilled workmanship": "Trabajo especializado",
  "Residential & commercial": "Residencial y comercial",
  "Local service": "Servicio local",
  "Elizabeth, New Jersey": "Elizabeth, Nueva Jersey",
  "What we do": "Lo que hacemos",
  "Complete comfort care,": "Soluciones completas,",
  "under one roof.": "en un solo lugar.",
  "From urgent repairs to planned installations, we bring practical expertise to every residential and commercial system.":
    "Desde reparaciones urgentes hasta instalaciones planificadas, aportamos experiencia práctica a cada sistema residencial y comercial.",
  "Why Dyett": "Por qué Dyett",
  "Clear answers.": "Respuestas claras.",
  "Quality work.": "Trabajo de calidad.",
  "We believe dependable service starts with listening, diagnosing accurately and explaining your options in plain language.":
    "Creemos que un servicio confiable comienza escuchando, diagnosticando con precisión y explicando sus opciones claramente.",
  "Accurate diagnostics": "Diagnósticos precisos",
  "We identify the root cause—not just the symptom.": "Identificamos la causa, no solo el síntoma.",
  "Upfront recommendations": "Recomendaciones claras",
  "Clear options and estimates before work starts.":
    "Opciones y presupuestos claros antes de comenzar.",
  "Professional workmanship": "Trabajo profesional",
  "Careful, code-conscious work built to perform.":
    "Trabajo cuidadoso, conforme a normas y hecho para durar.",
  "Meet Dyett HVAC": "Conozca Dyett HVAC",
  "Built for real life": "Diseñado para la vida real",
  "Comfort where": "Confort donde",
  "it matters most.": "más importa.",
  "Commercial systems": "Sistemas comerciales",
  "Home comfort": "Confort residencial",
  "Smart controls": "Controles inteligentes",
  "Simple process": "Proceso sencillo",
  "Getting comfortable is easy.": "Recuperar el confort es fácil.",
  "Tell us what’s happening": "Cuéntenos qué sucede",
  "Call or send a short service request online.": "Llámenos o envíe una solicitud en línea.",
  "We inspect & explain": "Inspeccionamos y explicamos",
  "We diagnose the issue and walk you through your options.":
    "Diagnosticamos el problema y le explicamos sus opciones.",
  "We get it done right": "Lo resolvemos correctamente",
  "Approve the work and our technician handles the rest.":
    "Apruebe el trabajo y nuestro técnico se encargará del resto.",
  "Need service?": "¿Necesita servicio?",
  "Let’s get your system": "Pongamos su sistema",
  "working the way it should.": "a funcionar como debe.",
  "Tell us what’s happening and we’ll help you take the next step.":
    "Cuéntenos qué sucede y le ayudaremos con el siguiente paso.",
  "Residential & commercial": "Residencial y comercial",
  "HVAC services built around your needs.": "Servicios HVAC diseñados para sus necesidades.",
  "Straightforward diagnostics, thoughtful solutions and dependable workmanship for every season.":
    "Diagnósticos claros, soluciones prácticas y trabajo confiable en cada temporada.",
  "All services": "Todos los servicios",
  Service: "Servicio",
  "Request this service": "Solicitar este servicio",
  "Professional service": "Servicio profesional",
  "What we handle": "Lo que atendemos",
  "Practical solutions.": "Soluciones prácticas.",
  "Dependable results.": "Resultados confiables.",
  "Every appointment starts with a careful assessment. We explain what we find, provide clear recommendations and complete approved work with attention to detail.":
    "Cada visita comienza con una evaluación cuidadosa. Explicamos lo encontrado, presentamos recomendaciones claras y realizamos el trabajo aprobado con atención al detalle.",
  "About Dyett HVAC": "Acerca de Dyett HVAC",
  "Local expertise. Professional standards.": "Experiencia local. Estándares profesionales.",
  "We help property owners make confident decisions about their comfort, equipment and indoor environment.":
    "Ayudamos a los propietarios a tomar decisiones informadas sobre su confort, equipos y ambiente interior.",
  "Our approach": "Nuestro enfoque",
  "Good service starts with the right diagnosis.":
    "Un buen servicio comienza con el diagnóstico correcto.",
  "Honest recommendations": "Recomendaciones honestas",
  "Clear communication": "Comunicación clara",
  "Respect for your property": "Respeto por su propiedad",
  "Long-term solutions": "Soluciones duraderas",
  "Work with us": "Trabaje con nosotros",
  "Who we serve": "A quién atendemos",
  "Ready for home": "Listos para hogares",
  "and business.": "y negocios.",
  Homeowners: "Propietarios",
  "Commercial properties": "Propiedades comerciales",
  "Food-service businesses": "Negocios de alimentos",
  "Tell us how we can help.": "Cuéntenos cómo podemos ayudar.",
  "Request service, an installation estimate or a maintenance visit. We’ll follow up to discuss the next step.":
    "Solicite servicio, un presupuesto de instalación o una visita de mantenimiento. Le contactaremos para coordinar el siguiente paso.",
  "Reach our team": "Contacte a nuestro equipo",
  "Let’s get your comfort back on track.": "Recuperemos su confort.",
  "Prefer to speak with someone? Call during business hours for direct assistance.":
    "¿Prefiere hablar con alguien? Llame durante el horario comercial.",
  "Call us": "Llámenos",
  "Email us": "Escríbanos",
  Office: "Oficina",
  "Business hours": "Horario comercial",
  "Monday–Friday": "Lunes–Viernes",
  Saturday: "Sábado",
  Sunday: "Domingo",
  "Emergency service only": "Solo servicio de emergencia",
  "Service request": "Solicitud de servicio",
  "Schedule a visit": "Programe una visita",
  "First name": "Nombre",
  "Last name": "Apellido",
  Phone: "Teléfono",
  Email: "Correo",
  "Service needed": "Servicio requerido",
  "Select a service": "Seleccione un servicio",
  "Service address": "Dirección del servicio",
  "Street, city and ZIP code": "Calle, ciudad y código postal",
  "Tell us what your system is doing...": "Cuéntenos qué está haciendo su sistema...",
  "Request received": "Solicitud recibida",
  "Thank you. A member of the Dyett HVAC team will contact you soon.":
    "Gracias. Un miembro del equipo de Dyett HVAC se comunicará pronto.",
  "Send another request": "Enviar otra solicitud",
  "Book online": "Reservar en línea",
  "Choose your starting point.": "Elija por dónde comenzar.",
  "Select a service below, then send the details we need to confirm your appointment.":
    "Seleccione un servicio y envíenos los datos necesarios para confirmar su cita.",
  "Need urgent help or not sure what to book?": "¿Necesita ayuda urgente o no sabe qué reservar?",
  "Call 908-977-0722": "Llame al 908-977-0722",
  "HVAC Maintenance": "Mantenimiento HVAC",
  "HVAC Repair Visit": "Visita de reparación HVAC",
  "Installation Consultation": "Consulta de instalación",
  "60 min": "60 min",
  "Diagnostic visit": "Visita de diagnóstico",
  "On-site assessment": "Evaluación en el sitio",
  "Starting at": "Desde",
  "Request appointment": "Solicitar cita",
  "Explore service": "Ver servicio",
  "HVAC Installation": "Instalación HVAC",
  "Repair & Diagnostics": "Reparación y diagnóstico",
  "Preventive Maintenance": "Mantenimiento preventivo",
  "Heating Services": "Servicios de calefacción",
  "Commercial Refrigeration": "Refrigeración comercial",
  "Indoor Air Quality": "Calidad del aire interior",
  "Mini-Split Service": "Servicio de mini-split",
  "Walk-In Cooler / Freezer": "Cámaras frigoríficas y congeladores",
  "Thermostats & Controls": "Termostatos y controles",
  "Right-sized, efficient systems installed for lasting comfort.":
    "Sistemas eficientes y dimensionados correctamente para un confort duradero.",
  "Accurate troubleshooting and practical repairs—without guesswork.":
    "Diagnósticos precisos y reparaciones prácticas, sin adivinanzas.",
  "Protect performance, efficiency and the life of your equipment.":
    "Proteja el rendimiento, la eficiencia y la vida útil de su equipo.",
  "Safe, dependable heat for homes and commercial spaces.":
    "Calefacción segura y confiable para hogares y espacios comerciales.",
  "Reliable temperature control for the businesses that depend on it.":
    "Control de temperatura confiable para los negocios que dependen de él.",
  "Cleaner air, balanced humidity and healthier indoor spaces.":
    "Aire más limpio, humedad equilibrada y espacios interiores más saludables.",
  "Efficient, targeted comfort without traditional ductwork.":
    "Confort eficiente y localizado sin ductos tradicionales.",
  "Commercial cold storage service that keeps business moving.":
    "Servicio de almacenamiento refrigerado que mantiene su negocio en marcha.",
  "Smarter, more precise control over your comfort and energy use.":
    "Control más inteligente y preciso del confort y el consumo energético.",
  "Professional installation for homes and businesses, including central air, heat pumps and complete HVAC systems. Every system is carefully sized and installed for dependable performance.":
    "Instalación profesional para hogares y negocios, incluyendo aire central, bombas de calor y sistemas HVAC completos. Cada sistema se dimensiona e instala cuidadosamente.",
  "We identify electrical, mechanical, airflow and refrigeration problems using a methodical diagnostic process, then explain the right repair before work begins.":
    "Identificamos problemas eléctricos, mecánicos, de flujo de aire y refrigeración mediante un diagnóstico metódico, y explicamos la reparación antes de comenzar.",
  "Routine maintenance that catches small problems early and helps your system run efficiently through the hottest and coldest days of the year.":
    "Mantenimiento rutinario que detecta problemas a tiempo y mantiene el sistema eficiente durante todo el año.",
  "Installation, repair, diagnostics and maintenance for furnaces, boilers, heat pumps and other heating systems.":
    "Instalación, reparación, diagnóstico y mantenimiento de hornos, calderas, bombas de calor y otros sistemas.",
  "Commercial refrigeration installation, repair and maintenance for restaurants, markets, convenience stores and other local businesses.":
    "Instalación, reparación y mantenimiento de refrigeración comercial para restaurantes, mercados y otros negocios locales.",
  "Practical air quality and ventilation improvements designed around your property, comfort concerns and existing system.":
    "Mejoras prácticas de ventilación y calidad del aire diseñadas para su propiedad y sistema actual.",
  "Installation, repair, diagnostics and maintenance for single-zone and multi-zone ductless mini-split systems.":
    "Instalación, reparación, diagnóstico y mantenimiento de sistemas mini-split de una o varias zonas.",
  "Installation and service for walk-in coolers and freezers, including evaporators, condensing units and temperature controls.":
    "Instalación y servicio de cámaras frigoríficas y congeladores, incluyendo evaporadores, condensadores y controles.",
  "Installation, replacement and troubleshooting of thermostats, control boards, sensors, wiring and HVAC controls.":
    "Instalación, reemplazo y diagnóstico de termostatos, tarjetas, sensores, cableado y controles HVAC.",
  Precise: "Precisión",
  "diagnostics before repairs": "diagnóstico antes de reparar",
  "From the equipment outside to the air you feel indoors, every detail of your system plays a part in comfort, efficiency and peace of mind.":
    "Desde el equipo exterior hasta el aire interior, cada detalle influye en el confort, la eficiencia y su tranquilidad.",
  "Serving Elizabeth & surrounding communities": "Atendemos Elizabeth y comunidades cercanas",
  "DYETT HVAC PRO CORP provides professional HVAC and commercial refrigeration solutions focused on reliability, efficiency and quality workmanship.":
    "DYETT HVAC PRO CORP ofrece soluciones profesionales de climatización y refrigeración comercial enfocadas en confiabilidad, eficiencia y calidad.",
  "From a simple thermostat issue to a complete commercial system, we bring the same disciplined process: understand the problem, inspect the system, explain the options and do the work carefully.":
    "Desde un termostato hasta un sistema comercial completo, seguimos el mismo proceso: entender el problema, inspeccionar, explicar las opciones y trabajar con cuidado.",
  "HVAC, heating and refrigeration support tailored to the demands of each property.":
    "Servicio de climatización, calefacción y refrigeración adaptado a cada propiedad.",
  "Year-round comfort, efficient equipment and responsive repairs.":
    "Confort todo el año, equipos eficientes y reparaciones ágiles.",
  "Reliable systems that support employees, customers and operations.":
    "Sistemas confiables para empleados, clientes y operaciones.",
  "Critical refrigeration support for coolers, freezers and display systems.":
    "Soporte esencial para refrigeradores, congeladores y vitrinas.",
  "For urgent service, call": "Para servicio urgente, llame al",
  "Seasonal inspection, cleaning and system performance check.":
    "Inspección estacional, limpieza y verificación del rendimiento.",
  "Professional troubleshooting for heating and cooling issues.":
    "Diagnóstico profesional de problemas de calefacción y aire acondicionado.",
  "System evaluation, sizing discussion and installation estimate.":
    "Evaluación del sistema, dimensionamiento y presupuesto de instalación.",
  "Displayed rates are starting prices from the existing service menu. Final pricing depends on system condition, parts and approved scope of work.":
    "Las tarifas son precios iniciales. El precio final depende del estado del sistema, las piezas y el trabajo aprobado.",
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
}>({ language: "en", setLanguage: () => undefined, t: (text) => text });

function useLanguage() {
  return useContext(LanguageContext);
}

const photos = {
  hero: "https://images.unsplash.com/photo-1705579605238-24a90c8799c5?auto=format&fit=crop&w=1800&q=85",
  work: "https://images.unsplash.com/photo-1542248311-c20f103d6e5c?auto=format&fit=crop&w=1400&q=85",
  control:
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1200&q=85",
};

const servicePhotos: Record<string, string> = {
  "hvac-installation":
    "https://images.unsplash.com/photo-1705579604902-eb832f58bf85?auto=format&fit=crop&w=900&q=82",
  "repair-diagnostics":
    "https://images.unsplash.com/photo-1661745797378-7b204b476303?auto=format&fit=crop&w=900&q=82",
  "preventive-maintenance":
    "https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?auto=format&fit=crop&w=900&q=82",
  "heating-services":
    "https://images.unsplash.com/photo-1637345158353-40607a208d46?auto=format&fit=crop&w=900&q=82",
  "commercial-refrigeration":
    "https://images.unsplash.com/photo-1779721064963-f6d01f20f27e?auto=format&fit=crop&w=900&q=82",
  "indoor-air-quality":
    "https://images.unsplash.com/photo-1776279876113-514976038186?auto=format&fit=crop&w=900&q=82",
  "mini-split-service":
    "https://images.unsplash.com/photo-1761330440311-16e160cad236?auto=format&fit=crop&w=900&q=82",
  "walk-in-cooler-freezer":
    "https://images.unsplash.com/photo-1779721064963-f6d01f20f27e?auto=format&fit=crop&w=900&q=82",
  "thermostats-controls":
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=900&q=82",
};

type IconName =
  | "snow"
  | "wrench"
  | "shield"
  | "flame"
  | "cooler"
  | "air"
  | "split"
  | "building"
  | "thermostat"
  | "phone"
  | "clock"
  | "pin"
  | "check"
  | "arrow"
  | "menu"
  | "close";
type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: IconName;
};

const services: Service[] = [
  {
    slug: "hvac-installation",
    number: "01",
    title: "HVAC Installation",
    short: "Right-sized, efficient systems installed for lasting comfort.",
    description:
      "Professional installation for homes and businesses, including central air, heat pumps and complete HVAC systems. Every system is carefully sized and installed for dependable performance.",
    bullets: ["Central air systems", "Heat pumps", "System replacement", "New construction"],
    icon: "snow",
  },
  {
    slug: "repair-diagnostics",
    number: "02",
    title: "Repair & Diagnostics",
    short: "Accurate troubleshooting and practical repairs—without guesswork.",
    description:
      "We identify electrical, mechanical, airflow and refrigeration problems using a methodical diagnostic process, then explain the right repair before work begins.",
    bullets: [
      "No-cool and no-heat calls",
      "Electrical diagnostics",
      "Airflow issues",
      "Emergency repairs",
    ],
    icon: "wrench",
  },
  {
    slug: "preventive-maintenance",
    number: "03",
    title: "Preventive Maintenance",
    short: "Protect performance, efficiency and the life of your equipment.",
    description:
      "Routine maintenance that catches small problems early and helps your system run efficiently through the hottest and coldest days of the year.",
    bullets: ["Coil cleaning", "Filter replacement", "Electrical checks", "Performance testing"],
    icon: "shield",
  },
  {
    slug: "heating-services",
    number: "04",
    title: "Heating Services",
    short: "Safe, dependable heat for homes and commercial spaces.",
    description:
      "Installation, repair, diagnostics and maintenance for furnaces, boilers, heat pumps and other heating systems.",
    bullets: ["Furnaces", "Boilers", "Heat pumps", "Seasonal tune-ups"],
    icon: "flame",
  },
  {
    slug: "commercial-refrigeration",
    number: "05",
    title: "Commercial Refrigeration",
    short: "Reliable temperature control for the businesses that depend on it.",
    description:
      "Commercial refrigeration installation, repair and maintenance for restaurants, markets, convenience stores and other local businesses.",
    bullets: [
      "Reach-in refrigerators",
      "Display cases",
      "Condensing units",
      "Temperature controls",
    ],
    icon: "cooler",
  },
  {
    slug: "indoor-air-quality",
    number: "06",
    title: "Indoor Air Quality",
    short: "Cleaner air, balanced humidity and healthier indoor spaces.",
    description:
      "Practical air quality and ventilation improvements designed around your property, comfort concerns and existing system.",
    bullets: ["Air filtration", "Humidity control", "Ventilation", "Ductwork solutions"],
    icon: "air",
  },
  {
    slug: "mini-split-service",
    number: "07",
    title: "Mini-Split Service",
    short: "Efficient, targeted comfort without traditional ductwork.",
    description:
      "Installation, repair, diagnostics and maintenance for single-zone and multi-zone ductless mini-split systems.",
    bullets: ["New installations", "Multi-zone systems", "Leak diagnostics", "Deep cleaning"],
    icon: "split",
  },
  {
    slug: "walk-in-cooler-freezer",
    number: "08",
    title: "Walk-In Cooler / Freezer",
    short: "Commercial cold storage service that keeps business moving.",
    description:
      "Installation and service for walk-in coolers and freezers, including evaporators, condensing units and temperature controls.",
    bullets: [
      "Emergency repair",
      "System installation",
      "Controls and sensors",
      "Preventive service",
    ],
    icon: "building",
  },
  {
    slug: "thermostats-controls",
    number: "09",
    title: "Thermostats & Controls",
    short: "Smarter, more precise control over your comfort and energy use.",
    description:
      "Installation, replacement and troubleshooting of thermostats, control boards, sensors, wiring and HVAC controls.",
    bullets: ["Smart thermostats", "Control boards", "Wiring and sensors", "System integration"],
    icon: "thermostat",
  },
];

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    snow: (
      <>
        <path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11" />
        <path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a4.3 4.3 0 0 0-5.8 5.8L3 18v3h3l5.9-5.9a4.3 4.3 0 0 0 5.8-5.8l-2.8 2.8-3-3z" />
    ),
    shield: (
      <>
        <path d="M12 3 4.5 6v5.4c0 4.5 3.1 7.8 7.5 9.6 4.4-1.8 7.5-5.1 7.5-9.6V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    flame: (
      <path d="M12 22c4 0 7-2.8 7-7 0-3.6-2.1-6.6-5.7-10.8.1 3.2-1.4 4.6-2.7 5.6-.2-2-1.4-3.5-2.2-4.3C7.8 9.8 5 11.3 5 15c0 4.2 3 7 7 7Z" />
    ),
    cooler: (
      <>
        <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
        <path d="M5 10h14M15.5 6v1.5M15.5 13.5V16" />
      </>
    ),
    air: (
      <>
        <path d="M3 7h11c2.8 0 2.8-4 0-4-1.2 0-2 .7-2.2 1.4M3 12h16c3 0 3 4.5 0 4.5-1.3 0-2.1-.8-2.3-1.6M3 17h8" />
      </>
    ),
    split: (
      <>
        <rect x="3" y="4" width="18" height="8" rx="2" />
        <path d="M7 8h10M8 16c0 2-1 3-2 4M12 16v4M16 16c0 2 1 3 2 4" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5h11v16M15 9h5v12M8 9h3M8 13h3M8 17h3" />
      </>
    ),
    thermostat: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="6" />
        <circle cx="12" cy="9" r="2.5" />
        <path d="M9 15h6M10 18h4" />
      </>
    ),
    phone: (
      <path d="M7.2 3H4.4C3.6 3 3 3.7 3 4.5 3 13.6 10.4 21 19.5 21c.8 0 1.5-.6 1.5-1.4v-2.8l-4-1.1-1.2 2a15.5 15.5 0 0 1-9.5-9.5l2-1.2z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <div className="brand">
      <img src="/dyett-logo.png" alt="Dyett HVAC Pro Corp." />
    </div>
  );
}
function go(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
function Link({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        go(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="language-selector">
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        aria-label="Language"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </label>
  );
}

function Header({ path }: { path: string }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"services" | "about" | null>(null);
  const [menusDismissed, setMenusDismissed] = useState(false);
  const close = () => {
    setOpen(false);
    setMobileSubmenu(null);
    setMenusDismissed(true);
  };
  return (
    <>
      <div className="utility">
        <div className="shell utility-inner">
          <span>
            <Icon name="pin" size={15} /> {t("Serving Elizabeth, NJ & surrounding areas")}
          </span>
          <div>
            <span>
              <Icon name="clock" size={15} /> {t("Mon–Fri 8am–6pm")}
            </span>
            <a href="tel:+19089770722">908-977-0722</a>
          </div>
        </div>
      </div>
      <header>
        <div className="shell header-inner">
          <Link to="/" onClick={close}>
            <Brand />
          </Link>
          <nav
            className={`${open ? "open" : ""} ${menusDismissed ? "menus-dismissed" : ""}`}
            aria-label="Main navigation"
          >
            <Link to="/" onClick={close} className={`nav-link ${path === "/" ? "active" : ""}`}>
              {t("Home")}
            </Link>
            <div
              className={`nav-group ${mobileSubmenu === "services" ? "mobile-expanded" : ""}`}
              onMouseMove={() => setMenusDismissed(false)}
            >
              <div className="nav-group-heading">
                <Link
                  to="/services"
                  onClick={close}
                  className={`nav-link nav-trigger ${path.startsWith("/services") ? "active" : ""}`}
                >
                  {t("Services")} <span className="nav-chevron" aria-hidden />
                </Link>
                <button
                  type="button"
                  className="nav-submenu-toggle"
                  aria-label={
                    mobileSubmenu === "services" ? "Close services menu" : "Open services menu"
                  }
                  aria-expanded={mobileSubmenu === "services"}
                  onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                >
                  <span className="nav-chevron" aria-hidden />
                </button>
              </div>
              <div className="mega-menu">
                <div className="mega-intro">
                  <span>{t("Complete comfort care")}</span>
                  <h3>{t("How can we help?")}</h3>
                  <p>{t("Explore residential HVAC and commercial refrigeration services.")}</p>
                  <Link to="/services" onClick={close} className="mega-all">
                    {t("View all services")} <Icon name="arrow" size={17} />
                  </Link>
                </div>
                <div className="mega-service-grid">
                  {services.map((service) => (
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={close}
                      className="mega-service"
                      key={service.slug}
                    >
                      <span>
                        <Icon name={service.icon} size={20} />
                      </span>
                      <div>
                        <b>{t(service.title)}</b>
                        <small>{t(service.short)}</small>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`nav-group nav-group-small ${mobileSubmenu === "about" ? "mobile-expanded" : ""}`}
              onMouseMove={() => setMenusDismissed(false)}
            >
              <div className="nav-group-heading">
                <Link
                  to="/about"
                  onClick={close}
                  className={`nav-link nav-trigger ${path === "/about" ? "active" : ""}`}
                >
                  {t("About")} <span className="nav-chevron" aria-hidden />
                </Link>
                <button
                  type="button"
                  className="nav-submenu-toggle"
                  aria-label={mobileSubmenu === "about" ? "Close about menu" : "Open about menu"}
                  aria-expanded={mobileSubmenu === "about"}
                  onClick={() => setMobileSubmenu(mobileSubmenu === "about" ? null : "about")}
                >
                  <span className="nav-chevron" aria-hidden />
                </button>
              </div>
              <div className="mini-menu">
                <Link to="/about" onClick={close}>
                  <b>{t("About Dyett")}</b>
                  <small>{t("Our approach and standards")}</small>
                </Link>
                <Link to="/contact" onClick={close}>
                  <b>{t("Contact our team")}</b>
                  <small>{t("Phone, email and office details")}</small>
                </Link>
                <Link to="/booking" onClick={close}>
                  <b>{t("Book online")}</b>
                  <small>{t("Choose a service starting point")}</small>
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={close}
              className={`nav-link ${path === "/contact" ? "active" : ""}`}
            >
              {t("Contact")}
            </Link>
            <Link
              to="/booking"
              onClick={close}
              className={`nav-link ${path === "/booking" ? "active" : ""}`}
            >
              {t("Book online")}
            </Link>
          </nav>
          <LanguageSelector />
          <Link to="/contact" className="button header-cta">
            {t("Request service")} <Icon name="arrow" size={17} />
          </Link>
          <button
            className="menu-button"
            onClick={() => {
              setOpen(!open);
              setMobileSubmenu(null);
              setMenusDismissed(false);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </header>
    </>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>
            Reliable HVAC and commercial refrigeration service built around skilled work, clear
            communication and lasting comfort.
          </p>
        </div>
        <div>
          <h4>{t("Explore")}</h4>
          <Link to="/services">{t("Services")}</Link>
          <Link to="/about">{t("About us")}</Link>
          <Link to="/booking">{t("Book online")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
        </div>
        <div>
          <h4>{t("Contact")}</h4>
          <a href="tel:+19089770722">908-977-0722</a>
          <a href="mailto:office@dyetthvac.com">office@dyetthvac.com</a>
          <span>
            162 Elmora Avenue Ste 501
            <br />
            Elizabeth, New Jersey 07202
          </span>
        </div>
        <div>
          <h4>{t("Hours")}</h4>
          <span>{t("Mon–Fri: 8am–6pm")}</span>
          <span>{t("Saturday: 8am–4pm")}</span>
          <span>{t("Sunday: Emergency only")}</span>
        </div>
      </div>
      <div className="shell copyright">
        <span>© 2026 Dyett HVAC Pro Corp.</span>
        <span>{t("Residential & commercial service")}</span>
      </div>
    </footer>
  );
}
function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
function ServiceCard({ service }: { service: Service }) {
  const { t } = useLanguage();
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-photo">
        <img src={servicePhotos[service.slug]} alt="" loading="lazy" />
        <div className="service-icon">
          <Icon name={service.icon} size={27} />
        </div>
      </div>
      <span className="service-number">{service.number}</span>
      <h3>{t(service.title)}</h3>
      <p>{t(service.short)}</p>
      <span className="text-link">
        {t("Explore service")} <Icon name="arrow" size={18} />
      </span>
    </Link>
  );
}

function Home() {
  const { t } = useLanguage();
  return (
    <main>
      <section className="hero">
        <img src={photos.hero} alt="HVAC technician servicing an outdoor air conditioning unit" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <Eyebrow light>{t("HVAC & refrigeration experts")}</Eyebrow>
          <h1>
            {t("Comfort done right.")}
            <br />
            <em>{t("Service you can trust.")}</em>
          </h1>
          <p>
            {t(
              "Professional heating, cooling and commercial refrigeration service for homes and businesses across Elizabeth, NJ.",
            )}
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button">
              {t("Request service")} <Icon name="arrow" size={18} />
            </Link>
            <a className="button button-ghost" href="tel:+19089770722">
              <Icon name="phone" size={18} /> 908-977-0722
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Icon name="check" size={17} /> {t("Transparent estimates")}
            </span>
            <span>
              <Icon name="check" size={17} /> {t("Skilled workmanship")}
            </span>
            <span>
              <Icon name="check" size={17} /> {t("Residential & commercial")}
            </span>
          </div>
        </div>
        <div className="hero-badge">
          <b>{t("Local service")}</b>
          <span>{t("Elizabeth, New Jersey")}</span>
        </div>
      </section>
      <section className="services-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>{t("What we do")}</Eyebrow>
              <h2>
                {t("Complete comfort care,")}
                <br />
                {t("under one roof.")}
              </h2>
            </div>
            <div>
              <p>
                {t(
                  "From urgent repairs to planned installations, we bring practical expertise to every residential and commercial system.",
                )}
              </p>
              <Link to="/services" className="text-link">
                {t("View all services")} <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((s) => (
              <ServiceCard service={s} key={s.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="why-section section">
        <div className="shell split-layout">
          <div className="photo-stack">
            <img src={photos.work} alt="Technician connecting service equipment to an HVAC unit" />
            <div className="experience-card">
              <strong>{t("Precise")}</strong>
              <span>{t("diagnostics before repairs")}</span>
            </div>
          </div>
          <div className="why-copy">
            <Eyebrow>{t("Why Dyett")}</Eyebrow>
            <h2>
              {t("Clear answers.")}
              <br />
              {t("Quality work.")}
            </h2>
            <p className="lead">
              {t(
                "We believe dependable service starts with listening, diagnosing accurately and explaining your options in plain language.",
              )}
            </p>
            {[
              ["01", "Accurate diagnostics", "We identify the root cause—not just the symptom."],
              ["02", "Upfront recommendations", "Clear options and estimates before work starts."],
              ["03", "Professional workmanship", "Careful, code-conscious work built to perform."],
            ].map(([n, title, description]) => (
              <div className="reason" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(description)}</p>
                </div>
              </div>
            ))}
            <Link to="/about" className="button button-dark">
              {t("Meet Dyett HVAC")} <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="work-gallery section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>{t("Built for real life")}</Eyebrow>
              <h2>
                {t("Comfort where")}
                <br />
                {t("it matters most.")}
              </h2>
            </div>
            <div>
              <p>
                {t(
                  "From the equipment outside to the air you feel indoors, every detail of your system plays a part in comfort, efficiency and peace of mind.",
                )}
              </p>
            </div>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-main">
              <img
                src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?auto=format&fit=crop&w=1400&q=84"
                alt="HVAC professionals working on rooftop equipment"
                loading="lazy"
              />
              <figcaption>{t("Commercial systems")}</figcaption>
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1762341123870-d706f257a12e?auto=format&fit=crop&w=900&q=84"
                alt="Modern ductless air conditioning system"
                loading="lazy"
              />
              <figcaption>{t("Home comfort")}</figcaption>
            </figure>
            <figure>
              <img src={photos.control} alt="Modern smart thermostat" loading="lazy" />
              <figcaption>{t("Smart controls")}</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <Process />
      <CTA />
    </main>
  );
}
function Process() {
  const { t } = useLanguage();
  return (
    <section className="process section">
      <div className="shell">
        <Eyebrow light>{t("Simple process")}</Eyebrow>
        <h2>{t("Getting comfortable is easy.")}</h2>
        <div className="process-grid">
          {[
            ["01", "Tell us what’s happening", "Call or send a short service request online."],
            [
              "02",
              "We inspect & explain",
              "We diagnose the issue and walk you through your options.",
            ],
            ["03", "We get it done right", "Approve the work and our technician handles the rest."],
          ].map(([n, title, description]) => (
            <div className="process-step" key={n}>
              <b>{n}</b>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  const { t } = useLanguage();
  return (
    <section className="page-hero">
      <div className="shell">
        <Eyebrow light>{t(eyebrow)}</Eyebrow>
        <h1>{t(title)}</h1>
        <p>{t(text)}</p>
      </div>
    </section>
  );
}
function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Residential & commercial"
        title="HVAC services built around your needs."
        text="Straightforward diagnostics, thoughtful solutions and dependable workmanship for every season."
      />
      <section className="section services-page">
        <div className="shell">
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard service={s} key={s.slug} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function ServiceDetail({ service }: { service: Service }) {
  const { t } = useLanguage();
  return (
    <main>
      <section className="detail-hero">
        <div className="shell detail-grid">
          <div>
            <Link to="/services" className="back-link">
              ← {t("All services")}
            </Link>
            <div className="service-icon large">
              <Icon name={service.icon} size={34} />
            </div>
            <Eyebrow>
              {service.number} / {t("Service")}
            </Eyebrow>
            <h1>{t(service.title)}</h1>
            <p>{t(service.description)}</p>
            <div className="hero-actions">
              <Link to={`/contact?service=${service.slug}`} className="button">
                {t("Request this service")} <Icon name="arrow" size={18} />
              </Link>
              <a href="tel:+19089770722" className="phone-link">
                Call 908-977-0722
              </a>
            </div>
          </div>
          <div className="detail-image">
            <img src={servicePhotos[service.slug]} alt={`${service.title} service`} />
            <div>
              <Icon name="shield" size={24} />
              <span>
                <b>{t("Professional service")}</b>
                {t("Residential & commercial")}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section detail-body">
        <div className="shell detail-body-grid">
          <div>
            <Eyebrow>{t("What we handle")}</Eyebrow>
            <h2>
              {t("Practical solutions.")}
              <br />
              {t("Dependable results.")}
            </h2>
            <p>
              {t(
                "Every appointment starts with a careful assessment. We explain what we find, provide clear recommendations and complete approved work with attention to detail.",
              )}
            </p>
          </div>
          <div className="bullet-panel">
            {service.bullets.map((b) => (
              <div key={b}>
                <Icon name="check" size={19} />
                <span>{t(b)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <main>
      <PageHero
        eyebrow="About Dyett HVAC"
        title="Local expertise. Professional standards."
        text="We help property owners make confident decisions about their comfort, equipment and indoor environment."
      />
      <section className="section">
        <div className="shell split-layout about-layout">
          <div className="about-photo">
            <img src={photos.hero} alt="Dyett HVAC technician at work" />
            <div className="photo-label">{t("Serving Elizabeth & surrounding communities")}</div>
          </div>
          <div className="why-copy">
            <Eyebrow>{t("Our approach")}</Eyebrow>
            <h2>{t("Good service starts with the right diagnosis.")}</h2>
            <p className="lead">
              {t(
                "DYETT HVAC PRO CORP provides professional HVAC and commercial refrigeration solutions focused on reliability, efficiency and quality workmanship.",
              )}
            </p>
            <p>
              {t(
                "From a simple thermostat issue to a complete commercial system, we bring the same disciplined process: understand the problem, inspect the system, explain the options and do the work carefully.",
              )}
            </p>
            <div className="values">
              {[
                "Honest recommendations",
                "Clear communication",
                "Respect for your property",
                "Long-term solutions",
              ].map((v) => (
                <span key={v}>
                  <Icon name="check" />
                  {t(v)}
                </span>
              ))}
            </div>
            <Link to="/contact" className="button button-dark">
              {t("Work with us")} <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="process section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow light>{t("Who we serve")}</Eyebrow>
              <h2>
                {t("Ready for home")}
                <br />
                {t("and business.")}
              </h2>
            </div>
            <p>
              {t(
                "HVAC, heating and refrigeration support tailored to the demands of each property.",
              )}
            </p>
          </div>
          <div className="audience-grid">
            {[
              [
                "thermostat",
                "Homeowners",
                "Year-round comfort, efficient equipment and responsive repairs.",
              ],
              [
                "building",
                "Commercial properties",
                "Reliable systems that support employees, customers and operations.",
              ],
              [
                "cooler",
                "Food-service businesses",
                "Critical refrigeration support for coolers, freezers and display systems.",
              ],
            ].map(([i, title, description]) => (
              <div key={title}>
                <Icon name={i as IconName} size={32} />
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const requestedService = new URLSearchParams(window.location.search).get("service") || "";
  const selectedService = services.some((service) => service.slug === requestedService)
    ? requestedService
    : "";
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  if (sent)
    return (
      <div className="success">
        <span>
          <Icon name="check" size={28} />
        </span>
        <h3>{t("Request received")}</h3>
        <p>{t("Thank you. A member of the Dyett HVAC team will contact you soon.")}</p>
        <button className="text-link" onClick={() => setSent(false)}>
          {t("Send another request")}
        </button>
      </div>
    );
  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <label>
          {t("First name")}
          <input required name="firstName" />
        </label>
        <label>
          {t("Last name")}
          <input required name="lastName" />
        </label>
      </div>
      <div className="form-row">
        <label>
          {t("Phone")}
          <input required name="phone" type="tel" />
        </label>
        <label>
          {t("Email")}
          <input required name="email" type="email" />
        </label>
      </div>
      <label>
        {t("Service needed")}
        <select required defaultValue={selectedService}>
          <option value="" disabled>
            {t("Select a service")}
          </option>
          {services.map((s) => (
            <option value={s.slug} key={s.slug}>
              {t(s.title)}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t("Service address")}
        <input required name="address" placeholder={t("Street, city and ZIP code")} />
      </label>
      <label>
        {t("How can we help?")}
        <textarea
          required
          name="message"
          rows={4}
          placeholder={t("Tell us what your system is doing...")}
        />
      </label>
      <button className="button" type="submit">
        {t("Request service")} <Icon name="arrow" size={18} />
      </button>
      <small>
        {t("For urgent service, call")} <a href="tel:+19089770722">908-977-0722</a>.
      </small>
    </form>
  );
}
function Contact() {
  const { t } = useLanguage();
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Tell us how we can help."
        text="Request service, an installation estimate or a maintenance visit. We’ll follow up to discuss the next step."
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-info">
            <Eyebrow>{t("Reach our team")}</Eyebrow>
            <h2>{t("Let’s get your comfort back on track.")}</h2>
            <p>
              {t("Prefer to speak with someone? Call during business hours for direct assistance.")}
            </p>
            <a href="tel:+19089770722" className="contact-line">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <small>{t("Call us")}</small>
                <b>908-977-0722</b>
              </div>
            </a>
            <a href="mailto:office@dyetthvac.com" className="contact-line">
              <span>@</span>
              <div>
                <small>{t("Email us")}</small>
                <b>office@dyetthvac.com</b>
              </div>
            </a>
            <div className="contact-line">
              <span>
                <Icon name="pin" />
              </span>
              <div>
                <small>{t("Office")}</small>
                <b>
                  162 Elmora Avenue Ste 501
                  <br />
                  Elizabeth, New Jersey 07202
                </b>
              </div>
            </div>
            <div className="hours">
              <h3>{t("Business hours")}</h3>
              <p>
                <span>{t("Monday–Friday")}</span>
                <b>8:00am–6:00pm</b>
              </p>
              <p>
                <span>{t("Saturday")}</span>
                <b>8:00am–4:00pm</b>
              </p>
              <p>
                <span>{t("Sunday")}</span>
                <b>{t("Emergency service only")}</b>
              </p>
            </div>
          </div>
          <div className="form-card">
            <div>
              <span>{t("Service request")}</span>
              <h2>{t("Schedule a visit")}</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
function Booking() {
  const { t } = useLanguage();
  const offers = [
    [
      "HVAC Maintenance",
      "$150",
      "60 min",
      "Seasonal inspection, cleaning and system performance check.",
      "preventive-maintenance",
    ],
    [
      "HVAC Repair Visit",
      "$200",
      "Diagnostic visit",
      "Professional troubleshooting for heating and cooling issues.",
      "repair-diagnostics",
    ],
    [
      "Installation Consultation",
      "$250",
      "On-site assessment",
      "System evaluation, sizing discussion and installation estimate.",
      "hvac-installation",
    ],
  ];
  return (
    <main>
      <PageHero
        eyebrow="Book online"
        title="Choose your starting point."
        text="Select a service below, then send the details we need to confirm your appointment."
      />
      <section className="section booking-section">
        <div className="shell">
          <div className="booking-note">
            <Icon name="phone" />
            <span>{t("Need urgent help or not sure what to book?")}</span>
            <a href="tel:+19089770722">{t("Call 908-977-0722")}</a>
          </div>
          <div className="booking-grid">
            {offers.map(([title, price, time, desc, slug]) => (
              <div className="booking-card" key={title}>
                <div className="service-icon">
                  <Icon name={services.find((s) => s.slug === slug)?.icon || "wrench"} />
                </div>
                <small>{t(time)}</small>
                <h2>{t(title)}</h2>
                <p>{t(desc)}</p>
                <div className="price">
                  <span>{t("Starting at")}</span>
                  <b>{price}</b>
                </div>
                <Link to={`/contact?service=${slug}`} className="button">
                  {t("Request appointment")} <Icon name="arrow" size={18} />
                </Link>
              </div>
            ))}
          </div>
          <p className="booking-disclaimer">
            {t(
              "Displayed rates are starting prices from the existing service menu. Final pricing depends on system condition, parts and approved scope of work.",
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
function CTA() {
  const { t } = useLanguage();
  return (
    <section className="cta">
      <div className="shell cta-inner">
        <div>
          <Eyebrow light>{t("Need service?")}</Eyebrow>
          <h2>
            {t("Let’s get your system")}
            <br />
            {t("working the way it should.")}
          </h2>
        </div>
        <div>
          <p>{t("Tell us what’s happening and we’ll help you take the next step.")}</p>
          <div>
            <Link to="/contact" className="button button-light">
              {t("Request service")} <Icon name="arrow" size={18} />
            </Link>
            <a href="tel:+19089770722" className="cta-phone">
              <Icon name="phone" size={19} /> 908-977-0722
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("dyett-language");
    return saved === "es" ? "es" : "en";
  });
  const [path, setPath] = useState(window.location.pathname);
  const t = (text: string) => (language === "es" ? spanish[text] || text : text);
  useEffect(() => {
    window.localStorage.setItem("dyett-language", language);
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    const update = () => {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  useEffect(() => {
    const pageName =
      path === "/"
        ? "Home"
        : path.startsWith("/services/")
          ? services.find((service) => path.endsWith(service.slug))?.title || "Service"
          : path.slice(1).replace(/^\w/, (letter) => letter.toUpperCase());
    document.title = `${t(pageName)} | Dyett HVAC Pro Corp.`;
  }, [path, language]);
  let page: ReactNode;
  if (path === "/") page = <Home />;
  else if (path === "/services") page = <ServicesPage />;
  else if (path === "/about") page = <About />;
  else if (path === "/contact") page = <Contact />;
  else if (path === "/booking") page = <Booking />;
  else if (path.startsWith("/services/")) {
    const service = services.find((s) => s.slug === path.split("/").pop());
    page = service ? <ServiceDetail service={service} /> : <ServicesPage />;
  } else page = <Home />;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <Header path={path} />
      {page}
      <Footer />
      <a className="mobile-call" href="tel:+19089770722">
        <Icon name="phone" size={19} /> {language === "es" ? "Llamar ahora" : "Call now"}
      </a>
    </LanguageContext.Provider>
  );
}
