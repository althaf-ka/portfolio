"use client";

import { useEffect, useState } from "react";

import {
  fetchGitHubContributions,
  type GitHubContribution,
} from "@/lib/github/contributions";

type GitHubContributionsState =
  | {
      status: "loading";
      contributions: [];
    }
  | {
      status: "success";
      contributions: GitHubContribution[];
    }
  | {
      status: "error";
      contributions: [];
    };

const INITIAL_STATE: GitHubContributionsState = {
  status: "loading",
  contributions: [],
};

export function useGitHubContributions(
  username: string,
): GitHubContributionsState {
  const [state, setState] =
    useState<GitHubContributionsState>(INITIAL_STATE);

  useEffect(() => {
    const controller = new AbortController();

    const loadContributions = async () => {
      try {
        const contributions = await fetchGitHubContributions({
          username,
          year: new Date().getUTCFullYear(),
          signal: controller.signal,
        });

        if (!controller.signal.aborted) {
          setState({ status: "success", contributions });
        }
      } catch {
        if (!controller.signal.aborted) {
          setState({ status: "error", contributions: [] });
        }
      }
    };

    void loadContributions();

    return () => controller.abort();
  }, [username]);

  return state;
}
