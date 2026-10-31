import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { previewPathRewrite } from "@/lib/preview-path-prefix";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 className="display" style={{ marginTop: "0.6rem" }}>
          That page isn’t on the chart.
        </h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          The link may have moved. The work is still here.
        </p>
        <div className="cta-row">
          <Link to="/" className="btn btn-primary">
            Back to Cardinal BPS
          </Link>
        </div>
      </div>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    rewrite: previewPathRewrite(),
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}
