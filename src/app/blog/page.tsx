import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { RESPONSIVE_PADDING } from "@/constants/styles";
import { generateDescription } from "@/lib/description";

export const dynamic = "error";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main
      className={`min-h-screen bg-primary-bg text-primary-text ${RESPONSIVE_PADDING} py-8`}
      aria-label="Blog main content"
    >
      <div className="flex flex-col items-center">
        <div className="font-semibold sm:outline-double py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-10 lg:py-8 lg:px-16 xl:py-10 xl:px-20 w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Blog
          </h1>
          <h2 className="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl text-center">
            Thoughts, tutorials, and updates
          </h2>
        </div>
        <div className="w-full max-w-3xl mt-8 grid gap-6">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="bg-primary-surface rounded-xl border border-primary-border shadow-md p-4 sm:p-6 transition-all duration-200 hover:shadow-xl hover:border-primary-success hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-primary-accent hover:underline">
                  {post.title}
                </h3>
                {Array.isArray(post.tags) && post.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-2 mb-1">
                    {post.tags.map((tag: string) => (
                      <li key={tag}>
                        <span className="inline-block bg-primary-accent/10 text-primary-accent text-xs font-semibold px-2 py-1 rounded">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-2 text-base text-primary-text/90">
                  {post.description ?? generateDescription(post.content)}
                </p>
                <div className="mt-2 text-xs text-primary-text/60">
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
