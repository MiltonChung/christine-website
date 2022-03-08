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
      name: "htmlLink",

      title: "HTML Embed Link",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
      ],
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
