import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = 'MY PHYSIO - Professional Physiotherapy Services',
  description = 'Professional physiotherapy services offering personalized treatment plans for pain relief, rehabilitation, and improved mobility.',
  keywords = 'physiotherapy, physical therapy, rehabilitation, pain management, sports injury',
  canonicalUrl = '/',
  ogImage = '/og-image.jpg',
  schemaType = 'LocalBusiness' 
}) => {
  // Calculate the full canonical URL for GitHub Pages
  const siteUrl = 'https://unclesmol.github.io/myphysio'; 
  const fullCanonicalUrl = `${siteUrl}${canonicalUrl}`;
  const fullOgImageUrl = `${siteUrl}${ogImage}`;
  
  // Schema.org structured data
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: 'MY PHYSIO',
    description,
    url: fullCanonicalUrl,
    telephone: '+1234567890', // Replace with actual phone
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Therapy Street', // Replace with actual address
      addressLocality: 'Physio City',
      addressRegion: 'PC',
      postalCode: '12345',
      addressCountry: 'US'
    },
    image: fullOgImageUrl,
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00', // Adjust as needed
    sameAs: [
      'https://www.facebook.com/myphysio', // Replace with actual social links
      'https://www.instagram.com/myphysio',
      'https://twitter.com/myphysio'
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImageUrl} />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
