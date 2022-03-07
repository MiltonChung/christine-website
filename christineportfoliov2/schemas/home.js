export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "aboutMe",
      title: "About Me",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "aboutMe",
      media: "mainImage",
    },
  },
};
