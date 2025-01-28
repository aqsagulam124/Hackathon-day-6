// src/sanity/lib/client.ts
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''; // Add your Sanity Project ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'; // Add your dataset
const apiVersion = '2023-01-01'; // Update this as per your API version

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster performance
});




