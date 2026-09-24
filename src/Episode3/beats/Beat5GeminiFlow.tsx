import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { FileIcon } from "../../components/FileIcon";
import { HandDrawnArrow } from "../../components/HandDrawnArrow";
import { ToolBadge } from "../../components/ToolBadge";
import { MarkerText } from "../../components/MarkerText";
import { GlitchOverlay } from "../../components/GlitchOverlay";
import { COLORS } from "../../tokens";

export const Beat5GeminiFlow: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: "18%", top: "42%", transform: "translate(-50%, -50%)" }}>
        <GlitchOverlay active={frame < 6} seed="recover">
          <FileIcon size={130} />
        </GlitchOverlay>
      </div>
      <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}>
        <HandDrawnArrow startFrame={6} durationInFrames={20} width={280} />
      </div>
      <div style={{ position: "absolute", left: "82%", top: "38%", transform: "translate(-50%, -50%)" }}>
        <ToolBadge label="Gemini" color={COLORS.gemini} startFrame={22} size={160} />
      </div>
      <div style={{ position: "absolute", left: "50%", bottom: "24%", transform: "translateX(-50%)", width: "90%", textAlign: "center" }}>
        <MarkerText text={"제미나이야 너가 해!"} startFrame={34} fontSize={60} rotate={2} />
      </div>
    </AbsoluteFill>
  );
};
