import React from "react";
import { AbsoluteFill } from "remotion";
import { FileIcon } from "../../components/FileIcon";
import { HandDrawnArrow } from "../../components/HandDrawnArrow";
import { ToolBadge } from "../../components/ToolBadge";
import { MarkerText } from "../../components/MarkerText";
import { COLORS } from "../../tokens";

export const Beat3ClaudeFlow: React.FC = () => {
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: "18%", top: "42%", transform: "translate(-50%, -50%)" }}>
        <FileIcon size={130} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}>
        <HandDrawnArrow startFrame={8} durationInFrames={22} width={280} />
      </div>
      <div style={{ position: "absolute", left: "82%", top: "38%", transform: "translate(-50%, -50%)" }}>
        <ToolBadge label="Claude" color={COLORS.claude} startFrame={26} size={160} />
      </div>
      <div style={{ position: "absolute", left: "50%", bottom: "24%", transform: "translateX(-50%)", width: "90%", textAlign: "center" }}>
        <MarkerText text={"판독은... 클로드!"} startFrame={38} fontSize={64} rotate={-2} />
      </div>
    </AbsoluteFill>
  );
};
