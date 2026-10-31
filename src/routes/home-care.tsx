import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/home-care")({
  head: () => ({
    meta: [
      { title: "Home Care · EVV & Medicaid | Cardinal BPS" },
      {
        name: "description",
        content:
          "How Cardinal BPS supports home care agencies on electronic visit verification, Medicaid authorizations, and the claim.",
      },
    ],
  }),
  component: HomeCarePage,
});

const matters = [
  {
    title: "The visit has to be verified",
    body: "Medicaid personal care and home health visits need an electronic visit record: who was served, who provided the care, what service it was, the date, the location, and the time it started and ended. If that record is missing or does not match the claim, the visit does not pay.",
  },
  {
    title: "The authorization is the limit",
    body: "Medicaid pays the units that were authorized, for the dates that were authorized, under the code that was authorized. A visit outside that span, or over the allowed units, is a denial even when the care happened.",
  },
  {
    title: "The state and the plan differ",
    body: "Each Medicaid program and each managed care plan sets its own visit-verification and billing rules. A clean visit in one program can be a rejected visit in the next. The schedule, the note, and the claim have to follow the payer in front of you.",
  },
];

const reviews = [
  "Clock-in, clock-out, location, and the six visit details the record has to hold",
  "Caregiver and client identifiers against the authorization",
  "Service code, units, and the dates the authorization actually covers",
  "Manual edits, missed punches, and visits that never made it into the claim",
  "Task notes and the plan of care against what was billed",
  "Eligibility and plan changes before the visit is sent",
];

export function HomeCarePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/" className="back">
            <ArrowLeft className="icon" />
            Home
          </Link>
          <p className="kicker">Home Care · EVV & Medicaid</p>
          <h1
            className="display"
            style={{
              marginTop: "0.7rem",
              maxWidth: "18ch",
              fontSize: "clamp(2.05rem, 3.6vw, 3.15rem)",
              lineHeight: 1.05,
            }}
          >
            A visit that cannot be verified does not pay.
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Home care is paid from the visit record and the authorization behind it. Cardinal
            BPS lines up the electronic visit, the Medicaid approval, and the claim so a
            shift that was worked is a shift that is paid.
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
            The visit, the approval, and the units on the claim.
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
            The schedule, the note, the claim, and the check are one review.
          </h2>
          <div className="models">
            <article className="model">
              <p className="idx">01</p>
              <h3>The visit</h3>
              <p>
                Electronic visit verification, missed punches, and the match between who
                worked, who was served, and what was authorized.
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
              <p className="idx">02</p>
              <h3>The claim</h3>
              <p>
                Eligibility, authorization spans, unit limits, and follow-up when a visit is
                held or denied.
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
                Task notes and the plan of care, so the billed service is the service the
                chart describes.
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
              <h3>The check</h3>
              <p>
                Visits, units, and notes reviewed together before billing, so a mismatch is
                caught inside the agency.
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
