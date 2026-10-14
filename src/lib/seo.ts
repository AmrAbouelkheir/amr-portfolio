import type { Metadata } from "next";
import { about, profile, techStack } from "@/lib/data/profile";
import { site, siteUrl } from "@/lib/site";

const description = about.paragraphs[0];

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    profile.role,
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    ...techStack.slice(0, 12),
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description,
    images: [
      {
        url: site.ogImage,
        alt: `${profile.name} — ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description,
    images: [site.ogImage],
  },
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
    image: `${siteUrl}${site.ogImage}`,
    url: siteUrl,
  };
}
