const fs = require('fs');
const path = require('path');

// Configure your website's URL
const SITE_URL = 'https://UncleSmol.github.io/myphysio';

// Define your site's pages and their priorities/update frequencies
const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/services', priority: 0.8, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/about', priority: 0.7, changefreq: 'monthly' },
  // Add more pages as needed
];

// Create XML sitemap content
const generateSitemapXml = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

// Write the sitemap to the public folder
const writeSitemap = () => {
  const sitemap = generateSitemapXml();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  // Ensure the directory exists
  const dir = path.dirname(sitemapPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap generated at ${sitemapPath}`);
};

writeSitemap();
