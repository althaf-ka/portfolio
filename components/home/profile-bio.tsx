import {
  EnvelopeSimpleIcon,
  MapPinAreaIcon,
  GithubLogo,
  XLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import { profileConfig } from "@/config/profile";

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github": return <GithubLogo weight="regular" className="w-5 h-5" />;
    case "x": return <XLogo weight="regular" className="w-5 h-5" />;
    case "linkedin": return <LinkedinLogo weight="regular" className="w-5 h-5" />;
    case "telegram": return <TelegramLogo weight="regular" className="w-5 h-5" />;
    default: return null;
  }
};

export function ProfileBio() {
  return (
    <div className="mt-3 flex flex-col gap-5">
      {/* Contact Details */}
      <div className="flex flex-wrap gap-8 sm:gap-12">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
            Location
          </span>
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <MapPinAreaIcon weight="regular" className="w-4 h-4 text-muted-foreground" />
            <span>{profileConfig.location}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
            Email
          </span>
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <EnvelopeSimpleIcon weight="regular" className="w-4 h-4 text-muted-foreground" />
            <a href={`mailto:${profileConfig.email}`} className="hover:underline hover:text-primary transition-colors">
              {profileConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <p className="text-[15px] sm:text-base text-foreground/80 leading-relaxed max-w-2xl text-pretty">
        {profileConfig.bio}
      </p>

      {/* Social Links */}
      {profileConfig.socials && profileConfig.socials.length > 0 && (
        <div className="flex items-center gap-4 pt-1">
          {profileConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.name}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
