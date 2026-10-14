import type { MetadataRoute } from "next";
import { profile } from "@/lib/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: "Abouelkheir",
    description:
      "Portfolio showcasing React, Next.js, and TypeScript projects and experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#14b8a6",
    icons: [
      {
        src: "/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
