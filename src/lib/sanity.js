import sanityClient from "@sanity/client";

export default sanityClient({
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
});
