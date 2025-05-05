const { i18n } = require("./next-i18next.config");
const { version } = require("./package.json");

module.exports = {
  i18n,
  publicRuntimeConfig: {
    version,
  },

  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};
