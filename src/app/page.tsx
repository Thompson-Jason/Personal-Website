import Image from "next/image";
import Link from "next/link";
import { RESPONSIVE_PADDING, BUTTON_STYLES } from "@/constants/styles";
import { getAllPosts } from "@/lib/blog";
import { generateDescription } from "@/lib/description";
import HomepageIntro from "@/components/homepageIntro";
import { getMostRecentlyUpdatedProject } from "@/data/projects";
import { getRecentGitHubActivity } from "@/lib/github";
import { isWithinDays } from "@/lib/dates";
import RecentlyActiveCard from "@/components/recentlyActiveCard";

export const dynamic = "error";

const Homepage = async () => {
  const posts = getAllPosts();
  const latestPost = posts.length > 0 ? posts[0] : null;
  const latestProject = getMostRecentlyUpdatedProject();
  const githubActivity = await getRecentGitHubActivity();

  // "Recently Active" priority:
  // 1. The latest blog post, as long as it's under a month old.
  // 2. Otherwise, whichever is more recent: a hand-marked project update,
  //    or real GitHub commit activity across all repos.
  // 3. If neither of those exists, fall back to the blog post anyway (even
  //    if stale) rather than showing nothing.
  const postIsFresh = !!latestPost && isWithinDays(latestPost.date, 30);

  let recentlyActive: "post" | "project" | "github" | "none" = "none";
  if (postIsFresh) {
    recentlyActive = "post";
  } else if (latestProject || githubActivity) {
    const projectDate = latestProject?.updated ?? "";
    const githubDate = githubActivity?.latestDate ?? "";
    recentlyActive = projectDate >= githubDate ? "project" : "github";
  } else if (latestPost) {
    recentlyActive = "post";
  }

  return (
    <main
      className={`min-h-full lg:h-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-8 lg:py-0 ${RESPONSIVE_PADDING}`}
      aria-label="Homepage main content"
    >
      <section
        className="relative h-72 sm:h-96 shrink-0 lg:h-full lg:w-1/2"
        aria-label="Profile image"
      >
        <Image
          src={"/picture-of-me-homepage.png"}
          alt="Portrait of Jason Thompson"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-[2.5rem] object-cover object-top shadow-2xl shadow-primary-accent/20"
        />
      </section>
      <section className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-primary-text text-center lg:text-left">
        <HomepageIntro />
        <p className="md:text-xl">
          Senior Software Engineer at Capital One, where I work across the stack
          with TypeScript, C#, and .NET. Outside of work I ship side
          projects, tinker in my home lab, and write about what I&apos;m
          learning.
        </p>
        <div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <Link
            href="/portfolio"
            className={BUTTON_STYLES.primary}
            aria-label="View my work portfolio"
          >
            View My Work
          </Link>
          <Link
            href="/blog"
            className={BUTTON_STYLES.secondary}
            aria-label="Read my blog"
          >
            Read My Blog
          </Link>
        </div>
        {recentlyActive === "post" && latestPost && (
          <RecentlyActiveCard
            href={`/blog/${latestPost.slug}`}
            ariaLabel={`Read my latest blog post: ${latestPost.title}`}
            title={latestPost.title}
            date={latestPost.date}
            description={
              latestPost.description ?? generateDescription(latestPost.content)
            }
          />
        )}
        {recentlyActive === "project" && latestProject && (
          <RecentlyActiveCard
            href={`/portfolio/${latestProject.name}`}
            ariaLabel={`See what I'm building: ${latestProject.name.replace(
              "_",
              " "
            )}`}
            title={latestProject.name.replace("_", " ")}
            date={latestProject.updated!}
            description={latestProject.short_desc}
          />
        )}
        {recentlyActive === "github" && githubActivity && (
          <RecentlyActiveCard
            href="https://github.com/Thompson-Jason"
            external
            ariaLabel="See my recent activity on GitHub"
            title="Actively coding"
            date={githubActivity.latestDate}
            description={`${githubActivity.pushCount} push${
              githubActivity.pushCount === 1 ? "" : "es"
            } across ${githubActivity.repoCount} repo${
              githubActivity.repoCount === 1 ? "" : "s"
            } in the last ${githubActivity.windowDays} days.`}
          />
        )}
      </section>
    </main>
  );
};

export default Homepage;
