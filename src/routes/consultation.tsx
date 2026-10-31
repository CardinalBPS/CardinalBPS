import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { contact, services } from "@/lib/content";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Free Consultation | Cardinal BPS" },
      {
        name: "description",
        content:
          "Tell Cardinal BPS about your home health, hospice, or home care operation and request a free consultation.",
      },
    ],
  }),
  component: ConsultationPage,
});

type Fields = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  help: string;
  needs: string;
};

const empty: Fields = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  help: "",
  needs: "",
};

function ConsultationPage() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Add your name.";
    if (fields.organization.trim().length < 2) next.organization = "Add your organization.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Enter a valid email.";
    if (!fields.help) next.help = "Choose a starting point.";
    if (fields.needs.trim().length < 12) next.needs = "Share a little more about the need.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${fields.name}`,
      `Organization: ${fields.organization}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || "—"}`,
      `Help: ${fields.help}`,
      "",
      fields.needs,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Consultation request — ${fields.organization}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="wrap consult-layout">
          <div>
            <p className="kicker">Free consultation</p>
            <h1
              className="display"
              style={{
                marginTop: "0.7rem",
                maxWidth: "12ch",
                fontSize: "clamp(2.9rem, 7vw, 6.4rem)",
              }}
            >
              Let’s talk about your goals.
            </h1>
            <p className="lede" style={{ marginTop: "2rem" }}>
              Tell us about your organization and the pressure points — coding, OASIS, cash flow,
              denials, or the day-to-day of home care. We’ll reply with a practical recommendation.
            </p>
            <div className="steps" style={{ marginTop: "1.6rem" }}>
              <article className="step">
                <p className="idx">01</p>
                <h3>Tell us about the need</h3>
                <p>Organization, goals, and what is getting in the way.</p>
              </article>
              <article className="step">
                <p className="idx">02</p>
                <h3>Talk with the team</h3>
                <p>A conversation with people who know post-acute operations.</p>
              </article>
              <article className="step">
                <p className="idx">03</p>
                <h3>Leave with a direction</h3>
                <p>Recommendations sized to the way your agency already works.</p>
              </article>
            </div>
          </div>

          {sent ? (
            <div className="success">
              <svg className="check" viewBox="0 0 46 46" aria-hidden="true">
                <circle cx="23" cy="23" r="20" />
                <path d="M14 24 l6 6 12-14" />
              </svg>
              <h2 className="h2" style={{ fontSize: "2.4rem", marginTop: "0.8rem" }}>
                Your note is ready to send.
              </h2>
              <p className="lede" style={{ marginTop: "0.7rem" }}>
                Your email app should open addressed to {contact.email}. If it doesn’t, send the
                same note there directly. We use it only to respond to this request.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(event) => set("name", event.target.value)}
                />
                {errors.name ? <p className="error">{errors.name}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="organization">Organization</label>
                <input
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  value={fields.organization}
                  onChange={(event) => set("organization", event.target.value)}
                />
                {errors.organization ? <p className="error">{errors.organization}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(event) => set("email", event.target.value)}
                />
                {errors.email ? <p className="error">{errors.email}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={(event) => set("phone", event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="help">What can we help with?</label>
                <select
                  id="help"
                  name="help"
                  value={fields.help}
                  onChange={(event) => set("help", event.target.value)}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.help ? <p className="error">{errors.help}</p> : null}
              </div>
              <div className="field">
                <label htmlFor="needs">Tell us about your needs</label>
                <textarea
                  id="needs"
                  name="needs"
                  value={fields.needs}
                  onChange={(event) => set("needs", event.target.value)}
                />
                {errors.needs ? <p className="error">{errors.needs}</p> : null}
              </div>
              <div className="form-submit">
                <button className="btn btn-primary" type="submit">
                  Schedule a Consultation
                </button>
                <p className="micro form-note">
                  Your information is used only to respond. Nothing is stored on this site.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
