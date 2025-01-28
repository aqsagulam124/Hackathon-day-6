// y jo mainy chatgpt sy kia wo code
// lib/sanity/client.ts
import sanityClient, { SanityClient } from "@sanity/client";

export const client = sanityClient({
  projectId: "xnl2cpgh",
  dataset: "production",
  useCdn: true,
   // `false` if you want to ensure fresh data
});
