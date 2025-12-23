import { getAllPosts, getPost, getPostByNumber } from "@/lib/blog";
import { generateDescription } from "@/lib/description";
import { remark } from "remark";
import html from "remark-html";
import { RESPONSIVE_PADDING } from "@/constants/styles";
import { Metadata } from "next";

const SITE_URL = "https://jasonthompson.org";
export const dynamic = "error";

export async function generateStaticParams() {
  const posts = getAllPosts();
  // Generate params for both slug and postNumber
  const slugParams = posts.map((post) => ({ identifier: post.slug }));
  const numberParams = posts
    .filter((post) => typeof post.postNumber === "number")
    .map((post) => ({ identifier: post.postNumber?.toString()! }));
  // Remove duplicates (e.g., if slug is a number string)
  const seen = new Set();
  return [...slugParams, ...numberParams].filter((param) => {
    if (seen.has(param.identifier)) return false;
    seen.add(param.identifier);
    return true;
  });
}

export async function generateMetadata({
  params,
}: {
  params: { identifier: string };
}): Promise<Metadata> {
  const identifier = params.identifier;
  let post;
  if (/^\d+$/.test(identifier)) {
    post = getPostByNumber(Number(identifier));
  }
  if (!post) {
    try {
      const { data, content } = getPost(identifier);
      post = { data, content, slug: identifier };
    } catch {
      return {};
    }
  }
  if (!post) return {};
  const { data, content, slug } = post;
  const title = `${data.title} | Jason Thompson`;
  const description = data.description ?? generateDescription(content);
  const canonical = `${SITE_URL}/blog/${slug}`;
  return {
    title,
    description,
    keywords: data.tags ?? [],
    alternates: {
      canonical,
    },
    // openGraph: {
    //   title,
    //   description,
    //   url: canonical,
    //   type: "article",
    //   siteName: "Jason Thompson",
    //   images: [
    //     {
    //       url: `${SITE_URL}/og-default.png`,
    //       width: 1200,
    //       height: 630,
    //       alt: data.title,
    //     },
    //   ],
    // },
  };
}

export default async function BlogPostByIdentifier({
  params,
}: {
  params: { identifier: string };
}) {
  const identifier = params.identifier;
  let post;
  if (/^\d+$/.test(identifier)) {
    post = getPostByNumber(Number(identifier));
  }
  if (!post) {
    try {
      const { data, content } = getPost(identifier);
      post = { data, content, slug: identifier };
    } catch {
      return (
        <main className="min-h-screen flex items-center justify-center text-primary-error text-2xl">
          Post not found.
        </main>
      );
    }
  }
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center text-primary-error text-2xl">
        Post not found.
      </main>
    );
  }
  const { data, content } = post;
  const processed = await remark().use(html).process(content);
  return (
    <main
      className={`min-h-screen bg-primary-bg text-primary-text ${RESPONSIVE_PADDING} py-8 flex flex-col items-center`}
      aria-label="Blog post main content"
    >
      <article className="w-full max-w-3xl bg-primary-surface rounded-xl border border-primary-border shadow-md p-4 sm:p-6 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary-accent mb-2">
          {data.title}
        </h1>
        {Array.isArray(data.tags) && data.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 justify-center mt-1 mb-2">
            {data.tags.map((tag: string) => (
              <li key={tag}>
                <span className="inline-block bg-primary-accent/10 text-primary-accent text-xs font-semibold px-2 py-1 rounded">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="text-xs text-primary-text/60 text-center mb-6">
          {data.date}
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: processed.toString() }}
        />
      </article>
    </main>
  );
}
