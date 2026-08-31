import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESPONSIVE_PADDING, BUTTON_STYLES } from "@/constants/styles";
import { getAllPosts } from "@/lib/blog";
import { generateDescription } from "@/lib/description";
import HomepageIntro from "@/components/homepageIntro";

export const dynamic = "error";

const Homepage = () => {
  const posts = getAllPosts();
  const latestPost = posts.length > 0 ? posts[0] : null;

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
          className="rounded-t-3xl object-contain"
        />
      </section>
      <section className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-primary-text text-center lg:text-left">
        <HomepageIntro />
        <p className="md:text-xl">
          Senior Software Engineer at Capital One, where I work across the stack
          with TypeScript, Angular, C#, and .NET. Outside of work I ship side
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
        {latestPost && (
          <Link
            href={`/blog/${latestPost.slug}`}
            className="block w-full max-w-xl"
            aria-label={`Read my latest blog post: ${latestPost.title}`}
          >
            <div className="bg-primary-surface rounded-xl border border-primary-border shadow-md p-4 sm:p-6 transition-all duration-200 hover:shadow-xl hover:border-primary-accent hover:scale-[1.02] text-left">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary-accent">
                Recently Active
              </div>
              <h2 className="text-xl font-bold mt-1 hover:underline">
                {latestPost.title}
              </h2>
              <div className="text-xs text-primary-text/60 mt-1">
                {latestPost.date}
              </div>
              <div className="text-sm text-primary-text/80 mt-2 line-clamp-3">
                {latestPost.description ??
                  generateDescription(latestPost.content)}
              </div>
            </div>
          </Link>
        )}
      </section>
    </main>
  );
};

export default Homepage;
