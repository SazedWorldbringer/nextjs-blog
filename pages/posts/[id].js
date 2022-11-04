import Layout from "../../components/layout";
import { getAllPostsId } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostsId();
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return <Layout>...</Layout>;
}
