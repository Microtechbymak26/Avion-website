// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "z9zi5xkx", // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
 
});