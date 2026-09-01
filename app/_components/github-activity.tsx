"use client";

import { format, parseISO } from "date-fns";
import { Section } from "@/components/common/section";
import {
  type Activity,
  CalendarHeatmap,
  CalendarHeatmapBlock,
  CalendarHeatmapBody,
  CalendarHeatmapFooter,
  CalendarHeatmapLegend,
  CalendarHeatmapStat,
} from "@/components/heatmap/calendar-heatmap";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Spinner } from "@/components/ui/spinner";
import { githubConfig } from "@/config/github";

import { useGitHubContributions } from "./use-github-contributions";

function ContributionCalendar({ data }: { data: Activity[] }) {
  return (
    <CalendarHeatmap
      className="w-full p-0"
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
      levels={5}
      weekStart={0}
      continuousMonths
      colors={{
        empty: "var(--color-muted)",
        scale: "var(--color-primary)",
      }}
    >
      <CalendarHeatmapBody
        className="overflow-x-hidden pt-0 [&>div>svg]:h-auto [&>div>svg]:w-full"
        hideYearLabels
        hideWeekdayLabels
        labelClassName="fill-muted-foreground text-xs"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger
              delay={100}
              render={
                <CalendarHeatmapBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              }
            />
            <TooltipContent
              className="pointer-events-none whitespace-nowrap text-xs"
              side="top"
              sideOffset={6}
            >
              <p>
                {activity.value} contribution
                {activity.value === 1 ? "" : "s"} on{" "}
                {format(parseISO(activity.date), "MMM d, yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </CalendarHeatmapBody>

      <CalendarHeatmapFooter>
        <CalendarHeatmapStat label="{{value}} contributions · {{year}}" />
        <CalendarHeatmapLegend />
      </CalendarHeatmapFooter>
    </CalendarHeatmap>
  );
}

export function GitHubActivity() {
  const state = useGitHubContributions(githubConfig.username);

  return (
    <Section
      className="pt-0"
      id="github-activity"
      aria-label={`GitHub activity for ${githubConfig.username}`}
      title="GitHub Activity"
    >
      {state.status === "success" ? (
        <ContributionCalendar data={state.contributions} />
      ) : state.status === "error" ? (
        <p
          className="flex min-h-36 items-center text-muted-foreground text-xs"
          role="alert"
        >
          GitHub activity is unavailable.
        </p>
      ) : (
        <div className="flex min-h-36 items-center justify-center">
          <Spinner />
        </div>
      )}
    </Section>
  );
}

export default GitHubActivity;
