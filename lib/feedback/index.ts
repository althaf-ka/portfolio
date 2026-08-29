export * from "./sound";
export * from "./haptics";

import { sound } from "./sound";
import { haptics, type HapticPattern } from "./haptics";

export function triggerFeedback(
  soundType: "click" | "pop" | "switch" = "click",
  hapticPattern: HapticPattern = "light"
) {
  if (soundType === "click") sound.playClick();
  else if (soundType === "pop") sound.playPop();
  else if (soundType === "switch") sound.playSwitch();

  haptics.trigger(hapticPattern);
}
