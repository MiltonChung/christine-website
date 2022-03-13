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
          type: "string",
          name: "alt",
          title: "Alternative text",
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
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
