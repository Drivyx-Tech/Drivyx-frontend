import PostPage from "@/components/resources/PostPage";
import { getAllPostsSlugs, getPostBySlug } from "@/services/endpoints/sanity";
import Navbar from "@/components/menu/WithSubnavigation";

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

export async function generateMetadata({ params }: any) {
  const post = await getPostBySlug(params.slug);

  if (!post) return { title: "Drivyx | Page Not Found" };

  return { title: post.title };
}

export default async function PostDefault({ params }: any) {
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      <Navbar navTheme="light" />
      <PostPage post={post} />/
    </div>
  );
}
