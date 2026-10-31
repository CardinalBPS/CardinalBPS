import { createFileRoute, Link } from "@tanstack/react-router";
import { models, reasons } from "@/lib/content";

export const Route = createFileRoute("/why-cardinal")({
  head: () => ({
    meta: [
      { title: "Why Cardinal | Cardinal BPS" },
      {
        name: "description",
        content:
          "Why home health, hospice, and home care providers partner with Cardinal BPS for coding, compliance, and revenue cycle performance.",
      },
    ],
  }),
  component: WhyPage,
});

const connected = [
  "Clinical documentation",
  "Medical coding",
  "OASIS review",
  "Revenue cycle management",
  "Compliance readiness",
  "Financial performance",
  "Workflow optimization",
];

function WhyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Why Cardinal</p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            More than a service provider.
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            We combine post-acute expertise, operational knowledge, and technology-enabled
            workflows to create support that is practical, scalable, and aligned with how an
            agency actually runs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap reasons">
          {reasons.map((reason, index) => (
            <article className="reason" key={reason.title}>
              <p className="idx">0{index + 1}</p>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">One connected approach</p>
          <h2
            className="h2"
            style={{
              margin: "0.55rem 0 1.2rem",
              maxWidth: "16ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            Clinical, financial, and operational work in the same conversation.
          </h2>
          <ul className="pills">
            {connected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">How we engage</p>
          <h2
            className="h2"
            style={{
              margin: "0.55rem 0 1.2rem",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            Sized to the agency, not the other way around.
          </h2>
          <div className="models">
            {models.map((model) => (
              <article className="model" key={model.index}>
                <p className="idx">{model.index}</p>
                <h3>{model.title}</h3>
                <p>{model.body}</p>
              </article>
            ))}
          </div>
          <div className="cta-row">
            <Link to="/consultation" className="btn btn-primary">
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
