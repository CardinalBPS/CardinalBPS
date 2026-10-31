import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { nextService, type Service } from "@/lib/content";
import { Reveal } from "./motion";

export function ServiceView({ service }: { service: Service }) {
  const next = nextService(service.slug);

  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/solutions" className="back">
            <ArrowLeft className="icon" />
            All solutions
          </Link>
          <p className="kicker">
            {service.index} · {service.kicker}
          </p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: service.headline.includes("\n") ? "24ch" : "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
              whiteSpace: "pre-line",
            }}
          >
            {service.headline}
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            {service.lede}
          </p>
          <div className="cta-row">
            <Link to="/consultation" className="btn btn-primary">
              Discuss {service.title}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Our approach</p>
            <h2
              className="h2"
              style={{
                margin: "0.55rem 0 1.4rem",
                fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
                lineHeight: 1.05,
              }}
            >
              A structured path, not a pile of tasks.
            </h2>
          </Reveal>
          <div className="steps">
            {service.steps.map((step, index) => (
              <article className="step" key={step.title}>
                <p className="idx">0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2
            className="h2"
            style={{
              margin: "0.55rem 0 1.2rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            What the work actually covers.
          </h2>
          <div>
            {service.offerings.map((offer, index) => (
              <article className="offer" key={offer.title}>
                <p className="idx">0{index + 1}</p>
                <h3>{offer.title}</h3>
                <p>{offer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <p className="kicker">Business impact</p>
          <h2 className="h2" style={{ margin: "0.55rem 0 1.3rem", maxWidth: "14ch" }}>
            What changes when the work is tighter.
          </h2>
          <ul className="impact">
            {service.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "end" }}>
          <div>
            <p className="kicker">Next</p>
            <h2 className="h2" style={{ marginTop: "0.45rem" }}>
              {next.title}
            </h2>
          </div>
          <Link to="/solution/$slug" params={{ slug: next.slug }} className="btn btn-ghost">
            Continue to {next.title}
            <ArrowUpRight className="icon" />
          </Link>
        </div>
      </section>
    </main>
  );
}
