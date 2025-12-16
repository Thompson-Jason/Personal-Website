import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  return files
    .map((file) => {
      const slug = file.replace(".md", "");
      const fullPath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    })
    .sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}
