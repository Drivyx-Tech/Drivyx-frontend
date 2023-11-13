import { defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      description: "which category belongs to this tag",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
  ],
});
