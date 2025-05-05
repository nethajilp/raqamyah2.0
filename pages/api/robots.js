export default function handler(req, res) {
  const robots = `
    User-agent: *
    Allow: /

    Sitemap: ${
      process.env.NEXT_PUBLIC_SITEMAPURL ||
      "https://www.ourproject.com/sitemap.xml"
    }
  `;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(robots);
}
