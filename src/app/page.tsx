import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = ` *[_type=='blog'] | order(_createdAt desc){
  title,
    shortDescription,
    "currentSlug":slug.current,
    headerImage
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const blogData: blogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-4">
      {blogData.map((blog, idx) => (
        <Card key={idx}>
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
}
