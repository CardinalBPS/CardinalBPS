import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Healthcare Integrations · Mergers & Acquisitions | Cardinal BPS" },
      {
        name: "description",
        content:
          "How Cardinal BPS supports home health, hospice, and home care organizations through acquisition diligence and the integration that follows.",
      },
    ],
  }),
  component: IntegrationsPage,
});

const matters = [
  {
    title: "The book is what is being bought",
    body: "A home health, hospice, or home care deal is a census, a payer mix, and a set of claims. The price only holds if the OASIS, the coding, the authorizations, and the cash match the story in the data room.",
  },
  {
    title: "Integration is the back office",
    body: "After close, two agencies still have to admit, document, code, and bill. The electronic record, the billing system, and the visit-verification tool have to carry one workflow, not two sets of habits.",
  },
  {
    title: "The risk transfers with the charts",
    body: "Open denials, a late hospice notice, an EVV mismatch, and documentation that cannot defend the claim do not stay with the seller. They show up in the first months under the new owner.",
  },
];

const reviews = [
  "Census, payer mix, and which claims actually collect",
  "OASIS, coding, and the documentation behind the revenue",
  "Hospice election timing and aggregate cap exposure",
  "Home care authorizations, units, and visit verification",
  "Open accounts receivable, denial patterns, and compliance items",
  "How the record, billing, and visit tool fit after close",
];

export function IntegrationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/" className="back">
            <ArrowLeft className="icon" />
            Home
          </Link>
          <p className="kicker">Healthcare Integrations · Mergers & Acquisitions</p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            The deal is the operation you inherit.
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Cardinal BPS stays with buyers and agency leaders through the review and the
            months after close. The work is the census, the revenue cycle, and the systems
            that have to run as one agency.
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
            What is actually being acquired.
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
            Diligence and the operating work are the same review.
          </h2>
          <div className="models">
            <article className="model">
              <p className="idx">01</p>
              <h3>The transaction</h3>
              <p>
                A read of the book of business, the open risk, and the few operating
                changes that matter before and after close.
              </p>
              <Link
                to="/solution/$slug"
                params={{ slug: "healthcare-consulting" }}
                className="text-link"
              >
                Healthcare Consulting
              </Link>
            </article>
            <article className="model">
              <p className="idx">02</p>
              <h3>The revenue</h3>
              <p>
                Claims, denials, and accounts receivable, so the cash in the model is the
                cash the agency can collect.
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
              <p className="idx">03</p>
              <h3>The record</h3>
              <p>
                Documentation and coding quality behind the census, reviewed the way a
                payer or a buyer would read it.
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
              <h3>The coding</h3>
              <p>
                Diagnoses and therapy documentation behind the census, read before the
                revenue in the model is treated as collectible.
              </p>
              <Link to="/solution/$slug" params={{ slug: "medical-coding" }} className="text-link">
                Medical Coding
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
