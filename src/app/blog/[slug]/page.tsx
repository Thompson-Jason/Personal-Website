import { getAllPosts, getPost } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  return getAllPosts().map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { content, data } = getPost(params.slug);

  const processed = await remark().use(html).process(content);

  return (
    <article>
      <h1>{data.title}</h1>
      <small>{data.date}</small>

      <div dangerouslySetInnerHTML={{ __html: processed.toString() }} />
    </article>
  );
}
