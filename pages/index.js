import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Head from "next/head";
import Post from "../components/Post";

import { sortPosts } from "../utils/utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>My Dev Blog</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => {
          return <Post key={post.frontmatter.title} post={post} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // posts 디렉토리에서 파일 가져오기
  const files = fs.readdirSync(path.join("posts"));

  // posts에서 slug와 frontmatter 가져오기
  const posts = files.map((filename) => {
    // slug 생성
    const slug = filename.replace(".md", "");

    // frontmatter 생성
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const sortedPosts = posts.sort(sortPosts).reverse();

  return {
    props: {
      posts: sortedPosts,
    },
  };
}
