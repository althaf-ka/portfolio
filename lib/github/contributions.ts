const GITHUB_CONTRIBUTIONS_API_URL =
  "https://github-contributions-api.jogruber.de/v4";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

type ApiContribution = {
  date: string;
  count: number;
};

export type GitHubContribution = {
  date: string;
  value: number;
};

const isApiContribution = (value: unknown): value is ApiContribution => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const contribution = value as Record<string, unknown>;

  return (
    typeof contribution.date === "string" &&
    DATE_PATTERN.test(contribution.date) &&
    typeof contribution.count === "number" &&
    Number.isFinite(contribution.count) &&
    contribution.count >= 0
  );
};

export async function fetchGitHubContributions({
  username,
  year = "last",
  signal,
}: {
  username: string;
  year?: number | "last";
  signal?: AbortSignal;
}): Promise<GitHubContribution[]> {
  const url = new URL(
    `${GITHUB_CONTRIBUTIONS_API_URL}/${encodeURIComponent(username)}`,
  );
  url.searchParams.set("y", String(year));

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`GitHub contributions request failed: ${response.status}`);
  }

  const payload: unknown = await response.json();

  if (typeof payload !== "object" || payload === null) {
    throw new Error("GitHub contributions response is invalid");
  }

  const { contributions } = payload as Record<string, unknown>;

  if (
    !Array.isArray(contributions) ||
    contributions.length === 0 ||
    !contributions.every(isApiContribution)
  ) {
    throw new Error("GitHub contributions response is invalid");
  }

  return contributions.map(({ date, count }) => ({
    date,
    value: count,
  }));
}
