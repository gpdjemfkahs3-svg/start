export const BEATS = [
  { id: "python", duration: 60 },
  { id: "cropSnap", duration: 90 },
  { id: "claudeFlow", duration: 75 },
  { id: "costGlitch", duration: 90 },
  { id: "geminiFlow", duration: 75 },
  { id: "converge", duration: 90 },
  { id: "stamp", duration: 75 },
] as const;

export const getBeatStart = (index: number): number =>
  BEATS.slice(0, index).reduce((sum, b) => sum + b.duration, 0);

export const TOTAL_DURATION = BEATS.reduce((sum, b) => sum + b.duration, 0);
