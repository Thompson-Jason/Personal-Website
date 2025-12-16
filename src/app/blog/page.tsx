import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "error"; // ensures static build

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <strong>{post.title}</strong>
            </Link>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
