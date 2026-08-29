import Link from "next/link";
import { MoonIcon } from "@phosphor-icons/react/dist/ssr";
import { navbar_config } from "@/config/navbar";
import { SoundToggle } from "@/components/common/sound-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between py-6 px-4 -mx-4 backdrop-blur-md bg-background/60 border-y border-border/40">
      <nav className="flex items-center gap-6 text-sm font-medium">
        {navbar_config.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`transition-colors ${
              item.href === "/"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <SoundToggle />
        <button
          aria-label="Toggle Dark Mode"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <MoonIcon size={18} weight="regular" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

