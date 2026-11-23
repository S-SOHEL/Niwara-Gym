/**
 * ISOLATED TEST FIXTURES FOR PRODUCTION SCHEMA SAFETY VERIFICATION
 *
 * IMPORTANT NOTICE:
 * These fixtures are strictly used for automated validation testing.
 * They are NOT part of the runtime gymConfig.ts and are NOT bundled
 * into the production client web application.
 */

import { GymInfo } from '../types';
import { GYM_CONFIG } from '../config/gymConfig';

/**
 * 1. Default Runtime Demo Fixture
 * Matches the actual runtime configuration.
 */
export const RUNTIME_DEMO_FIXTURE: GymInfo = {
  ...GYM_CONFIG,
  isDemoProject: true,
  productionRelease: undefined
};

/**
 * 2. Unauthorized Mode Toggle Fixture
 * Simulates a developer toggling isDemoProject to false without client authorization.
 */
export const UNAUTHORIZED_TOGGLE_FIXTURE: GymInfo = {
  ...GYM_CONFIG,
  isDemoProject: false,
  productionRelease: undefined
};

/**
 * 3. Batch 4 Synthetic Placeholder Fixture
 * Simulates an attempt to supply unverified placeholder data (e.g. niwaragym.com,
 * synthetic phone +91 20 2445 1234, Unsplash image, unverified affiliation).
 *
 * MUST BE REJECTED by validateProductionSchemaSafety().
 */
export const BATCH_4_SYNTHETIC_FIXTURE: GymInfo = {
  ...GYM_CONFIG,
  isDemoProject: false,
  branding: {
    ...GYM_CONFIG.branding,
    affiliationVerified: false
  },
  productionRelease: {
    clientAuthorized: true,
    officialBusinessName: "NIWARA GYM",
    officialAffiliation: "By V3 Fitness", // Unverified affiliation
    officialDomain: "https://niwaragym.com", // Synthetic unverified domain
    officialTelephone: "+91 20 2445 1234", // Synthetic unverified phone
    officialEmail: "contact@niwaragym.com", // Synthetic unverified email
    verifiedCoordinates: {
      latitude: 18.5089,
      longitude: 73.8447
    },
    verifiedOpeningHours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:30",
        closes: "22:30",
        isClientConfirmed: false // Unconfirmed hours
      }
    ],
    verifiedBrandImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48" // Stock image
  }
};

/**
 * 4. Hypothetical Fully-Authorized Client Fixture
 * Represents a hypothetical future state where an authorized client has executed
 * a signed agreement, provided verified official contacts, client CDN media, and confirmed timetable.
 */
export const HYPOTHETICAL_CLIENT_FIXTURE: GymInfo = {
  ...GYM_CONFIG,
  isDemoProject: false,
  branding: {
    ...GYM_CONFIG.branding,
    affiliationVerified: true
  },
  productionRelease: {
    clientAuthorized: true,
    authorizationReference: "AGREEMENT-NG-2026-PUNE-01",
    officialBusinessName: "Niwara Fitness Club",
    officialAffiliation: "V3 Fitness Pune",
    officialDomain: "https://niwarafitness-official.in",
    officialTelephone: "+91 20 6712 3456",
    officialEmail: "reception@niwarafitness-official.in",
    verifiedCoordinates: {
      latitude: 18.5089,
      longitude: 73.8447
    },
    verifiedOpeningHours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "05:30",
        closes: "22:30",
        isClientConfirmed: true
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "06:00",
        closes: "13:00",
        isClientConfirmed: true
      }
    ],
    verifiedBrandImage: "https://cdn.niwarafitness-official.in/assets/branding/facade-entrance-2026.jpg"
  }
};

/**
 * AUTOMATED TEST SUITE RUNNER
 */
import { validateProductionSchemaSafety, getGeneratedSchema } from '../components/SchemaMarkup';

function runSafetyFixtureTests() {
  console.log("=== RUNNING PRODUCTION SCHEMA SAFETY FIXTURE TESTS ===");

  // Test 1: Runtime Demo Fixture
  const t1 = validateProductionSchemaSafety(RUNTIME_DEMO_FIXTURE);
  if (t1.canEmitProductionSchema) {
    throw new Error("FAIL: RUNTIME_DEMO_FIXTURE should not be allowed to emit production schema.");
  }
  const s1 = getGeneratedSchema(RUNTIME_DEMO_FIXTURE);
  if (s1['@type'] !== 'WebSite') {
    throw new Error("FAIL: RUNTIME_DEMO_FIXTURE should emit WebSite schema, got " + s1['@type']);
  }
  if ('telephone' in s1 || 'openingHoursSpecification' in s1) {
    throw new Error("FAIL: RUNTIME_DEMO_FIXTURE emitted telephone or opening hours!");
  }
  console.log("✓ PASS: RUNTIME_DEMO_FIXTURE strictly restricted to neutral WebSite schema.");

  // Test 2: Unauthorized Toggle Fixture
  const t2 = validateProductionSchemaSafety(UNAUTHORIZED_TOGGLE_FIXTURE);
  if (t2.canEmitProductionSchema) {
    throw new Error("FAIL: UNAUTHORIZED_TOGGLE_FIXTURE should be blocked.");
  }
  const s2 = getGeneratedSchema(UNAUTHORIZED_TOGGLE_FIXTURE);
  if (s2['@type'] !== 'WebSite') {
    throw new Error("FAIL: UNAUTHORIZED_TOGGLE_FIXTURE should fall back to WebSite schema.");
  }
  console.log("✓ PASS: UNAUTHORIZED_TOGGLE_FIXTURE safely blocked without client authorization.");

  // Test 3: Batch 4 Synthetic Placeholder Fixture
  const t3 = validateProductionSchemaSafety(BATCH_4_SYNTHETIC_FIXTURE);
  if (t3.canEmitProductionSchema) {
    throw new Error("FAIL: BATCH_4_SYNTHETIC_FIXTURE should be blocked due to synthetic placeholders.");
  }
  if (t3.blockers.length < 5) {
    throw new Error(`FAIL: Expected >= 5 blockers for synthetic placeholders, got ${t3.blockers.length}`);
  }
  const s3 = getGeneratedSchema(BATCH_4_SYNTHETIC_FIXTURE);
  if (s3['@type'] !== 'WebSite') {
    throw new Error("FAIL: BATCH_4_SYNTHETIC_FIXTURE should fall back to WebSite schema.");
  }
  console.log(`✓ PASS: BATCH_4_SYNTHETIC_FIXTURE correctly rejected with ${t3.blockers.length} safety blockers.`);

  // Test 4: Hypothetical Authorized Client Fixture
  const t4 = validateProductionSchemaSafety(HYPOTHETICAL_CLIENT_FIXTURE);
  if (!t4.canEmitProductionSchema) {
    throw new Error(`FAIL: HYPOTHETICAL_CLIENT_FIXTURE should pass all checks. Blockers: ${t4.blockers.join(', ')}`);
  }
  const s4 = getGeneratedSchema(HYPOTHETICAL_CLIENT_FIXTURE);
  if (s4['@type'] !== 'ExerciseGym') {
    throw new Error("FAIL: HYPOTHETICAL_CLIENT_FIXTURE should emit ExerciseGym schema, got " + s4['@type']);
  }
  if (!s4['telephone'] || s4['telephone'].includes('8010155174')) {
    throw new Error("FAIL: HYPOTHETICAL_CLIENT_FIXTURE telephone missing or leaked agency number.");
  }
  console.log("✓ PASS: HYPOTHETICAL_CLIENT_FIXTURE cleared all 11 safety gates and generated valid ExerciseGym schema.");

  console.log("=== ALL SCHEMA SAFETY REGRESSION TESTS PASSED (4/4) ===");
}

runSafetyFixtureTests();

