import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../tokens";

type Props = {
  startFrame: number;
  durationInFrames: number;
  width?: number;
  color?: string;
  flip?: boolean;
};

const PATH = "M8,40 C60,10 140,55 190,28 C205,21 210,30 208,20";
const PATH_LENGTH = 320;

export const HandDrawnArrow: React.FC<Props> = ({
  startFrame,
  durationInFrames,
  width = 260,
  color = COLORS.ink,
  flip = false,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const headOpacity = interpolate(progress, [0.82, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width={width}
      height={(width * 60) / 220}
      viewBox="0 0 220 60"
      style={{ transform: flip ? "scaleX(-1)" : undefined, overflow: "visible" }}
    >
      <path
        d={PATH}
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={PATH_LENGTH}
        strokeDashoffset={PATH_LENGTH * (1 - progress)}
        opacity={0.9}
      />
      <path
        d="M180,10 L208,20 L184,44"
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={headOpacity}
      />
    </svg>
  );
};
