import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "project-id",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_API_TOKEN || "",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
    builder.image(source);
}
