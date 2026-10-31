import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/home/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cardinal BPS | Home Health RCM, Coding & OASIS" },
      {
        name: "description",
        content:
          "Business process solutions for home health, hospice, and personal care agencies. Coding, OASIS, revenue cycle, and operational support.",
      },
    ],
  }),
  component: Landing,
});
