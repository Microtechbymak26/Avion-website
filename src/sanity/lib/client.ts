// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "z9zi5xkx", // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  token: "skw6wh8pbOcY67D6Vmpjd6Yp3p1dWtI0NFDSSTI7HtAyxL9fRJTXPiFKoAXGhhdyZE2KrHHNISnnmuzGAUXeo8C3mUu5C4hVABJtCIkf1DkWylxG5TGrk2AY0OnaZ0XEGvz9CeO2V8LiHbgK6ICV4f83acKM1cdDYFF1WG9lRmt8fVz02hYN",
  useCdn: false,                // Disable CDN for real-time updates
 
});