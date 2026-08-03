import React, { useEffect } from 'react';
import { GYM_CONFIG } from '../config/gymConfig';

export const SchemaMarkup: React.FC = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "name": GYM_CONFIG.name,
      "alternateName": "V3 Fitness Niwara Gym",
      "description": GYM_CONFIG.taglineSecondary,
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "@id": "https://niwaragym.com/#gym",
      "url": "https://niwaragym.com",
      "telephone": GYM_CONFIG.contact.phonePrimary,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${GYM_CONFIG.address.campus}, ${GYM_CONFIG.address.street}`,
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": GYM_CONFIG.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5128038,
        "longitude": 73.8475200
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": GYM_CONFIG.googleRating.score.toString(),
        "reviewCount": GYM_CONFIG.googleRating.totalReviews.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "05:30",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "07:00",
          "closes": "12:00"
        }
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Steam Bath & Recovery", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "InBody Composition Scanner", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
      ],
      "sameAs": [
        GYM_CONFIG.contact.instagram,
        GYM_CONFIG.contact.facebook,
        GYM_CONFIG.contact.youtube
      ]
    };

    const script = document.createElement('script');
    script.id = 'schema-json-ld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);

    const existing = document.getElementById('schema-json-ld');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-json-ld');
      if (el) el.remove();
    };
  }, []);

  return null;
};
