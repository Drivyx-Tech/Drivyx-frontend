import * as React from "react";
const LogoTurbine = (props: { width?: string; height?: string }) => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 1024 1024">
      <rect
        width={props.width}
        height={props.height}
        x={-512}
        y={-512}
        fill="none"
        rx={0}
        ry={0}
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(512 512)"
      />
      <linearGradient
        id="a"
        x1={16.262}
        x2={80.8}
        y1={51.306}
        y2={51.306}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0%"
          style={{
            stopColor: "#4ef7ff",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#ffcd1b",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <path
        d="M78.3 91.9H57.7l-2.1-36.3c2.9 3.7 6.6 6.9 10.8 9l8.4 4.4c.5.3 1 .4 1.6.4.7 0 1.4-.2 2-.7.8-.6 1.3-1.6 1.4-2.6 0-1-.4-2-1.2-2.7l-22-18.3c.3-.6.4-1.3.4-2s-.1-1.3-.4-2l1-1.5c4-5.9 6-13 5.6-20.1l-.5-9.4c-.1-1.3-.8-2.4-2-2.9-.9-.4-2-.4-2.9.1s-1.5 1.4-1.7 2.4L51.3 38c-1.4.2-2.6.9-3.4 1.9l-1.8-.1c-7.1-.6-14.3 1.2-20.3 5l-8 5c-1.1.7-1.7 1.9-1.5 3.2.1 1 .7 1.9 1.5 2.5.5.3 1.2.5 1.8.5.4 0 .8-.1 1.1-.2l27-9.6c.2.3.5.6.9.9l-2.6 45H22.2c-.7 0-1.4.6-1.4 1.3s.6 1.3 1.4 1.3h56.1c.7 0 1.4-.6 1.4-1.3s-.6-1.5-1.4-1.5zM77 66.1c0 .1 0 .3-.3.5-.2.1-.5.2-.7.1l-8.4-4.4c-5.8-3-10.5-7.9-13.3-13.8l-.3-.8c.3-.1.6-.3.9-.5l21.9 18.4c.2.1.2.4.2.5zM58.7 10.2c0-.3.2-.4.3-.5s.3-.1.6 0 .4.3.4.5l.5 9.4c.3 6.5-1.5 13.1-5.2 18.4l-.5.8c-.3-.2-.6-.4-.9-.5l4.8-28.1zm-6.8 30.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4-2.4-1.1-2.4-2.4 1-2.4 2.4-2.4zM19.8 53.1c-.3.1-.5 0-.6-.1s-.2-.1-.2-.4c0-.2.1-.5.3-.6l8-5c5.5-3.5 12.1-5.1 18.6-4.6l.9.1c0 .2-.1.4-.1.6 0 .2 0 .3.1.5l-27 9.5zm28.9 38.8 2.5-43.7.7 1.4c.2.5.5.9.8 1.4L55 91.9h-6.3z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "url(#a)",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(9.28048 0 0 9.28048 66.25 40.499)"
      />
    </svg>
  );
};
export default LogoTurbine;
