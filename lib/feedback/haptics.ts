export type HapticPattern =
  | "light"
  | "medium"
  | "heavy"
  | "success"
  | "warning"
  | "error"
  | "selection";

const HAPTIC_PATTERNS: Record<HapticPattern, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 40,
  selection: 5,
  success: [10, 50, 20],
  warning: [30, 50, 30],
  error: [50, 50, 50, 50, 50],
};

class HapticsFeedback {
  private isEnabled: boolean = true;

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("haptics-enabled");
      if (stored !== null) {
        this.isEnabled = stored === "true";
      }
    }
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("haptics-enabled", String(this.isEnabled));
    }
    return this.isEnabled;
  }

  public get enabled(): boolean {
    return this.isEnabled;
  }

  public set enabled(val: boolean) {
    this.isEnabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("haptics-enabled", String(val));
    }
  }

  public trigger(pattern: HapticPattern = "light") {
    if (!this.isEnabled) return;
    if (
      typeof window !== "undefined" &&
      "navigator" in window &&
      "vibrate" in navigator
    ) {
      try {
        navigator.vibrate(HAPTIC_PATTERNS[pattern]);
      } catch {
        // Ignore haptics errors silently
      }
    }
  }
}

export const haptics = new HapticsFeedback();
