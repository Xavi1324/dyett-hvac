import { FormEvent, ReactNode, useEffect, useState } from "react";

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

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <div className="utility">
        <div className="shell utility-inner">
          <span>
            <Icon name="pin" size={15} /> Serving Elizabeth, NJ & surrounding areas
          </span>
          <div>
            <span>
              <Icon name="clock" size={15} /> Mon–Fri 8am–6pm
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
          <nav className={open ? "open" : ""} aria-label="Main navigation">
            <Link to="/" onClick={close} className={path === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/services"
              onClick={close}
              className={path.startsWith("/services") ? "active" : ""}
            >
              Services
            </Link>
            <Link to="/about" onClick={close} className={path === "/about" ? "active" : ""}>
              About
            </Link>
            <Link to="/contact" onClick={close} className={path === "/contact" ? "active" : ""}>
              Contact
            </Link>
            <Link to="/booking" onClick={close} className={path === "/booking" ? "active" : ""}>
              Book online
            </Link>
          </nav>
          <Link to="/contact" className="button header-cta">
            Request service <Icon name="arrow" size={17} />
          </Link>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
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
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/about">About us</Link>
          <Link to="/booking">Book online</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+19089770722">908-977-0722</a>
          <a href="mailto:office@dyetthvac.com">office@dyetthvac.com</a>
          <span>
            355 S Broad St
            <br />
            Elizabeth, NJ
          </span>
        </div>
        <div>
          <h4>Hours</h4>
          <span>Mon–Fri: 8am–6pm</span>
          <span>Saturday: 8am–4pm</span>
          <span>Sunday: Emergency only</span>
        </div>
      </div>
      <div className="shell copyright">
        <span>© 2026 Dyett HVAC Pro Corp.</span>
        <span>Residential & commercial service</span>
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
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card-photo">
        <img src={servicePhotos[service.slug]} alt="" loading="lazy" />
        <div className="service-icon">
          <Icon name={service.icon} size={27} />
        </div>
      </div>
      <span className="service-number">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="text-link">
        Explore service <Icon name="arrow" size={18} />
      </span>
    </Link>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <img src={photos.hero} alt="HVAC technician servicing an outdoor air conditioning unit" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <Eyebrow light>HVAC & refrigeration experts</Eyebrow>
          <h1>
            Comfort done right.
            <br />
            <em>Service you can trust.</em>
          </h1>
          <p>
            Professional heating, cooling and commercial refrigeration service for homes and
            businesses across Elizabeth, NJ.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button">
              Request service <Icon name="arrow" size={18} />
            </Link>
            <a className="button button-ghost" href="tel:+19089770722">
              <Icon name="phone" size={18} /> 908-977-0722
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Icon name="check" size={17} /> Transparent estimates
            </span>
            <span>
              <Icon name="check" size={17} /> Skilled workmanship
            </span>
            <span>
              <Icon name="check" size={17} /> Residential & commercial
            </span>
          </div>
        </div>
        <div className="hero-badge">
          <b>Local service</b>
          <span>Elizabeth, New Jersey</span>
        </div>
      </section>
      <section className="services-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2>
                Complete comfort care,
                <br />
                under one roof.
              </h2>
            </div>
            <div>
              <p>
                From urgent repairs to planned installations, we bring practical expertise to every
                residential and commercial system.
              </p>
              <Link to="/services" className="text-link">
                View all services <Icon name="arrow" size={18} />
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
              <strong>Precise</strong>
              <span>diagnostics before repairs</span>
            </div>
          </div>
          <div className="why-copy">
            <Eyebrow>Why Dyett</Eyebrow>
            <h2>
              Clear answers.
              <br />
              Quality work.
            </h2>
            <p className="lead">
              We believe dependable service starts with listening, diagnosing accurately and
              explaining your options in plain language.
            </p>
            {[
              ["01", "Accurate diagnostics", "We identify the root cause—not just the symptom."],
              ["02", "Upfront recommendations", "Clear options and estimates before work starts."],
              ["03", "Professional workmanship", "Careful, code-conscious work built to perform."],
            ].map(([n, t, d]) => (
              <div className="reason" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
            <Link to="/about" className="button button-dark">
              Meet Dyett HVAC <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="work-gallery section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>Built for real life</Eyebrow>
              <h2>
                Comfort where
                <br />
                it matters most.
              </h2>
            </div>
            <div>
              <p>
                From the equipment outside to the air you feel indoors, every detail of your system
                plays a part in comfort, efficiency and peace of mind.
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
              <figcaption>Commercial systems</figcaption>
            </figure>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1762341123870-d706f257a12e?auto=format&fit=crop&w=900&q=84"
                alt="Modern ductless air conditioning system"
                loading="lazy"
              />
              <figcaption>Home comfort</figcaption>
            </figure>
            <figure>
              <img src={photos.control} alt="Modern smart thermostat" loading="lazy" />
              <figcaption>Smart controls</figcaption>
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
  return (
    <section className="process section">
      <div className="shell">
        <Eyebrow light>Simple process</Eyebrow>
        <h2>Getting comfortable is easy.</h2>
        <div className="process-grid">
          {[
            ["01", "Tell us what’s happening", "Call or send a short service request online."],
            [
              "02",
              "We inspect & explain",
              "We diagnose the issue and walk you through your options.",
            ],
            ["03", "We get it done right", "Approve the work and our technician handles the rest."],
          ].map(([n, t, d]) => (
            <div className="process-step" key={n}>
              <b>{n}</b>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="shell">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
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
  return (
    <main>
      <section className="detail-hero">
        <div className="shell detail-grid">
          <div>
            <Link to="/services" className="back-link">
              ← All services
            </Link>
            <div className="service-icon large">
              <Icon name={service.icon} size={34} />
            </div>
            <Eyebrow>{service.number} / Service</Eyebrow>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="hero-actions">
              <Link to="/contact" className="button">
                Request this service <Icon name="arrow" size={18} />
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
                <b>Professional service</b>Residential & commercial
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section detail-body">
        <div className="shell detail-body-grid">
          <div>
            <Eyebrow>What we handle</Eyebrow>
            <h2>
              Practical solutions.
              <br />
              Dependable results.
            </h2>
            <p>
              Every appointment starts with a careful assessment. We explain what we find, provide
              clear recommendations and complete approved work with attention to detail.
            </p>
          </div>
          <div className="bullet-panel">
            {service.bullets.map((b) => (
              <div key={b}>
                <Icon name="check" size={19} />
                <span>{b}</span>
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
            <div className="photo-label">Serving Elizabeth & surrounding communities</div>
          </div>
          <div className="why-copy">
            <Eyebrow>Our approach</Eyebrow>
            <h2>Good service starts with the right diagnosis.</h2>
            <p className="lead">
              DYETT HVAC PRO CORP provides professional HVAC and commercial refrigeration solutions
              focused on reliability, efficiency and quality workmanship.
            </p>
            <p>
              From a simple thermostat issue to a complete commercial system, we bring the same
              disciplined process: understand the problem, inspect the system, explain the options
              and do the work carefully.
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
                  {v}
                </span>
              ))}
            </div>
            <Link to="/contact" className="button button-dark">
              Work with us <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="process section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow light>Who we serve</Eyebrow>
              <h2>
                Ready for home
                <br />
                and business.
              </h2>
            </div>
            <p>HVAC, heating and refrigeration support tailored to the demands of each property.</p>
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
            ].map(([i, t, d]) => (
              <div key={t}>
                <Icon name={i as IconName} size={32} />
                <h3>{t}</h3>
                <p>{d}</p>
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
  const [sent, setSent] = useState(false);
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
        <h3>Request received</h3>
        <p>Thank you. A member of the Dyett HVAC team will contact you soon.</p>
        <button className="text-link" onClick={() => setSent(false)}>
          Send another request
        </button>
      </div>
    );
  return (
    <form onSubmit={submit}>
      <div className="form-row">
        <label>
          First name
          <input required name="firstName" />
        </label>
        <label>
          Last name
          <input required name="lastName" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input required name="phone" type="tel" />
        </label>
        <label>
          Email
          <input required name="email" type="email" />
        </label>
      </div>
      <label>
        Service needed
        <select required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </label>
      <label>
        Service address
        <input required name="address" placeholder="Street, city and ZIP code" />
      </label>
      <label>
        How can we help?
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell us what your system is doing..."
        />
      </label>
      <button className="button" type="submit">
        Request service <Icon name="arrow" size={18} />
      </button>
      <small>
        For urgent service, call <a href="tel:+19089770722">908-977-0722</a>.
      </small>
    </form>
  );
}
function Contact() {
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
            <Eyebrow>Reach our team</Eyebrow>
            <h2>Let’s get your comfort back on track.</h2>
            <p>Prefer to speak with someone? Call during business hours for direct assistance.</p>
            <a href="tel:+19089770722" className="contact-line">
              <span>
                <Icon name="phone" />
              </span>
              <div>
                <small>Call us</small>
                <b>908-977-0722</b>
              </div>
            </a>
            <a href="mailto:office@dyetthvac.com" className="contact-line">
              <span>@</span>
              <div>
                <small>Email us</small>
                <b>office@dyetthvac.com</b>
              </div>
            </a>
            <div className="contact-line">
              <span>
                <Icon name="pin" />
              </span>
              <div>
                <small>Service area</small>
                <b>Elizabeth, NJ & surrounding areas</b>
              </div>
            </div>
            <div className="hours">
              <h3>Business hours</h3>
              <p>
                <span>Monday–Friday</span>
                <b>8:00am–6:00pm</b>
              </p>
              <p>
                <span>Saturday</span>
                <b>8:00am–4:00pm</b>
              </p>
              <p>
                <span>Sunday</span>
                <b>Emergency service only</b>
              </p>
            </div>
          </div>
          <div className="form-card">
            <div>
              <span>Service request</span>
              <h2>Schedule a visit</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
function Booking() {
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
            <span>Need urgent help or not sure what to book?</span>
            <a href="tel:+19089770722">Call 908-977-0722</a>
          </div>
          <div className="booking-grid">
            {offers.map(([title, price, time, desc, slug]) => (
              <div className="booking-card" key={title}>
                <div className="service-icon">
                  <Icon name={services.find((s) => s.slug === slug)?.icon || "wrench"} />
                </div>
                <small>{time}</small>
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="price">
                  <span>Starting at</span>
                  <b>{price}</b>
                </div>
                <Link to="/contact" className="button">
                  Request appointment <Icon name="arrow" size={18} />
                </Link>
              </div>
            ))}
          </div>
          <p className="booking-disclaimer">
            Displayed rates are starting prices from the existing service menu. Final pricing
            depends on system condition, parts and approved scope of work.
          </p>
        </div>
      </section>
    </main>
  );
}
function CTA() {
  return (
    <section className="cta">
      <div className="shell cta-inner">
        <div>
          <Eyebrow light>Need service?</Eyebrow>
          <h2>
            Let’s get your system
            <br />
            working the way it should.
          </h2>
        </div>
        <div>
          <p>Tell us what’s happening and we’ll help you take the next step.</p>
          <div>
            <Link to="/contact" className="button button-light">
              Request service <Icon name="arrow" size={18} />
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
  const [path, setPath] = useState(window.location.pathname);
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
    document.title = `${pageName} | Dyett HVAC Pro Corp.`;
  }, [path]);
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
    <>
      <Header path={path} />
      {page}
      <Footer />
      <a className="mobile-call" href="tel:+19089770722">
        <Icon name="phone" size={19} /> Call now
      </a>
    </>
  );
}
