import { STACK } from "@/config/stack";
import { Section } from "@/components/common/section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Stack() {
  return (
    <Section id="stack" title="Tech Stack">
      <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
        {STACK.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip key={item.name}>
              <TooltipTrigger
                aria-label={item.name}
                className="inline-flex size-9 sm:size-10 items-center justify-center rounded-lg bg-transparent transition-transform duration-200 ease-out hover:scale-115 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-foreground"
              >
                <Icon className="size-7 sm:size-8" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </Section>
  );
}

export default Stack;
