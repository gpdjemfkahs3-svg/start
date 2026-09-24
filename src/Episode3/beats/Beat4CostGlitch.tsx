import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GlitchOverlay } from "../../components/GlitchOverlay";
import { MarkerText } from "../../components/MarkerText";
import { COLORS, FONTS } from "../../tokens";

export const Beat4CostGlitch: React.FC = () => {
  const frame = useCurrentFrame();

  const counterValue = Math.round(
    interpolate(frame, [10, 55], [0, 87400], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: (t) => t * t,
    }),
  );

  const flash = interpolate(frame, [10, 14, 20, 90], [0, 0.3, 0, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shakeX = frame > 8 && frame < 60 ? Math.sin(frame * 2.4) * 6 : 0;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: COLORS.warn, opacity: flash }} />
      <GlitchOverlay active={frame > 8 && frame < 60} seed="cost">
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            transform: `translateX(${shakeX}px)`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.head,
              fontWeight: 700,
              fontSize: 116,
              color: COLORS.warn,
              WebkitTextStroke: `4px ${COLORS.paper}`,
              paintOrder: "stroke fill",
            }}
          >
            ₩{counterValue.toLocaleString()}
          </div>
        </AbsoluteFill>
      </GlitchOverlay>
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "26%",
          transform: "translateX(-50%)",
          width: "90%",
          textAlign: "center",
        }}
      >
        <MarkerText
          text={"돈이... 너무 많이 든다"}
          startFrame={58}
          fontSize={64}
          color={COLORS.warn}
          rotate={-3}
        />
      </div>
    </AbsoluteFill>
  );
};
