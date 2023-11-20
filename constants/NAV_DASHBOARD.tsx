import {
  BiAnalyse,
  BiNetworkChart,
  BiLoaderCircle,
  BiWater,
  BiDonateHeart,
} from "react-icons/bi";

export const NAV_DASHBOARD = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <BiDonateHeart />,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: <BiAnalyse />,
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: <BiNetworkChart />,
  },
];
