import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "../tokens";

type Props = {
  label: string;
  color: string;
  startFrame: number;
  size?: number;
};

export const ToolBadge: React.FC<Props> = ({
  label,
  color,
  startFrame,
  size = 150,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;

  if (localFrame < 0) {
    return null;
  }

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 9, stiffness: 160, mass: 0.7 },
  });
  const wobble = localFrame < 20 ? Math.sin(localFrame / 5) * 4 : 0;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale}) rotate(${wobble}deg)`,
        boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
        border: `4px solid ${COLORS.paper}`,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.head,
          fontWeight: 700,
          fontSize: size * 0.22,
          color: COLORS.paper,
          textAlign: "center",
          padding: "0 8px",
        }}
      >
        {label}
      </span>
    </div>
  );
};
