import { formatISO } from "date-fns";

export default function handler(req, res) {
  const baseUrl =
    process.env.NEXT_PUBLIC_CANONICALURL || "http://localhost:3000";

  // Automatically generate the latest timestamp for the sitemap
  const lastModified = formatISO(new Date());

  const staticPages = [
    { loc: `${baseUrl}/`, priority: 1 },
    { loc: `${baseUrl}/investors`, priority: 0.8 },
    { loc: `${baseUrl}/borrowers`, priority: 0.8 },
    { loc: `${baseUrl}/about-us`, priority: 0.8 },
    { loc: `${baseUrl}/blog`, priority: 0.8 },
    { loc: `${baseUrl}/legal-and-compliance`, priority: 0.8 },
    { loc: `${baseUrl}/contactus`, priority: 0.8 },
    { loc: `${baseUrl}/statistics`, priority: 0.8 },
  ];

  // Construct the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  // Send the response as XML
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
