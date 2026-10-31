import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Cardinal BPS" },
      {
        name: "description",
        content:
          "Medical coding, OASIS review, revenue cycle management, quality assurance, clinical documentation, and healthcare consulting.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Our solutions</p>
          <h1 className="display" style={{ marginTop: "0.7rem", maxWidth: "12ch" }}>
            One partner. Multiple solutions.
          </h1>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            Cardinal BPS delivers specialized outsourcing and business process solutions that
            strengthen clinical performance, improve financial outcomes, and help providers focus
            on patient care.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap catalog">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/solution/$slug"
              params={{ slug: service.slug }}
              className="catalog-card"
            >
              <p className="idx">{service.index}</p>
              <div>
                <p className="kicker">{service.kicker}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
              <ArrowUpRight className="icon" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
