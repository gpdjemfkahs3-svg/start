import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { BEATS, getBeatStart } from "./timeline";
import { Beat1Python } from "./beats/Beat1Python";
import { Beat2CropSnap } from "./beats/Beat2CropSnap";
import { Beat3ClaudeFlow } from "./beats/Beat3ClaudeFlow";
import { Beat4CostGlitch } from "./beats/Beat4CostGlitch";
import { Beat5GeminiFlow } from "./beats/Beat5GeminiFlow";
import { Beat6Converge } from "./beats/Beat6Converge";
import { Beat7Stamp } from "./beats/Beat7Stamp";

const BEAT_COMPONENTS: React.FC[] = [
  Beat1Python,
  Beat2CropSnap,
  Beat3ClaudeFlow,
  Beat4CostGlitch,
  Beat5GeminiFlow,
  Beat6Converge,
  Beat7Stamp,
];

export const Episode3Segment: React.FC = () => {
  return (
    <AbsoluteFill>
      {BEATS.map((beat, i) => {
        const Component = BEAT_COMPONENTS[i];
        return (
          <Sequence key={beat.id} from={getBeatStart(i)} durationInFrames={beat.duration}>
            <Component />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
