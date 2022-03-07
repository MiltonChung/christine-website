export default {
  name: "film",
  title: "Film",
  type: "document",
  fields: [
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
      name: "description1",
      title: "Description One",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
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
      name: "description2",
      title: "Description Two (optional)",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
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
