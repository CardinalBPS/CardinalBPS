import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { contact, services } from "@/lib/content";
import { Mark } from "./logo";

const lines = [
  { to: "/home-health", label: "Home Health · PDGM & OASIS" },
  { to: "/hospice", label: "Hospice · NOE & CAP" },
  { to: "/home-care", label: "Home Care · EVV & Medicaid" },
  { to: "/integrations", label: "Healthcare Integrations · Mergers & Acquisitions" },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"solutions" | "lines" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const showMenu = (next: "solutions" | "lines") => {
    setMenu(next);
  };

  const hideMenu = () => {
    setMenu(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 8);
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solutionsOn = pathname.startsWith("/solution");
  const linesOn = lines.some((line) => pathname === line.to);

  const overFilm = false;

  return (
    <div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className={overFilm ? "header over-film" : scrolled ? "header is-scrolled" : "header"}>
        <div className="wrap header-bar">
          <Link to="/" className="brand" aria-label="Cardinal BPS home">
            <Mark />
            <span className="brand-name">
              <strong>Cardinal BPS</strong>
              <span>Business process solutions</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <div
              className={menu === "solutions" ? "nav-drop is-open" : "nav-drop"}
              onMouseEnter={() => showMenu("solutions")}
              onMouseLeave={hideMenu}
            >
              <button
                type="button"
                className={solutionsOn ? "nav-drop-btn is-active" : "nav-drop-btn"}
                aria-haspopup="true"
              >
                Solutions
              </button>
              <div className="nav-menu">
                <div className="nav-menu-panel">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to="/solution/$slug"
                    params={{ slug: service.slug }}
                    className={pathname === `/solution/${service.slug}` ? "is-active" : undefined}
                    onClick={() => setMenu(null)}
                  >
                    {service.title}
                  </Link>
                ))}
                </div>
              </div>
            </div>
            <div
              className={menu === "lines" ? "nav-drop is-open" : "nav-drop"}
              onMouseEnter={() => showMenu("lines")}
              onMouseLeave={hideMenu}
            >
              <button
                type="button"
                className={linesOn ? "nav-drop-btn is-active" : "nav-drop-btn"}
                aria-haspopup="true"
              >
                Operating Lines
              </button>
              <div className="nav-menu nav-menu-wide">
                <div className="nav-menu-panel">
                {lines.map((line) => (
                  <Link
                    key={line.to}
                    to={line.to}
                    className={pathname === line.to ? "is-active" : undefined}
                    onClick={() => setMenu(null)}
                  >
                    {line.label}
                  </Link>
                ))}
                </div>
              </div>
            </div>
            <Link to="/why-cardinal">Why Cardinal</Link>
            <Link to="/consultation" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </nav>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
        <div className={open ? "wrap mobile-panel is-open" : "wrap mobile-panel"}>
          <p className="mobile-label">Solutions</p>
          {services.map((service) => (
            <Link key={service.slug} to="/solution/$slug" params={{ slug: service.slug }} className="mobile-sub">
              {service.title}
            </Link>
          ))}
          <p className="mobile-label">Operating Lines</p>
          {lines.map((line) => (
            <Link key={line.to} to={line.to} className="mobile-sub">
              {line.label}
            </Link>
          ))}
          <Link to="/why-cardinal">Why Cardinal</Link>
          <Link to="/consultation">Schedule a Consultation</Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Mark />
            <h2>Your success is our purpose.</h2>
            <p className="lede">
              Healthcare outsourcing for the people who care for patients at home.
            </p>
          </div>
          <div>
            <h3>Solutions</h3>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to="/solution/$slug" params={{ slug: service.slug }}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Operating Lines</h3>
            <ul>
              {lines.map((line) => (
                <li key={line.to}>
                  <Link to={line.to}>{line.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-company">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/why-cardinal">Why Cardinal</Link>
              </li>
              <li>
                <Link to="/consultation">Consultation</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                {contact.street}
                <br />
                {contact.city}
              </li>
              <li>
                <Link to="/consultation" className="btn contact-btn">
                  <span>Speak with an expert</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Cardinal BPS. All rights reserved.</span>
          <span>Home Health · Hospice · Home Care · Healthcare Integrations</span>
        </div>
      </footer>
    </div>
  );
}
