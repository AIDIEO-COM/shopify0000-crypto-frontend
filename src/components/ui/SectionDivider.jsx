import React from "react"; 

const SectionDivider = ({ color = "#FFA500", height = "6vw" }) => {
  return (
    <div
      className="section-divider-display my-24"
      style={{
        "--stroke-thickness": "6px",
        "--stroke-dasharray": "0",
        "--stroke-linecap": "round",
        "--divider-height": height,
        position: "relative",
        width: "100%",
        height: height,
        overflow: "hidden",
      }}
    >
      {/* SVG for the wave shape */}
      <svg
        className="section-divider-svg-clip"
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <clipPath id="section-divider-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,100 C480,-200 960,300 1440,-200 L1440,100 Z"
            fill="currentColor"
          ></path>
        </clipPath>
      </svg>

      {/* SVG for the wave stroke */}
      <svg
        className="section-divider-svg-stroke"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          fill: "none",
          stroke: color,
          strokeWidth: "var(--stroke-thickness)",
          strokeDasharray: "var(--stroke-dasharray)",
          strokeLinecap: "var(--stroke-linecap)",
        }}
      >
        <path
          d="M0,100 C480,-200 960,300 2440,-200"
          vectorEffect="non-scaling-stroke"
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
