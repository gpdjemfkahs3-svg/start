import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { MarkerText } from "../../components/MarkerText";
import { COLORS, FONTS } from "../../tokens";

export const Beat7Stamp: React.FC = () => {
  const frame = useCurrentFrame();

  const stampScale = interpolate(frame, [4, 10, 16], [2.4, 0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const stampOpacity = interpolate(frame, [4, 9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shake = frame > 9 && frame < 16 ? Math.sin(frame * 6) * 3 : 0;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `scale(${stampScale}) rotate(${-6 + shake}deg)`,
          opacity: stampOpacity,
          border: `6px solid ${COLORS.warn}`,
          borderRadius: 16,
          padding: "18px 36px",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.head,
            fontWeight: 700,
            fontSize: 72,
            color: COLORS.warn,
          }}
        >
          데이터화 완료 ✓
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "30%",
          transform: "translateX(-50%)",
          width: "90%",
          textAlign: "center",
        }}
      >
        <MarkerText text={"회원님들 자료, 전부 데이터로"} startFrame={24} fontSize={52} rotate={1} />
      </div>
    </AbsoluteFill>
  );
};
