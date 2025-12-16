import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostMeta } from "./types";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  const blogFiles = fs.readdirSync(blogDir);

  return blogFiles
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const fullPath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags ?? [],
        content,
      };
    })
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1));
}

export function getPost(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}
