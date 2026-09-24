import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PhotoCard } from "../../components/PhotoCard";
import { MarkerText } from "../../components/MarkerText";
import { COLORS } from "../../tokens";

const PHOTOS = [
  { x: 140, y: 300, rotate: -8 },
  { x: 560, y: 340, rotate: 6 },
  { x: 320, y: 620, rotate: -4 },
  { x: 700, y: 660, rotate: 5 },
];

export const Beat2CropSnap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      {PHOTOS.map((p, i) => {
        const enterStart = i * 8;
        const localEnter = frame - enterStart;
        const dropScale = spring({
          frame: localEnter,
          fps,
          config: { damping: 11, stiffness: 150 },
        });

        const cutAt = 42 + i * 9;
        const cutProgress = interpolate(frame, [cutAt, cutAt + 6], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const settled = interpolate(frame, [cutAt + 6, cutAt + 18], [0.74, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const squeeze =
          cutProgress > 0 && cutProgress < 1
            ? 1 - cutProgress * 0.26
            : frame >= cutAt
              ? settled
              : 1;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              transform: `scale(${Math.min(dropScale, 1) * squeeze}) rotate(${p.rotate}deg)`,
            }}
          >
            <PhotoCard x={0} y={0} rotate={0} />
            {cutProgress > 0 && cutProgress < 1 && (
              <div
                style={{
                  position: "absolute",
                  left: -10,
                  top: 90,
                  width: 170,
                  height: 4,
                  background: `repeating-linear-gradient(90deg, ${COLORS.warn}, ${COLORS.warn} 10px, transparent 10px, transparent 18px)`,
                }}
              />
            )}
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          bottom: 260,
          width: "100%",
          textAlign: "center",
        }}
      >
        <MarkerText text={"착착착 잘라줌"} startFrame={70} fontSize={60} rotate={2} />
      </div>
    </AbsoluteFill>
  );
};
