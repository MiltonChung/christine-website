export default {
  name: "film",
  title: "Film",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
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
      name: "year",
      title: "Published Year",
      type: "string",
    },
    {
      name: "length",
      title: "Film Length",
      type: "string",
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
    },
    {
      name: "role",
      title: "Your role(s)",
      type: "string",
    },
    {
      title: "Link to Video",
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      title: "Trigger warning",
      name: "triggerWarning",
      type: "string",
    },
    {
      name: "image1",
      title: "Image One",
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
      name: "description1",
      title: "Description One",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "image2",
      title: "Image Two",
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
      name: "description2",
      title: "Description Two (optional)",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "credits",
      title: "Credits",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          title: "Image",
          type: "image",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
