import {
  BiAnalyse,
  BiNetworkChart,
  BiLoaderCircle,
  BiWater,
  BiDonateHeart,
} from "react-icons/bi";

export const NAV_DASHBOARD = [
  // {
  //   name: "Dashboard",
  //   href: "/dashboard",
  //   breadcrumbPath: ["dashboard", "dashboard"],
  //   icon: <BiDonateHeart size={"30px"} color={"white"} />,
  // },
  {
    name: "Profile",
    href: "/dashboard/profile",
    breadcrumbPath: ["dashboard", "profile"],
    icon: <BiAnalyse size={"30px"} color={"white"} />,
  },
  {
    name: "Project",
    href: "/dashboard/project",
    breadcrumbPath: ["dashboard", "project"],
    icon: <BiNetworkChart size={"30px"} color={"white"} />,
  },
  // {
  //   name: "Example 1",
  //   href: "/dashboard",
  //   breadcrumbPath: ["dashboard", "example"],
  //   icon: <BiNetworkChart size={"30px"} color={"white"} />,
  // },
  // {
  //   name: "Example 2",
  //   href: "/dashboard",
  //   breadcrumbPath: ["dashboard", "example"],
  //   icon: <BiNetworkChart size={"30px"} color={"white"} />,
  // },
  // {
  //   name: "Example 3",
  //   href: "/dashboard",
  //   breadcrumbPath: ["dashboard", "example"],
  //   icon: <BiNetworkChart size={"30px"} color={"white"} />,
  // },
];
