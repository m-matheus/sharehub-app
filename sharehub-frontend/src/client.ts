import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || "project-id",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
  token: 'skq7Vn4bOBEkcyOL3O5bBh1S8SqvOoQVmJzm0kze0sfoga1QaQXtwlMSJq8FmBy51CTLDZVgPgdN0F2klCLmSXHGdU9BrmB2K7QIPffmTzBEPvrHJHWHGbQbvdLvW3ubuZt8ZyrfEd2bmysIWwK7mdvBZn9yTg9AMoBxkkf0yPPs6eKVV0E8',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
    builder.image(source);
}
