import { defineType } from "sanity";
import { subCategory } from "./subCategory";
import { tag } from "./tag";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 96,
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: tag.name } }],
    },
    {
      name: "subCategory",
      title: "Sub Category",
      type: "reference",
      to: [{ type: subCategory.name }],
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "clientRole",
      title: "Role",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in project feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
});
