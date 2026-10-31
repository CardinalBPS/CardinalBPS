import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceView } from "@/components/site/service-view";
import { getService } from "@/lib/content";

export const Route = createFileRoute("/solution/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.service.title} | Cardinal BPS`
          : "Solution | Cardinal BPS",
      },
      {
        name: "description",
        content: loaderData?.service.summary ?? "Cardinal BPS healthcare solutions.",
      },
    ],
  }),
  component: ServiceRoute,
});

function ServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServiceView service={service} />;
}
