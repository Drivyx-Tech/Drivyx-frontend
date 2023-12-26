export type SideNavProps = {
  name: string;
  href: string;
  icon?: any;
};

const LinearGradient = ({ id, children }: any) => (
  <defs>
    <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#fdbb2d" />
      <stop offset="100%" stopColor="#22c1c3" />
    </linearGradient>
  </defs>
);

export const NAV_DASHBOARD: SideNavProps[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="4 3 17 17"
        width={20}
        height={20}
      >
        <LinearGradient id="gradient" />
        <path
          stroke="url(#gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={20}
        height={20}
      >
        <title>{"user--profile"}</title>
        <path
          d="M12 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Z"
          fill="url(#gradient)"
        />
        <path
          d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z"
          fill="url(#gradient)"
        />
        <path d="M22 4h10v2H22" fill="url(#gradient)" />
        <path d="M22 9h10v2H22" fill="url(#gradient)" />
        <path d="M22 14h7v2h-7" fill="url(#gradient)" />
        <path
          d="M0 0h32v32H0z"
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
        />
      </svg>
    ),
  },
  {
    name: "Project",
    href: "/dashboard/project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={20}
        height={20}
      >
        <path
          stroke="url(#gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.999 3v13.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h13.2m-1-6h-4m-3-8H7m11 4H9"
        />
      </svg>
    ),
  },
];
