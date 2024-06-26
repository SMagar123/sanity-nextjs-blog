import { blogAritcle } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getBlogArticles(slug: string) {
  const query = `*[_type=="blog" && slug.current=='${slug}']{
  "currentSlug":slug.current,
  title,
    content,
    headerImage
}[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogAricles = async ({ params }: { params: { slug: string } }) => {
  const blogArticle: blogAritcle = await getBlogArticles(params.slug);

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-4 ">
      <h1 className="col-span-full">
        <span className="text-center block leading-8 text-3xl md:text-4xl tracking-tight font-bold">
          {blogArticle.title}
        </span>
      </h1>
      <div className="col-span-full flex items-center mt-5  justify-center rounded-lg ">
        <Image
          src={urlFor(blogArticle.headerImage).url()}
          width={500}
          height={500}
          alt="Blog Image"
          className=" rounded-lg shadow-md "
        />
      </div>

      <div className="mt-10 col-span-full prose prose-red prose-xl border dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={blogArticle.content} />
      </div>
    </div>
  );
};

export default BlogAricles;
