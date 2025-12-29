import { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://numelite.fr"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/depannage",
    "/creation-site",
    "/maintenance",
    "/google-ads",
    "/seo",
    "/tarifs",
    "/a-propos",
    "/contact",
    "/portfolio",
    "/temoignages",
    "/faq",
    "/blog",
    "/reservation",
    "/devis",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
    "/cgu",
    "/politique-cookies",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/depannage" || route === "/creation-site" ? 0.9 : 0.7,
  }))
}

