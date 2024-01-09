import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Color of the category",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Orange", value: "orange" },
          { title: "Yellow", value: "yellow" },
          { title: "Teal", value: "teal" },
          { title: "cyan", value: "cyan" },
          { title: "pink", value: "pink" },
          { title: "whiteAlpha", value: "whiteAlpha" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
});
