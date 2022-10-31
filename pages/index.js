import { client } from "../libs/client";
import Link from "next/link";

//データをテンプレートに受け渡す部分の処理
export const getStaticProps = async() => {
  const data = await client.get({ endpoint:"blog"});
  return {
    props:{
      blog: data.contents,
    },
  };
};

export default function Home({blog}) {
  return (
    <div className ='styles.containar'>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
             <Link href={`/blog/${blog.id}`}>
              {blog.title}
             </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}