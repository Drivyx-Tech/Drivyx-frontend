type CompanySize = {
  id: string;
  name: string;
};

export const COMPANY_SIZE: CompanySize[] = [
  {
    id: "less_than_10",
    name: "Less than 10",
  },
  {
    id: "10_49",
    name: "10-49",
  },
  {
    id: "50_249",
    name: "50-249",
  },
  {
    id: "250_1,000",
    name: "250-1,000",
  },
  {
    id: "more_then_1,000",
    name: "More than 1,000",
  },
];
