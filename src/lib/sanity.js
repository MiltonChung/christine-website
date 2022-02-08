import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: "2021-08-31",
  projectId: "hdcfrb9i",
  dataset: "production",
  useCdn: true,
});
