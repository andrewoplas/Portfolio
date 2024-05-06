import { projects } from "./[slug]/data";

export default async function sitemap() {
  const defaultPages = [
    {
      url: "https://www.andrewoplas.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const sitemap = [
    ...defaultPages,
    ...projects.map((project) => ({
      url: `https://www.andrewoplas.com/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    })),
  ];

  return sitemap;
}
