import { SubCategory } from "./subCategory";

export type Tag = {
  _id: string;
  tag: string;
  category: {
    _id: string;
    category: string;
  };
};

// export const TAGS = [
//   {
//     _id: "1c80a379-e881-4b2a-92ba-82c0d22c0acf",
//     tag: "Voluntary Market",
//   },
//   {
//     _id: "2",
//     tag: "Voluntary Market Compliance Market",
//   },
//   {
//     _id: "3",
//     tag: "Clean Development Mechanism",
//   },
//   {
//     _id: "4",
//     tag: "Forestry-based",
//   },
//   {
//     _id: "5",
//     tag: "Renewable Energy-based",
//   },
//   {
//     _id: "6",
//     tag: "Groundwater Recharge",
//   },
//   {
//     _id: "7",
//     tag: "Wetlands Restoration",
//   },
//   {
//     _id: "8",
//     tag: "Drip Irrigation",
//   },
//   {
//     _id: "9",
//     tag: "Rainwater Harvesting",
//   },
//   {
//     _id: "10",
//     tag: "Endangered Species",
//   },
//   {
//     _id: "11",
//     tag: "Coral Reefs",
//   },
//   {
//     _id: "12",
//     tag: "Wetlands",
//   },
//   {
//     _id: "13",
//     tag: "Grasslands",
//   },
//   {
//     _id: "14",
//     tag: "Electronic Waste",
//   },
//   {
//     _id: "15",
//     tag: "Hazardous Waste",
//   },
//   {
//     _id: "16",
//     tag: "Single-use Plastics",
//   },
//   {
//     _id: "17",
//     tag: "Biodegradable",
//   },
//   {
//     _id: "18",
//     tag: "Low Emission Zones",
//   },
//   {
//     _id: "19",
//     tag: "Particulate Matter Reduction",
//   },
//   {
//     _id: "20",
//     tag: "VOCs (Volatile Organic Compounds)",
//   },
//   {
//     _id: "21",
//     tag: "Nitrogen Oxides (NOx)",
//   },
//   {
//     _id: "22",
//     tag: "Urban Forestry",
//   },
//   {
//     _id: "23",
//     tag: "Native Species",
//   },
//   {
//     _id: "24",
//     tag: "Fire Prevention",
//   },
//   {
//     _id: "25",
//     tag: "Agroforestry",
//   },
//   {
//     _id: "26",
//     tag: "Non-GMO",
//   },
//   {
//     _id: "27",
//     tag: "Soil Health",
//   },
//   {
//     _id: "28",
//     tag: "Aquaponics",
//   },
//   {
//     _id: "29",
//     tag: "Marine Protected Areas",
//   },
//   {
//     _id: "30",
//     tag: "Permaculture Principles",
//   },
//   {
//     _id: "31",
//     tag: "Biophilic Design",
//   },
//   {
//     _id: "32",
//     tag: "Water Sensitive Design",
//   },
//   {
//     _id: "33",
//     tag: "Soil Health Management",
//   },
//   {
//     _id: "34",
//     tag: "AI & Machine Learning for Climate",
//   },
//   {
//     _id: "35",
//     tag: "IoT for Environmental Monitoring",
//   },
//   {
//     _id: "36",
//     tag: "Climate Modeling Software",
//   },
//   {
//     _id: "37",
//     tag: "Electric Vehicle Tech",
//   },
//   {
//     _id: "38",
//     tag: "Smart Grid Solutions",
//   },
//   {
//     _id: "39",
//     tag: "Residential",
//   },
//   {
//     _id: "40",
//     tag: "Commercial",
//   },
//   {
//     _id: "41",
//     tag: "Utility-scale",
//   },
//   {
//     _id: "42",
//     tag: "Off-grid",
//   },
// ];
