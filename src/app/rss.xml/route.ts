import { getAllPosts } from "@/lib/blog";
import { generateDescription } from "@/lib/description";

const SITE_URL = "https://jasonthompson.org";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return new Date().toUTCString();
  }
  return parsed.toUTCString();
}

export function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      const description = post.description ?? generateDescription(post.content);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <description>${escapeXml(description ?? "")}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Jason Thompson's Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Thoughts, tutorials, and updates from Jason Thompson</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
