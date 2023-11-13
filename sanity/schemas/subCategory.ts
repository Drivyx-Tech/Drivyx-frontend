import { defineType } from "sanity";

export const subCategory = defineType({
  name: "subCategory",
  title: "Sub Category",
  type: "document",
  fields: [
    {
      name: "subCategory",
      title: "Sub Category",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "category",
      title: "Category",
      description: "Select a category for this sub category.",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
  ],
});
