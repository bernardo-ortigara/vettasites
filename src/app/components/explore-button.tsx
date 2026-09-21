"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ExploreButton({
  href,
  label = "Explore Now",
  tone = "light",
  className
}: {
  href: string;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const color = tone === "light" ? "var(--color-001)" : "var(--foreground)";
  const transition = { type: "spring" as const, bounce: 0.2, duration: 0.4 };

  return (
    <motion.a
      href={href}
      className={className}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ opacity: hovered ? 0.7 : 1 }}
      transition={transition}
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: 10,
        width: "min-content",
        overflow: "clip",
        cursor: "pointer",
        textDecoration: "none"
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 144,
          width: "min-content",
          overflow: "clip"
        }}
      >
        <div style={{ flex: "none", whiteSpace: "pre" }}>
          <p
            style={{
              color,
              fontFamily: "'BDO Grotesk Variable', sans-serif",
              fontSize: 16,
              fontWeight: 1000,
              lineHeight: "20.2px",
              letterSpacing: "-0.5px",
              margin: 0
            }}
          >
            {label}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            width: "min-content",
            overflow: "hidden"
          }}
        >
          <motion.div
            layout
            transition={transition}
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: hovered ? "flex-end" : "flex-start",
              gap: 10,
              height: 8,
              width: "min-content",
              overflow: "visible",
              rotate: 45
            }}
          >
            <Chevron color={color} transition={transition} />
            <Chevron color={color} transition={transition} />
          </motion.div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "none", height: 1, width: "auto", backgroundColor: color }} />
    </motion.a>
  );
}

function Chevron({ color, transition }: { color: string; transition: object }) {
  return (
    <motion.div
      layout
      transition={transition}
      style={{
        flex: "none",
        width: 8,
        height: 8,
        position: "relative",
        rotate: -45,
        borderTop: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
        boxSizing: "border-box"
      }}
    />
  );
}
