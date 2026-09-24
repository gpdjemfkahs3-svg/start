import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "../tokens";

type Props = {
  text: string;
  startFrame: number;
  fontSize?: number;
  color?: string;
  rotate?: number;
  variant?: "marker" | "head";
};

export const MarkerText: React.FC<Props> = ({
  text,
  startFrame,
  fontSize = 88,
  color = COLORS.ink,
  rotate = -3,
  variant = "marker",
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
    config: { damping: 10, stiffness: 140, mass: 0.6 },
  });

  return (
    <div
      style={{
        fontFamily: variant === "marker" ? FONTS.marker : FONTS.head,
        fontSize,
        color,
        fontWeight: variant === "marker" ? 400 : 700,
        transform: `scale(${scale}) rotate(${rotate}deg)`,
        textAlign: "center",
        WebkitTextStroke: `2px ${COLORS.paper}`,
        paintOrder: "stroke fill",
        whiteSpace: "pre-wrap",
        lineHeight: 1.15,
      }}
    >
      {text}
    </div>
  );
};
