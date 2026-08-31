export type GitHubActivity = {
  latestDate: string; // YYYY-MM-DD of the most recent push
  pushCount: number; // pushes within the trailing window
  repoCount: number; // distinct repos pushed to within the window
  windowDays: number;
};

const GITHUB_USERNAME = "Thompson-Jason";
const ACTIVITY_WINDOW_DAYS = 14;

// Note: GitHub's public events API payload for a PushEvent no longer
// includes a commit list or count (privacy change on their end) - just
// repo/ref/head. So this counts pushes and distinct repos, not commits.
type GitHubEvent = {
  type: string;
  created_at: string;
  repo?: { name?: string };
};

// Build-time only (this is a static export - there's no server to call this
// at request time). Reads public GitHub activity across all repos as a
// fallback signal for the homepage's "Recently Active" card when there's no
// recent blog post. Returns null on any failure (rate limit, network, empty
// activity) so the homepage can fall back further rather than break the
// build.
export async function getRecentGitHubActivity(): Promise<GitHubActivity | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return null;

    const events: unknown = await res.json();
    if (!Array.isArray(events)) return null;

    const pushEvents = (events as GitHubEvent[]).filter(
      (e) => e.type === "PushEvent"
    );
    if (pushEvents.length === 0) return null;

    const latestDate = pushEvents[0].created_at.slice(0, 10);

    const windowStart = Date.now() - ACTIVITY_WINDOW_DAYS * 24 * 60 * 60 * 1000;
    const recentPushes = pushEvents.filter(
      (e) => new Date(e.created_at).getTime() >= windowStart
    );

    if (recentPushes.length === 0) return null;

    const repoCount = new Set(
      recentPushes.map((e) => e.repo?.name).filter(Boolean)
    ).size;

    return {
      latestDate,
      pushCount: recentPushes.length,
      repoCount,
      windowDays: ACTIVITY_WINDOW_DAYS,
    };
  } catch {
    return null;
  }
}
