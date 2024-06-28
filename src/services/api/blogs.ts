import { client } from "@/lib/sanity";
import { blogCard } from "@/lib/interface";
export const getBlogData = async (): Promise<blogCard[]> => {
  const query = ` *[_type=='blog' && status=="published"] | order(_createdAt desc){
  title,
    shortDescription,
    "currentSlug":slug.current,
    headerImage
}`;
  const data: blogCard[] = await client.fetch(query);
  return data;
};

//query a single blog data on the basis of slug

export const getBlogArticles = async (slug: string) => {
  const query = `*[_type=="blog" && slug.current=='${slug}']{
  "currentSlug":slug.current,
  title,
    content,
    headerImage,
    createdOn
}[0]`;

  const data = await client.fetch(query);
  return data;
};
