type Listener = () => void;

class SoundFeedback {
  private audioCtx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private listeners: Set<Listener> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sound-enabled");
      if (stored !== null) {
        this.isEnabled = stored === "true";
      }
    }
  }

  public subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  public getSnapshot = (): boolean => {
    return this.isEnabled;
  };

  public getServerSnapshot = (): boolean => {
    return true;
  };

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.audioCtx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (typeof window !== "undefined") {
      localStorage.setItem("sound-enabled", String(this.isEnabled));
    }
    this.listeners.forEach((l) => l());
    return this.isEnabled;
  }

  public get enabled(): boolean {
    return this.isEnabled;
  }

  public set enabled(val: boolean) {
    this.isEnabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("sound-enabled", String(val));
    }
    this.listeners.forEach((l) => l());
  }

  public playClick(freq = 600, duration = 0.05) {
    if (!this.isEnabled) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio errors silently
    }
  }

  public playPop() {
    this.playClick(800, 0.04);
  }

  public playSwitch() {
    this.playClick(400, 0.06);
  }
}

export const sound = new SoundFeedback();
