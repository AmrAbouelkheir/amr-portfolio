/** Canonical site URL for metadata, sitemap, and Open Graph. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://abouelkheir.dev";

export const site = {
  url: siteUrl,
  name: "Abouelkheir.dev",
  title: "Amr Abouelkheir — Software Engineer",
  ogImage: "/Amr_Abouelkheir.jpg",
} as const;
