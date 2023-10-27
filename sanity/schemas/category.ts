import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
  ],
});
