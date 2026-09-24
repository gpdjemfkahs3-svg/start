import React from "react";
import { random, useCurrentFrame } from "remotion";
import { COLORS } from "../tokens";

type Props = {
  active: boolean;
  seed?: string;
  children: React.ReactNode;
};

/**
 * Blend-mode based glitch layers corrupt the alpha channel on a
 * transparent export, so this stays to normal alpha compositing:
 * drop-shadow for the RGB split, a plain rgba bar for the scanline.
 */
export const GlitchOverlay: React.FC<Props> = ({
  active,
  seed = "glitch",
  children,
}) => {
  const frame = useCurrentFrame();

  if (!active) {
    return <>{children}</>;
  }

  const jitterX = (random(`${seed}-x-${frame}`) - 0.5) * 16;
  const sliceY = random(`${seed}-y-${frame}`) * 100;
  const sliceHeight = 2 + random(`${seed}-h-${frame}`) * 5;
  const showSlice = random(`${seed}-show-${frame}`) > 0.45;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `translateX(${jitterX}px)`,
          filter: `drop-shadow(5px 0 0 ${COLORS.glitchCyan}aa) drop-shadow(-5px 0 0 ${COLORS.glitchMagenta}aa)`,
        }}
      >
        {children}
      </div>
      {showSlice && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${sliceY}%`,
            height: `${sliceHeight}%`,
            background: "rgba(255,255,255,0.4)",
            transform: `translateX(${jitterX * 1.5}px)`,
          }}
        />
      )}
    </div>
  );
};
