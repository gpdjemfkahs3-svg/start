import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FileIcon } from "../../components/FileIcon";
import { MarkerText } from "../../components/MarkerText";
import { COLORS } from "../../tokens";

const PARTICLES = new Array(10).fill(0).map((_, i) => i);

export const Beat6Converge: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: "50%", top: "30%", transform: "translate(-50%, -50%)" }}>
        <MarkerText text={"나도 일 잘해!"} startFrame={4} fontSize={72} color={COLORS.gemini} rotate={-3} />
      </div>

      <div style={{ position: "absolute", left: "50%", top: "58%", width: 400, height: 400, transform: "translate(-50%, -50%)" }}>
        {PARTICLES.map((i) => {
          const angle = (i / PARTICLES.length) * Math.PI * 2;
          const startRadius = 170;
          const localStart = 26 + i * 2;
          const progress = interpolate(frame, [localStart, localStart + 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: (t) => t * t * (3 - 2 * t),
          });
          const radius = startRadius * (1 - progress);
          const spiralAngle = angle + progress * Math.PI * 1.4;
          const x = 200 + Math.cos(spiralAngle) * radius;
          const y = 200 + Math.sin(spiralAngle) * radius;
          const opacity = interpolate(progress, [0, 0.85, 1], [1, 1, 0]);

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: 26,
                height: 34,
                background: COLORS.paper,
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 3,
                opacity,
              }}
            />
          );
        })}
        <div style={{ position: "absolute", left: 200 - 65, top: 200 - 65 }}>
          <FileIcon size={130} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
