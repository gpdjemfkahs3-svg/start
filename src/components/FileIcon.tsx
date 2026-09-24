import React from "react";
import { COLORS } from "../tokens";

type Props = {
  size?: number;
  color?: string;
};

export const FileIcon: React.FC<Props> = ({ size = 140, color = COLORS.ink }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path
      d="M22,8 H60 L78,26 V92 H22 Z"
      fill={COLORS.paper}
      stroke={color}
      strokeWidth={5}
      strokeLinejoin="round"
    />
    <path d="M60,8 V26 H78 Z" fill={color} opacity={0.15} />
    <line x1="32" y1="46" x2="68" y2="46" stroke={color} strokeWidth={4} strokeLinecap="round" />
    <line x1="32" y1="60" x2="68" y2="60" stroke={color} strokeWidth={4} strokeLinecap="round" />
    <line x1="32" y1="74" x2="54" y2="74" stroke={color} strokeWidth={4} strokeLinecap="round" />
  </svg>
);
