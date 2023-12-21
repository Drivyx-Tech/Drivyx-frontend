// "use client";

import idea from "../public/icon/idea.png";
import connection from "../public/icon/connection.svg";

export type FeatureType = {
  heading: string;
  content: string;
  icon?: any;
  CTAbtn?: string;
  directTo: string;
  maxW?: any;
};

export const FEATURE_ITEMS = [
  {
    heading: "Commitment to ESG for a Brighter Future",
    content:
      "At Drivyx, we champion sustainability. Our unique marketplace seamlessly connects investors and project owners, simplifying your journey to support environmentally conscious initiatives.",
  },
  {
    heading: "Diverse Projects Driving Positive Change",
    content:
      "With Drivyx, you'll discover a diverse array of sustainability-focused projects—from renewable energy to eco-friendly infrastructure. There's something for everyone passionate about making a difference.",
  },
  {
    heading: "Join Us in Crafting a Greener Future",
    content:
      "Ready to contribute to positive change? Drivyx is your partner, facilitating investments in projects aligned with your values for a more sustainable world.",
  },
];

export const ABOUT_ITEMS = [
  {
    heading: "The Urgency of Sustainability",
    content:
      "Our planet is grappling with climate change, biodiversity loss, and resource depletion. Traditional business models often contribute to these issues, emphasizing the urgency for transformative approaches. Drivyx addresses this urgency by focusing on biodiversity, sustainability, circular economy, and regenerative design.",
    icon: idea,
    CTAbtn: "Explore >",
    directTo: "/marketplace",
  },
  {
    heading: "Connecting Investors and Projects",
    content:
      "Drivyx plays a vital role in connecting investors with project owners, fostering collaboration that makes it easier to support environmentally friendly initiatives. This seamless connection is a powerful catalyst for change, enabling a swift and effective response to the pressing challenges of our time.",
    icon: connection,
    CTAbtn: "Explore >",
    directTo: "/marketplace",
  },
];
