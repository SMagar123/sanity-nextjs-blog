import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { getBlogData } from "@/services/api/blogs";

export const revalidate = 3600;

const Home = async () => {
  const blogs: blogCard[] = await getBlogData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 mt-8 gap-4">
      {blogs.map((blog, idx) => (
        <Card key={idx} className="col-span-full md:col-span-4">
          <Image
            src={urlFor(blog?.headerImage).url()}
            alt="blog image"
            width={1600}
            height={900}
            className="rounded-t-md object-cover h-[200px]"
          />
          <CardContent>
            <h3 className="text-lg line-clamp-1 font-semibold mt-2">
              {blog.title}
            </h3>
            <p className="line-clamp-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
              {blog.shortDescription}
            </p>
            <Button asChild className="w-full mt-4">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;