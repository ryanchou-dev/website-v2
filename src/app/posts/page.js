import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export const metadata = {
  title: "ryan's blog posts",
  description:
    "a collection of fun things that i've done, and stuff i want to remember.",
};

function PostCard(post) {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-1 text-xl">
            <Link
              href={post.url}
              className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
            >
              {post.title}
            </Link>
          </h2>
          <div
            className="text-sm text-gray-600 [&>*]:mb-3 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.abstract }}
          />
        </div>

        <time dateTime={post.date} className="mb-2 block text-sm text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mt-32">
      <p className=" text-4xl text-[#ba7472] font-semibold sm:text-5xl">
        blog posts
      </p>
      <p className="text-4xl text-gray-600/40">~</p>
      <div className="mt-4">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
    // <div className="mx-auto max-w-xl py-8 mt-32">
    //   <p className="mb-8 text-center text-2xl font-black">HEY THERE</p>
    //   <h1 className="mb-8 text-center text-2xl font-black">
    //     Next.js + Contentlayer Example
    //   </h1>
    // </div>
  );
}
