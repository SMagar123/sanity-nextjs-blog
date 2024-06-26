import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
//can be used in .env file too
export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "xeoas3sb",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
