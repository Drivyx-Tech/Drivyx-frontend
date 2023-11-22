import { FaCottonBureau, FaHandsHelping } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { TbBrandCarbon, TbTransform } from "react-icons/tb";
import { GrSolaris, GrContact } from "react-icons/gr";
import {
  MdOutlineAgriculture,
  MdOutlineEnergySavingsLeaf,
} from "react-icons/md";
import { GiWaterSplash, GiGreenhouse } from "react-icons/gi";
import {
  BiAnalyse,
  BiNetworkChart,
  BiLoaderCircle,
  BiWater,
  BiDonateHeart,
} from "react-icons/bi";

interface NavItem {
  label: string;
  href?: string;
  children?: {
    tag: string;
    othersNav: ChildrenNavItems[];
  }[];
}

export type ChildrenNavItems = {
  iconLabel: IconType;
  label: string;
  subLabel: string;
  href: string;
};

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Overview",
    href: "/overview",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  // {
  //   label: "Explore More",
  //   href: "#",
  // children: [
  //   {
  //     tag: 'Discover Our Services',
  //     othersNav: [
  //       {
  //         iconLabel: BiAnalyse,
  //         label: 'Sustainability',
  //         subLabel: 'Sustainable Solutions for a Better Future',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: BiAnalyse,
  //         label: 'Innovations',
  //         subLabel: 'Driving Change Through Sustainable Practices',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: BiNetworkChart,
  //         label: 'Renewable Energy',
  //         subLabel: 'Harnessing the Power of Nature for aGreener World',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: BiLoaderCircle,
  //         label: 'Circular Economy',
  //         subLabel:
  //           'Creating a Sustainable Future ThroughResource Efficiency',
  //         href: '#',
  //       },
  //     ],
  //   },
  //   {
  //     tag: 'Our Expertise Areas',
  //     othersNav: [
  //       {
  //         iconLabel: BiWater,
  //         label: 'Waste Management ',
  //         subLabel: 'Sustainable Solutions for Effective Waste Management',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: GiWaterSplash,
  //         label: 'Water Conservation',
  //         subLabel:
  //           'Preserving Our Precious Resource Through Sustainable Practices',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: GiGreenhouse,
  //         label: 'Green Building',
  //         subLabel:
  //           'Green Building Harnessing the Power of Nature for a Greener World',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: TbBrandCarbon,
  //         label: 'Carbon Footprint',
  //         subLabel: 'Reducing Emissions and Mitigating Climate Change',
  //         href: '#',
  //       },
  //     ],
  //   },
  //   {
  //     tag: 'Our Projects Showcase',
  //     othersNav: [
  //       {
  //         iconLabel: GrSolaris,
  //         label: 'Solar Energy',
  //         subLabel: 'Haressing the Power of the Sun for aSustainable Future',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: TbTransform,
  //         label: 'Green Transportation',
  //         subLabel: 'Promoting Sustainable Mobility for aCleaner Environment',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: MdOutlineAgriculture,
  //         label: 'Sustainable Agriculture',
  //         subLabel:
  //           'Farming Practices that Nourish the Planetand Protect Nature',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: MdOutlineEnergySavingsLeaf,
  //         label: 'Renewable Resources',
  //         subLabel: "Harnessing Nature's Bounty for a Sustainable Future",
  //         href: '#',
  //       },
  //     ],
  //   },
  //   {
  //     tag: 'Join Qur Movement',
  //     othersNav: [
  //       {
  //         iconLabel: FaCottonBureau,
  //         label: 'Sustainability',
  //         subLabel:
  //           "Together, Let's Create a Better World forFuture Generations",
  //         href: '#',
  //       },
  //       {
  //         iconLabel: FaHandsHelping,
  //         label: 'Get Involved',
  //         subLabel: 'Join Us in Making a Positive Impact on the Planet',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: BiDonateHeart,
  //         label: 'Donate Today',
  //         subLabel: 'Support Our Mission to Build aSustainable Future',
  //         href: '#',
  //       },
  //       {
  //         iconLabel: GrContact,
  //         label: 'Contact Us',
  //         subLabel: 'Reach Out to Us for More Information and Collection',
  //         href: '#',
  //       },
  //     ],
  //   },
  // ],
  // },
];
