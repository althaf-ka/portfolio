import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedTitle } from "@/components/home/animated-title";
import { ProfileBio } from "@/components/home/profile-bio";
import { profileConfig } from "@/config/profile";

export default function ProfileHeader() {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="relative w-auto h-40 sm:h-48 md:h-56 -mx-4 overflow-hidden border-b border-border/40">
        <Image
          src="/assets/banner.png"
          alt="Profile Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="relative">
        <div className="absolute -top-12 sm:-top-16 md:-top-20">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 border-4 border-background bg-background">
            <AvatarImage src="https://github.com/shadcn.png" alt={profileConfig.name} />
            <AvatarFallback className="text-2xl font-semibold">
              AK
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="pt-14 sm:pt-16 md:pt-20 pb-4 flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {profileConfig.name}
          </h1>
          <AnimatedTitle />
          <ProfileBio />
        </div>
      </div>
    </div>
  );
}
