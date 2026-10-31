import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/home-health")({
  head: () => ({
    meta: [
      { title: "Home Health · PDGM & OASIS | Cardinal BPS" },
      {
        name: "description",
        content:
          "How Cardinal BPS supports Medicare home health agencies on PDGM, OASIS accuracy, coding, and the claim.",
      },
    ],
  }),
  component: HomeHealthPage,
});

const matters = [
  {
    title: "Payment starts in the assessment",
    body: "Under PDGM, each 30-day period is grouped from clinical grouping, functional impairment, comorbidity, admission source, and timing. Those inputs come from OASIS and the diagnoses on the claim.",
  },
  {
    title: "Quality uses the same chart",
    body: "OASIS also feeds quality reporting, value-based purchasing, and survey review. An item that is wrong for payment is usually wrong for the quality record too.",
  },
  {
    title: "The mismatch is the risk",
    body: "Denials and underpayment show up when the visit note, the OASIS, and the diagnosis do not describe the same patient. That is the work we review.",
  },
];

const reviews = [
  "Start of care, resumption, recertification, and discharge OASIS",
  "Diagnosis sequencing and the comorbidities that change the group",
  "Functional items that move the impairment level",
  "Nursing, therapy, and physician narrative against the OASIS",
  "The claim, before it is submitted",
  "The remittance, when the period pays or adjusts",
];

export function HomeHealthPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/" className="back">
            <ArrowLeft className="icon" />
            Home
          </Link>
          <p className="kicker">Home Health · PDGM & OASIS</p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The chart has to match the payment.
          </h1>
          <p className="lede" style={{ marginTop: "2.25rem" }}>
            Medicare home health is paid and measured from the same record. Cardinal BPS
            reviews OASIS, coding, and the claim so the clinical picture, the PDGM group, and
            the cash describe one patient.
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
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The items that actually move a 30-day period.
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
            Coding, OASIS, therapy, and the claim are one review.
          </h2>
          <div className="models">
            <article className="model">
              <p className="idx">01</p>
              <h3>OASIS review</h3>
              <p>
                Item-level review of the assessment against the clinical record, with the
                gaps called out before they become a payment or survey problem.
              </p>
              <Link to="/solution/$slug" params={{ slug: "oasis-review" }} className="text-link">
                OASIS Review
              </Link>
            </article>
            <article className="model">
              <p className="idx">02</p>
              <h3>Coding</h3>
              <p>
                Diagnosis sequencing and comorbidity capture that support the clinical group
                the documentation can actually defend.
              </p>
              <Link to="/solution/$slug" params={{ slug: "medical-coding" }} className="text-link">
                Medical Coding
              </Link>
            </article>
            <article className="model">
              <p className="idx">03</p>
              <h3>The claim</h3>
              <p>
                Clean submission, denial prevention, and follow-up so an accurate OASIS is
                not lost after it leaves the agency.
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
              <p className="idx">04</p>
              <h3>Therapy</h3>
              <p>
                PT, OT, and ST evaluations and re-evaluations reviewed so the functional
                picture matches the care in the chart.
              </p>
              <Link
                to="/solution/$slug"
                params={{ slug: "quality-assurance" }}
                className="text-link"
              >
                Quality Assurance
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
