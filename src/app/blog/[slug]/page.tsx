import { blogAritcle } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getBlogArticles } from "@/services/api/blogs";
import { ClipboardCheck } from "lucide-react";
import formattedDate from "@/utils/Date";

export const revalidate = 30;

const BlogAricles = async ({ params }: { params: { slug: string } }) => {
  const blogArticle: blogAritcle = await getBlogArticles(params?.slug);
  const publishedDate = formattedDate(blogArticle.createdOn);

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 ">
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
      <div className="col-span-full flex items-center justify-center mt-3">
        <span className="text-primary ">
          <ClipboardCheck />
        </span>
        <span className="text-lg text-gray-400 font-semibold">
          {publishedDate}
        </span>
      </div>

      <div className="col-span-full text-center max-w-none mt-10 prose prose-xl prose-red dark:prose-invert ">
        <PortableText value={blogArticle.content} />
      </div>
    </div>
  );
};

export default BlogAricles;
