"use client";

import { panFor, playSpec, set, unlock } from "@foleyjs/core";
import type { PlayHandle, Spec } from "@foleyjs/core";
import { useCallback, useEffect, useRef } from "react";

type StackSoundInteraction = "hover" | "press";

const HARMONY = [-5, -3, 0, 2, 4, 7] as const;
const HARMONIC_RATIOS = [1.25, 4 / 3, 1.5, 2] as const;

interface StackSoundProfile {
  pitch: number;
  spec: Spec;
}

function hashName(name: string) {
  let hash = 2_166_136_261;

  for (const character of name) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16_777_619);
  }

  return hash >>> 0;
}

function byteFraction(hash: number, shift: number) {
  return ((hash >>> shift) & 0xff) / 0xff;
}

function createSoundProfile(name: string, index: number): StackSoundProfile {
  const hash = hashName(name);
  const reverseHash = hashName(Array.from(name).reverse().join(""));
  const movement = byteFraction(hash, 8);
  const brightness = byteFraction(hash, 16);
  const resonance = byteFraction(reverseHash, 8);
  const harmonicRatio = HARMONIC_RATIOS[hash % HARMONIC_RATIOS.length];
  const note = HARMONY[index % HARMONY.length];
  const fundamental = 392;

  return {
    pitch: note,
    spec: [
      {
        kind: "tone",
        at: 0,
        wave: "sine",
        f: fundamental,
        f2: fundamental * (0.985 + movement * 0.01),
        glide: 0.1 + movement * 0.025,
        a: 0.006,
        d: 0.12 + resonance * 0.04,
        peak: 0.095,
        send: 0.04 + resonance * 0.015,
      },
      {
        kind: "tone",
        at: 0.016 + brightness * 0.006,
        wave: "sine",
        f: fundamental * harmonicRatio,
        f2: null,
        glide: 0.08,
        a: 0.008,
        d: 0.08 + brightness * 0.03,
        peak: 0.006 + resonance * 0.004,
        send: 0.055,
      },
    ],
  };
}

export function useStackSound() {
  const activeTone = useRef<PlayHandle | undefined>(undefined);

  useEffect(() => {
    set({
      volume: 0.36,
      space: 0.07,
      theme: "soft",
      localize: 0.12,
    });

    const enableAudio = () => {
      unlock();
    };

    window.addEventListener("pointerdown", enableAudio, { once: true });
    window.addEventListener("keydown", enableAudio, { once: true });

    return () => {
      activeTone.current?.stop();
      window.removeEventListener("pointerdown", enableAudio);
      window.removeEventListener("keydown", enableAudio);
    };
  }, []);

  return useCallback(
    (
      name: string,
      index: number,
      element: HTMLElement,
      interaction: StackSoundInteraction,
    ) => {
      activeTone.current?.stop();

      unlock();

      const profile = createSoundProfile(name, index);

      activeTone.current = playSpec(profile.spec, {
        id: `stack-${interaction}-${name}`,
        pitch: profile.pitch,
        volume: interaction === "press" ? 0.62 : 0.68,
        pan: panFor(element),
      });
    },
    [],
  );
}
