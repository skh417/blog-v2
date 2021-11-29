import Link from "next/link";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className='card'>
      <div
        className='post-thumbnail'
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          marginBottom: "20px",
        }}
      >
        <Image
          src={post.frontmatter.cover_image}
          alt='img'
          layout='fill'
          objectFit='fill'
        />
      </div>
      <div className='post-date'>{post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt} </p>
      <Link href={`/blog/${post.slug}`}>
        <a className={"btn"}>더보기</a>
      </Link>
    </div>
  );
}
