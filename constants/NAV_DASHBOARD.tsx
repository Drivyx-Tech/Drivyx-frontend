import { BiAnalyse, BiNetworkChart, BiDonateHeart } from "react-icons/bi";

export const NAV_DASHBOARD = [
  {
    name: "Dashboard",
    href: "/dashboard",
    breadcrumbPath: ["dashboard", "dashboard"],
    icon: <BiDonateHeart size={"20px"} color={"white"} />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    breadcrumbPath: ["dashboard", "profile"],
    icon: <BiAnalyse size={"20px"} color={"white"} />,
  },
  {
    name: "Project",
    href: "/dashboard/project",
    breadcrumbPath: ["dashboard", "project"],
    icon: <BiNetworkChart size={"20px"} color={"white"} />,
  },
];
