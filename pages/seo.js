import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({
  title = "Raqamyah | رقمية - Leading Crowdfunding Platform in Saudi Arabia",
  description = "Join رقمية for secure investments and profitable crowdfunding opportunities in Saudi Arabia.",
  ogTitle,
  ogDescription,
  ogImage,
  keywords = "Crowdfunding, Investment, SME Funding, Saudi Arabia, رقمية",
}) => {
  const router = useRouter();

  // Get base URL from .env or fallback to localhost
  const baseUrl =
    process.env.NEXT_PUBLIC_CANONICALURL || "http://localhost:3000";
  const currentPath = router.asPath.split("?")[0]; // Removes query params
  const canonicalUrl = `${baseUrl}${currentPath}`;

  // Ensure ogImage has absolute URL
  const imageUrl =
    ogImage ||
    `${baseUrl}${process.env.NEXT_PUBLIC_IMAGE_CDN}/default/og-image.webp`;

  return (
    <Head>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />

      {/* Charset & Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Meta Tags (For Social Media) */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Keywords for SEO */}
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SEO;
