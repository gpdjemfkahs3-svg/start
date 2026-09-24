import React from "react";
import { COLORS } from "../tokens";

type Props = {
  x: number;
  y: number;
  rotate?: number;
  width?: number;
  height?: number;
};

export const PhotoCard: React.FC<Props> = ({
  x,
  y,
  rotate = 0,
  width = 150,
  height = 190,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width,
      height,
      background: COLORS.paper,
      border: `4px solid ${COLORS.ink}`,
      borderRadius: 6,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 10,
        background:
          "repeating-linear-gradient(135deg, #e5e5e0, #e5e5e0 8px, #d8d8d2 8px, #d8d8d2 16px)",
        borderRadius: 2,
      }}
    />
  </div>
);
