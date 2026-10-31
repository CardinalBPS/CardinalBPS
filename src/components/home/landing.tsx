import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeroFilm } from "@/components/home/hero-film";
import { Count, Reveal } from "@/components/site/motion";
import { journey, models, reasons, services } from "@/lib/content";

export function Landing() {
  const journeyRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(services[0].slug);
  const [shift, setShift] = useState(0);
  const [step, setStep] = useState(0);
  const current = services.find((service) => service.slug === active) ?? services[0];

  useEffect(() => {
    const update = () => {
      const wrap = journeyRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      if (window.innerWidth < 980) {
        setShift(0);
        return;
      }
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-wrap.getBoundingClientRect().top, 0), Math.max(total, 0));
      const progress = total > 0 ? scrolled / total : 0;
      const max = Math.max(0, track.scrollWidth - window.innerWidth);
      setShift(-progress * max);
      setStep(Math.min(journey.length - 1, Math.floor(progress * journey.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main>
      <section className="hero hero-film">
        <p className="spine">Home health · Hospice · Home care</p>
        <HeroFilm>
          <p className="kicker rise-late">Your success is our purpose</p>
          <h1 className="display">
            <span className="word">Business</span> <span className="word">process</span>
            <br />
            <em>
              <span className="word">solutions</span> <span className="word accent">for</span>
            </em>
            <br />
            <span className="word">home health,</span> <span className="word">hospice,</span>
            <br />
            <span className="word">and home care.</span>
          </h1>
          <p className="lede rise-late">
            We work alongside home health, hospice, and home care agencies to streamline
            operations, strengthen compliance, and improve revenue cycle performance — so your
            team can focus on patient outcomes.
          </p>
          <div className="cta-row rise-late">
            <Link to="/consultation" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/solutions" className="btn btn-line">
              Explore solutions
            </Link>
          </div>
          <ul className="pills">
            <li>
              <Link to="/home-health">Home Health · PDGM & OASIS</Link>
            </li>
            <li>
              <Link to="/hospice">Hospice · NOE & CAP</Link>
            </li>
            <li>
              <Link to="/home-care">Home Care · EVV & Medicaid</Link>
            </li>
            <li>
              <Link to="/integrations">Healthcare Integrations · Mergers & Acquisitions</Link>
            </li>
          </ul>
        </HeroFilm>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Healthcare solutions</p>
                <h2 className="h2" style={{ marginTop: "0.6rem" }}>
                  Strategic solutions built around modern healthcare.
                </h2>
              </div>
              <p className="lede">
                Cardinal Business Process Solutions partners with providers to streamline
                operations, improve financial performance, strengthen compliance, and deliver
                patient care through specialized outsourcing.
              </p>
            </div>
          </Reveal>
          <div className="stats">
            <p className="stat">
              <strong>Dedicated</strong>
              <span className="stat-label">A senior team on your account</span>
            </p>
            <p className="stat">
              <strong>
                <Count value={99} suffix="%" duration={2000} />
              </strong>
              <span className="stat-label">Coding accuracy</span>
            </p>
            <p className="stat">
              <strong>
                <Count value={24} suffix="h" duration={2000} />
              </strong>
              <span className="stat-label">Turnaround time</span>
            </p>
            <p className="stat">
              <strong>HIPAA</strong>
              <span className="stat-label">Fully compliant delivery</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">What we do</p>
                <h2
                  className="h2"
                  style={{
                    marginTop: "0.6rem",
                    fontSize: "clamp(1.35rem, 2.6vw, 2.45rem)",
                    whiteSpace: "nowrap",
                  }}
                >
                  One partner. Six ways in.
                </h2>
              </div>
              <p className="lede">
                Hover a practice area. Open it when you want the full operating detail.
              </p>
            </div>
          </Reveal>
          <div className="workbench">
            <aside className="preview-panel">
              <div className="preview-swap" key={current.slug}>
                <p className="preview-index">{current.index}</p>
                <p className="kicker">{current.kicker}</p>
                <h3>{current.title}</h3>
                <p>{current.summary}</p>
                <ul className="point-list">
                  {current.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link to="/solution/$slug" params={{ slug: current.slug }} className="btn btn-light">
                  View {current.title}
                  <ArrowUpRight className="icon" />
                </Link>
              </div>
            </aside>
            <div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to="/solution/$slug"
                  params={{ slug: service.slug }}
                  className={service.slug === active ? "srow on" : "srow"}
                  onMouseEnter={() => setActive(service.slug)}
                  onFocus={() => setActive(service.slug)}
                >
                  <span className="idx">{service.index}</span>
                  <strong>{service.title}</strong>
                  <ArrowUpRight className="icon" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey-wrap" ref={journeyRef}>
        <div className="journey-pin">
          <div className="wrap journey-head">
            <div>
              <p className="kicker">Revenue cycle</p>
              <h2 className="h2" style={{ marginTop: "0.55rem" }}>
                The patient financial journey, in motion.
              </h2>
              <p className="lede" style={{ marginTop: "0.85rem" }}>
                From the first referral to the final dollar collected, every stage matters.
              </p>
            </div>
            <p className="step-label">
              {journey[step].index} / {String(journey.length).padStart(2, "0")}
            </p>
          </div>
          <div
            className="journey-track"
            ref={trackRef}
            style={{ transform: shift ? `translate3d(${shift}px, 0, 0)` : undefined }}
          >
            {journey.map((item) => (
              <article className="journey-panel" key={item.index}>
                <p className="idx">{item.index}</p>
                <h3>{item.title}</h3>
                <p className="journey-line">{item.line}</p>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Why providers partner with Cardinal</p>
                <h2 className="h2" style={{ marginTop: "0.6rem" }}>
                  More than a vendor.
                  <br />
                  A post-acute operator beside you.
                </h2>
              </div>
              <p className="lede">
                <Link to="/why-cardinal">Read the full case for Cardinal →</Link>
              </p>
            </div>
          </Reveal>
          <div className="reasons">
            {reasons.map((reason, index) => (
              <article className="reason" key={reason.title}>
                <p className="idx">0{index + 1}</p>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Flexible engagement</p>
                <h2 className="h2" style={{ marginTop: "0.6rem" }}>
                  Every agency operates differently.
                </h2>
              </div>
              <p className="lede">
                We adapt the delivery model to your workflow, staffing, and goals.
                <br />
                That can be full-service support or a single specialized lane.
              </p>
            </div>
          </Reveal>
          <div className="models">
            {models.map((model) => (
              <article className="model" key={model.index}>
                <p className="idx">{model.index}</p>
                <h3>{model.title}</h3>
                <p>{model.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap section-head">
          <div>
            <p className="kicker">Consultation</p>
            <h2 className="h2" style={{ marginTop: "0.6rem" }}>
              Let’s build a stronger healthcare operation.
            </h2>
          </div>
          <div>
            <p className="lede">
              Tell us where coding, OASIS, cash, or daily operations are slowing the agency down.
              We’ll come back with a practical recommendation.
            </p>
            <div className="cta-row">
              <Link to="/consultation" className="btn btn-primary">
                Talk with the team
              </Link>
              <Link to="/solutions" className="btn btn-line">
                Browse solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
