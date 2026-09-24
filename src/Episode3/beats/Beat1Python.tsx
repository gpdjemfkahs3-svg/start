import React from "react";
import { AbsoluteFill } from "remotion";
import { MarkerText } from "../../components/MarkerText";
import { ToolBadge } from "../../components/ToolBadge";
import { COLORS } from "../../tokens";

export const Beat1Python: React.FC = () => {
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }}>
        <ToolBadge label="PY" color={COLORS.python} startFrame={4} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: "60%", transform: "translate(-50%, -50%)" }}>
        <MarkerText text={"파이썬??? 처음 써봄"} startFrame={14} fontSize={68} rotate={-4} />
      </div>
    </AbsoluteFill>
  );
};
