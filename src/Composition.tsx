import { CalculateMetadataFunction, Composition } from "remotion";
import { Episode3Segment } from "./Episode3/Episode3Segment";
import { TOTAL_DURATION } from "./Episode3/timeline";
import { FPS, VIDEO_WIDTH, VIDEO_HEIGHT } from "./tokens";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = async () => {
  return {
    defaultCodec: "prores",
    defaultVideoImageFormat: "png",
    defaultPixelFormat: "yuva444p10le",
    defaultProResProfile: "4444",
  };
};

export const Episode3Composition = () => {
  return (
    <Composition
      id="Ep03-ClaudeToGemini"
      component={Episode3Segment}
      durationInFrames={TOTAL_DURATION}
      fps={FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      calculateMetadata={calculateMetadata}
    />
  );
};
