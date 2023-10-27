import { SubCategory } from "./subCategory";

export type Category = {
  _id: string;
  subCategory: string;
  category: {
    _id: string;
    category: string;
  };
};

// export const CATEGORIES = [
//   {
//     _id: "c1",
//     category: "Carbon Credits",
//     subCategory: [
//       {
//         _id: "s1",
//         subCategory: "Carbon Offsetting",
//       },
//       {
//         _id: "s2",
//         subCategory: "Carbon Reduction",
//       },
//     ],
//   },
//   {
//     _id: "c2",
//     category: "Water Conservation Credits",
//     subCategory: [
//       {
//         _id: "s3",
//         subCategory: "Watershed Restoration",
//       },
//       {
//         _id: "s4",
//         subCategory: "Water Recycling",
//       },
//       {
//         _id: "s5",
//         subCategory: "Nutrient Reduction",
//       },
//       {
//         _id: "s6",
//         subCategory: "Nutrient Recycling",
//       },
//     ],
//   },
//   {
//     _id: "c3",
//     category: "Biodiversity Credits",
//     subCategory: [
//       {
//         _id: "s7",
//         subCategory: "Habitat Protection",
//       },
//       {
//         _id: "s8",
//         subCategory: "Species Conservation",
//       },
//       {
//         _id: "s9",
//         subCategory: "Renewable Energy Certificates",
//       },
//     ],
//   },

//   {
//     _id: "c4",
//     category: "Waste Management & Recycling Credits",
//     subCategory: [
//       {
//         _id: "s10",
//         subCategory: "Organic Waste Composting",
//       },

//       {
//         _id: "s11",
//         subCategory: "Recycling Credits",
//       },
//     ],
//   },
//   {
//     _id: "c5",
//     category: "Air Quality Credits",
//     subCategory: [
//       {
//         _id: "s12",
//         subCategory: "Emission Reductions",
//       },
//       {
//         _id: "s13",
//         subCategory: "Clean Air Initiatives",
//       },
//     ],
//   },
//   {
//     _id: "c6",
//     category: "Land Conservation & Reforestation Credits",
//     subCategory: [
//       {
//         _id: "s14",
//         subCategory: "Afforestation",
//       },
//       {
//         _id: "s15",
//         subCategory: "Land Rehabilitation",
//       },
//     ],
//   },
//   {
//     _id: "c7",
//     category: "Sustainable Agriculture & Fisheries Credits",
//     subCategory: [
//       {
//         _id: "s16",
//         subCategory: "Organic Farming",
//       },
//       {
//         _id: "s17",
//         subCategory: "Sustainable Fishing",
//       },
//     ],
//   },
//   {
//     _id: "c8",
//     category: "Regenerative Design Services",
//     subCategory: [
//       {
//         _id: "s18",
//         subCategory: "Landscape Design",
//       },
//       {
//         _id: "s19",
//         subCategory: "Green Building Design",
//       },
//       {
//         _id: "s20",
//         subCategory: "Urban Planning",
//       },
//       {
//         _id: "s21",
//         subCategory: "Ecosystem Restoration",
//       },
//     ],
//   },
//   {
//     _id: "c9",
//     category: "Climate Tech Solutions",
//     subCategory: [
//       {
//         _id: "s22",
//         subCategory: "Solar",
//       },
//       {
//         _id: "s23",
//         subCategory: "Wind",
//       },
//       {
//         _id: "s24",
//         subCategory: "Hydro",
//       },
//       {
//         _id: "s25",
//         subCategory: "Geothermal",
//       },
//       {
//         _id: "s26",
//         subCategory: "Carbon Capture & Storage (CCS)",
//       },
//       {
//         _id: "s27",
//         subCategory: "Climate Resilience Software",
//       },
//       {
//         _id: "s28",
//         subCategory: "Green Energy Tech",
//       },
//       {
//         _id: "s29",
//         subCategory: "Clean Transportation",
//       },
//     ],
//   },
// ];
