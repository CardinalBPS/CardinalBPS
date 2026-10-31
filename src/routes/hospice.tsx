import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/hospice")({
  head: () => ({
    meta: [
      { title: "Hospice · NOE & CAP | Cardinal BPS" },
      {
        name: "description",
        content:
          "How Cardinal BPS supports hospices on the Notice of Election, the aggregate cap, and the claim.",
      },
    ],
  }),
  component: HospicePage,
});

const matters = [
  {
    title: "The notice starts the benefit",
    body: "Medicare expects the Notice of Election within five calendar days of the election. A late notice makes the days from the election through the day before it is filed non-covered. The election date, attending physician, and principal diagnosis have to be right the first time.",
  },
  {
    title: "The cap is a yearly ceiling",
    body: "In a cap year, November 1 through October 31, Medicare payments cannot exceed the allowed amount for the beneficiaries served. What is over the cap is repaid. Length of stay is what pushes a hospice there.",
  },
  {
    title: "The chart has to defend both",
    body: "A rejected notice and a record that cannot support the terminal prognosis are different failures. They land on the same claim. The notice, the diagnoses, and the clinical story have to describe one patient.",
  },
];

const reviews = [
  "Election date, notice submission, and the days a late notice would make non-covered",
  "Principal diagnosis, related conditions, and the attending physician on the notice and the claim",
  "Benefit periods, transfers, revocations, and live discharges",
  "Length of stay against the aggregate cap",
  "Inpatient and respite days against the 20% inpatient limit",
  "Documentation of decline and a terminal prognosis the record can defend",
];

export function HospicePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/" className="back">
            <ArrowLeft className="icon" />
            Home
          </Link>
          <p className="kicker">Hospice · NOE & CAP</p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The election and the cap are the same file.
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Hospice payment starts with a timely Notice of Election and ends at the aggregate
            cap. Cardinal BPS watches the notice, the coding, and the length of stay so a
            benefit period is not lost on a filing date or repaid at the end of the year.
          </p>
          <div className="cta-row">
            <Link to="/consultation" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap reasons">
          {matters.map((item, index) => (
            <article className="reason" key={item.title}>
              <p className="idx">0{index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">What we look at</p>
          <h2
            className="h2"
            style={{
              margin: "0.55rem 0 1.2rem",
              maxWidth: "16ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The dates and days that decide whether the period pays.
          </h2>
          <ul className="impact">
            {reviews.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">Where this lives in the work</p>
          <h2
            className="h2"
            style={{
              margin: "0.55rem 0 1.2rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The notice, the diagnosis, the chart, and the cap are one review.
          </h2>
          <div className="models">
            <article className="model">
              <p className="idx">01</p>
              <h3>The claim</h3>
              <p>
                Notice of Election timing, claim submission, and follow-up so a late filing
                or a rejected notice is caught before the days are written off.
              </p>
              <Link
                to="/solution/$slug"
                params={{ slug: "revenue-cycle-management" }}
                className="text-link"
              >
                Revenue Cycle Management
              </Link>
            </article>
            <article className="model">
              <p className="idx">02</p>
              <h3>Coding</h3>
              <p>
                Principal diagnosis and related conditions that match the terminal illness
                the benefit is being paid for.
              </p>
              <Link to="/solution/$slug" params={{ slug: "medical-coding" }} className="text-link">
                Medical Coding
              </Link>
            </article>
            <article className="model">
              <p className="idx">03</p>
              <h3>The record</h3>
              <p>
                Documentation of decline and prognosis that can stand up to medical review,
                not only to the first claim.
              </p>
              <Link
                to="/solution/$slug"
                params={{ slug: "clinical-documentation" }}
                className="text-link"
              >
                Clinical Documentation
              </Link>
            </article>
            <article className="model">
              <p className="idx">04</p>
              <h3>The cap</h3>
              <p>
                Length of stay and inpatient days against the yearly ceiling, so a repayment
                is not a surprise at the end of the cap year.
              </p>
              <Link
                to="/solution/$slug"
                params={{ slug: "healthcare-consulting" }}
                className="text-link"
              >
                Healthcare Consulting
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
