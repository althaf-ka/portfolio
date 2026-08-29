"use client";

import { useSyncExternalStore } from "react";
import {
  SpeakerHighIcon,
  SpeakerSlashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { sound, haptics } from "@/lib/feedback";

export function SoundToggle({ className = "" }: { className?: string }) {
  const isEnabled = useSyncExternalStore(
    sound.subscribe,
    sound.getSnapshot,
    sound.getServerSnapshot
  );

  const handleToggle = () => {
    const next = sound.toggle();
    if (next) {
      sound.playClick();
    }
    haptics.trigger("selection");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isEnabled ? "Mute sound" : "Unmute sound"}
      className={`text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      {isEnabled ? (
        <SpeakerHighIcon size={18} weight="regular" />
      ) : (
        <SpeakerSlashIcon size={18} weight="regular" />
      )}
    </button>
  );
}

export default SoundToggle;
