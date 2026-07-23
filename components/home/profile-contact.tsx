import {
  EnvelopeSimpleIcon,
  MapPinAreaIcon,
} from "@phosphor-icons/react/dist/ssr";
import { profileConfig } from "@/config/profile";

export function ProfileContact() {
  return (
    <div className="flex flex-wrap gap-8 sm:gap-12 mt-8 pt-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Location
        </span>
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-foreground">
          <MapPinAreaIcon
            weight="regular"
            className="w-5 h-5 text-muted-foreground"
          />
          <span>{profileConfig.location}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Email
        </span>
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-foreground">
          <EnvelopeSimpleIcon
            weight="regular"
            className="w-5 h-5 text-muted-foreground"
          />
          <a
            href={`mailto:${profileConfig.email}`}
            className="hover:underline hover:text-primary transition-colors"
          >
            {profileConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
