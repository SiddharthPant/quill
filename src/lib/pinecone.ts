import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: process.env.PINECODE_API_KEY!,
  environment: "gcp-starter",
});
