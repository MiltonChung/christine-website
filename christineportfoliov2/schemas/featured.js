export default {
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "youtubeID",
      title: "Youtube Video ID",
      type: "string",
      description:
        "You can find this by going to the video then click 'SHARE' button and copy the last part of the URL(ex: T7ojwpSBJWQ)",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "order",
      title: "Display Order (1 is first)",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
