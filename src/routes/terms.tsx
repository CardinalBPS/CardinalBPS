import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Cardinal BPS" },
      {
        name: "description",
        content: "Terms for using the Cardinal BPS website.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="page-hero">
      <div className="wrap prose">
        <p className="kicker">Terms</p>
        <h1 className="h2" style={{ marginTop: "0.6rem" }}>
          Terms of use
        </h1>
        <p>
          This website describes Cardinal BPS services. Browsing it does not create a client
          relationship. Engagements begin only when both sides agree in writing.
        </p>
        <h2>The information here</h2>
        <p>
          Service descriptions, figures, and the claims console are informational. Performance
          figures on the site illustrate the kind of operational view we work toward. They are not
          a promise of a specific result for your agency.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Don’t misuse the site, attempt to disrupt it, or submit patient information through the
          consultation form.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms: {contact.email}. {contact.address}.
        </p>
      </div>
    </main>
  );
}
