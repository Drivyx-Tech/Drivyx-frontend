import { defineType } from "sanity";
// import IframePreview from "./previews/iframe";
// import TablePreview from "./previews/table";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      // options: { hotspot: true },
    },

    {
      type: "object",
      name: "embed",
      title: "Embed",
      fields: [
        {
          name: "url",
          type: "url",
          description:
            "Enter the URL to Embed \r\n(eg: https://youtube.com/embed/xxx or https://open.spotify.com/embed/track/xxxx)",
        },
        {
          name: "height",
          type: "number",
          description:
            "Enter Required Height for this Embed. Leave it blank for 16:9 ratio.",
        },
      ],
      //   components: {
      //     preview: IframePreview,
      //   },
      //   preview: {
      //     select: { url: "url", height: "height" },
      //   },
    },
  ],
});
