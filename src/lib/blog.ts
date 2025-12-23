import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostMeta } from "./types";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  let blogFiles = fs
    .readdirSync(blogDir)
    .filter((filename) => filename.endsWith(".md"));
  // Exclude draft posts in production if they are somehow accidentally included
  if (process.env.NODE_ENV !== "development") {
    blogFiles = blogFiles.filter((filename) => !filename.endsWith(".draft.md"));
  }
  return blogFiles
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags ?? [],
        postNumber:
          typeof data.postNumber === "number"
            ? data.postNumber
            : typeof data.postNumber === "string"
            ? parseInt(data.postNumber, 10)
            : undefined,
        content,
      };
    })
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1));
}

export function getPostByNumber(
  postNumber: number
): { data: any; content: string; slug: string } | null {
  const posts = getAllPosts();
  const post = posts.find((p) => p.postNumber === postNumber);
  if (!post) return null;
  const fullPath = path.join(blogDir, `${post.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content, slug: post.slug };
}

export function getPost(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}
