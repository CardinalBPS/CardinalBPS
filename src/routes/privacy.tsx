import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Cardinal BPS" },
      {
        name: "description",
        content: "How Cardinal BPS handles information submitted through this website.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="page-hero">
      <div className="wrap prose">
        <p className="kicker">Privacy</p>
        <h1 className="h2" style={{ marginTop: "0.6rem", marginBottom: "1.15rem" }}>
          Privacy policy
        </h1>
        <p>
          Cardinal BPS uses this website to describe services for home health, hospice, and
          personal care organizations. This page explains the limited information the site itself
          handles.
        </p>
        <h2>What you send us</h2>
        <p>
          The consultation form does not store submissions on the site. Sending it opens your email
          application with a message addressed to {contact.email}. If you send that email, we use
          the details only to respond to your request.
        </p>
        <h2>What we do not want through this form</h2>
        <p>
          Do not include protected health information, medical record numbers, or patient
          identifiers. Operations conversations can start without clinical records.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This marketing site does not run a third-party analytics tracker and does not sell
          personal information.
        </p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to {contact.email}.</p>
        <p>Cardinal BPS is located at {contact.address}.</p>
      </div>
    </main>
  );
}
