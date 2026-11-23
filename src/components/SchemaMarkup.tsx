import React, { useEffect } from 'react';
import { GYM_CONFIG } from '../config/gymConfig';
import { GymInfo } from '../types';

export interface SchemaValidationResult {
  canEmitProductionSchema: boolean;
  blockers: string[];
}

// Obvious placeholder or unverified domains that must be rejected
const REJECTED_DOMAINS = [
  'example.com',
  'example.org',
  'sample.com',
  'placeholder.com',
  'test.com',
  'domain.com',
  'mydomain.com',
  'netlify.app',
  'vercel.app',
  'localhost',
  '127.0.0.1',
  'niwaragym.com' // Synthetic unverified domain from Batch 4 report
];

// Obvious placeholder phones that must be rejected
const REJECTED_PHONES = [
  '+91 20 2445 1234', // Synthetic unverified phone from Batch 4 report
  '2024451234',
  '1234567890',
  '0123456789',
  '9876543210',
  '9999999999',
  '0000000000',
  '1111111111'
];

/**
 * Validates whether the configuration satisfies all strict legal, authorization,
 * and technical criteria required to publish physical entity structured data (ExerciseGym).
 *
 * Rejects empty values, obvious placeholders, example domains, agency contact numbers,
 * unverified stock images, unverified affiliations, and sample hours.
 *
 * NOTE: A physical address or Google Maps listing does NOT prove client authorization.
 */
export function validateProductionSchemaSafety(config: GymInfo): SchemaValidationResult {
  const blockers: string[] = [];

  // Check 1: Explicit project mode check
  if (config.isDemoProject !== false) {
    blockers.push("isDemoProject is true (project is running in demo portfolio mode)");
  }

  // Check 2: Owner / client authorization check
  if (!config.productionRelease || config.productionRelease.clientAuthorized !== true) {
    blockers.push("productionRelease.clientAuthorized is not true (formal signed client authorization required; physical address or map pin does not prove authorization)");
  }

  const release = config.productionRelease;

  if (release) {
    // Check 3: Verified Business Name
    const bizName = release.officialBusinessName?.trim();
    if (!bizName || bizName.length < 3) {
      blockers.push("productionRelease.officialBusinessName is missing or too short");
    } else {
      const lowerBiz = bizName.toLowerCase();
      if (lowerBiz.includes("demo") || lowerBiz.includes("sample") || lowerBiz.includes("test") || lowerBiz.includes("placeholder")) {
        blockers.push(`productionRelease.officialBusinessName contains placeholder term: '${bizName}'`);
      }
    }

    // Check 4: Verified Affiliation (if specified)
    if (release.officialAffiliation) {
      if (config.branding?.affiliationVerified !== true) {
        blockers.push(`productionRelease.officialAffiliation '${release.officialAffiliation}' is unverified (requires formal documentation before schema publication)`);
      }
    }

    // Check 5: Official Domain Validation
    const officialDomain = release.officialDomain?.trim();
    if (!officialDomain) {
      blockers.push("productionRelease.officialDomain is missing");
    } else if (!officialDomain.startsWith("https://")) {
      blockers.push("productionRelease.officialDomain must use secure HTTPS protocol");
    } else {
      const domainLower = officialDomain.toLowerCase();
      const isRejectedDomain = REJECTED_DOMAINS.some(d => domainLower.includes(d));
      if (isRejectedDomain) {
        blockers.push(`productionRelease.officialDomain '${officialDomain}' is an unverified placeholder or staging domain`);
      }
    }

    // Check 6: Official Telephone Validation
    const officialPhone = release.officialTelephone?.trim();
    const agencyPhoneClean = config.contact?.phonePrimary?.replace(/\D/g, '') || '';
    if (!officialPhone) {
      blockers.push("productionRelease.officialTelephone is missing");
    } else {
      const cleanPhone = officialPhone.replace(/\D/g, '');
      if (cleanPhone.length < 8) {
        blockers.push("productionRelease.officialTelephone is too short to be a valid phone number");
      }
      if (agencyPhoneClean && (cleanPhone === agencyPhoneClean || cleanPhone.includes("8010155174"))) {
        blockers.push("productionRelease.officialTelephone cannot be the WebCraft agency demo phone number (+91 80101 55174)");
      }
      const isRejectedPhone = REJECTED_PHONES.some(p => officialPhone.includes(p) || cleanPhone === p.replace(/\D/g, ''));
      if (isRejectedPhone) {
        blockers.push(`productionRelease.officialTelephone '${officialPhone}' is a synthetic test placeholder`);
      }
    }

    // Check 7: Official Email Validation (if provided)
    if (release.officialEmail) {
      const emailLower = release.officialEmail.toLowerCase();
      if (
        emailLower.includes("example.com") ||
        emailLower.includes("sample.com") ||
        emailLower.includes("niwaragym.com") ||
        emailLower.startsWith("demo@") ||
        emailLower.startsWith("test@")
      ) {
        blockers.push(`productionRelease.officialEmail '${release.officialEmail}' is an unverified test placeholder`);
      }
    }

    // Check 8: Verified Coordinates
    const coords = release.verifiedCoordinates;
    if (!coords || typeof coords.latitude !== 'number' || typeof coords.longitude !== 'number') {
      blockers.push("productionRelease.verifiedCoordinates are missing or invalid (valid latitude/longitude numbers required)");
    } else if (coords.latitude === 0 && coords.longitude === 0) {
      blockers.push("productionRelease.verifiedCoordinates cannot be 0, 0");
    } else if (coords.latitude < 8.0 || coords.latitude > 38.0 || coords.longitude < 68.0 || coords.longitude > 98.0) {
      blockers.push("productionRelease.verifiedCoordinates fall outside valid geographic bounds for India");
    }

    // Check 9: Verified Opening Hours
    const hours = release.verifiedOpeningHours;
    if (!hours || !Array.isArray(hours) || hours.length === 0) {
      blockers.push("productionRelease.verifiedOpeningHours is missing (sample hours cannot be published as verified fact)");
    } else {
      const unconfirmedEntry = hours.find(h => !h.isClientConfirmed);
      if (unconfirmedEntry) {
        blockers.push("productionRelease.verifiedOpeningHours contains unconfirmed timetable entries (client confirmation required)");
      }
      const invalidTimeFormat = hours.find(h => !/^([01]\d|2[0-3]):[0-5]\d$/.test(h.opens) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(h.closes));
      if (invalidTimeFormat) {
        blockers.push("productionRelease.verifiedOpeningHours contains invalid time format (must be 24-hour HH:mm)");
      }
    }

    // Check 10: Verified Brand Image / Asset
    const brandImage = release.verifiedBrandImage?.trim();
    if (!brandImage) {
      blockers.push("productionRelease.verifiedBrandImage is missing (verified client-owned asset or authorized media required)");
    } else if (brandImage.includes("unsplash.com") || brandImage.includes("placeholder") || brandImage.includes("dummy")) {
      blockers.push(`productionRelease.verifiedBrandImage '${brandImage}' cannot be stock photography (Unsplash) or a placeholder`);
    } else if (!brandImage.startsWith("https://")) {
      blockers.push("productionRelease.verifiedBrandImage must use secure HTTPS protocol");
    }
  }

  // Check 11: Physical Address Completeness
  if (!config.address?.fullAddress || !config.address?.pincode) {
    blockers.push("address.fullAddress or address.pincode is incomplete");
  } else if (!/^[1-9][0-9]{5}$/.test(config.address.pincode)) {
    blockers.push("address.pincode is not a valid 6-digit Indian postal code");
  }

  return {
    canEmitProductionSchema: blockers.length === 0,
    blockers
  };
}

/**
 * Returns the exact JSON-LD object that should be embedded into the page.
 * Strictly guarantees neutral portfolio WebSite schema unless ALL production safety
 * criteria are verified and client-authorized.
 */
export function getGeneratedSchema(config: GymInfo = GYM_CONFIG) {
  const validation = validateProductionSchemaSafety(config);

  if (validation.canEmitProductionSchema && config.productionRelease) {
    const release = config.productionRelease;
    // PRODUCTION MODE: Authorized by gym owner with strictly verified client details
    return {
      "@context": "https://schema.org",
      "@type": "ExerciseGym",
      "@id": `${release.officialDomain}/#gym`,
      "name": release.officialBusinessName,
      "description": config.taglineSecondary,
      "url": release.officialDomain,
      "telephone": release.officialTelephone,
      "email": release.officialEmail || undefined,
      "image": release.verifiedBrandImage,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${config.address.campus}, ${config.address.street}`,
        "addressLocality": config.address.city,
        "addressRegion": config.address.state,
        "postalCode": config.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": release.verifiedCoordinates.latitude,
        "longitude": release.verifiedCoordinates.longitude
      },
      "openingHoursSpecification": release.verifiedOpeningHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": h.dayOfWeek,
        "opens": h.opens,
        "closes": h.closes
      }))
      // NOTE: Ratings & reviews are strictly omitted until live verified Google Business API connection is authorized.
    };
  }

  // DEMO / PORTFOLIO MODE (Default & Fallback)
  // Emits a neutral WebSite schema representing WebCraft's design showcase.
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${config.name} — Web Design Concept Demo`,
    "alternateName": "WebCraft Gym Demo Project",
    "url": config.seo.canonicalUrl,
    "description": "A luxury dark fitness web demo concept engineered by WebCraft as an agency portfolio demonstration for Niwara Gym Pune.",
    "creator": {
      "@type": "Organization",
      "name": "WebCraft",
      "url": "https://niwaragym.netlify.app/"
    },
    "about": {
      "@type": "Thing",
      "name": `${config.name} (${config.address.area}, ${config.address.city}) Design Concept`
    }
  };
}

export const SchemaMarkup: React.FC = () => {
  useEffect(() => {
    const validation = validateProductionSchemaSafety(GYM_CONFIG);

    if (!GYM_CONFIG.isDemoProject && !validation.canEmitProductionSchema) {
      console.warn(
        "[SchemaMarkup Safety Alert] Production schema (ExerciseGym) blocked. Falling back to neutral WebSite schema due to missing client authorization or unverified business fields:",
        validation.blockers
      );
    }

    const schemaData = getGeneratedSchema(GYM_CONFIG);

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
