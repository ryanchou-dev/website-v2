import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const mdxComponents = {
  a: ({ href, children }) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
      href={href}
    >
      {children}
    </a>
  ),

  h1: ({ children }) => (
    <p className="text-4xl font-semibold text-boba">{children}</p>
  ),

  h2: ({ children }) => (
    <p className="text-3xl font-semibold text-boba">{children}</p>
  ),
  h3: ({ children }) => (
    <p className="text-2xl font-semibold text-boba">{children}</p>
  ),
  hr: ({ children }) => (
    <div className="h-1 bg-gray-400 bg-opacity-40">{children}</div>
  ),
  img: ({ src, alt, children }) => (
    <Image src={src} alt={alt} width={500} height={500} />
  ),
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <div className="mb-8 text-left mt-32">
        <h1 className=" text-4xl sm:text-5xl font-semibold">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="text-lg pb-32">
        <Content components={mdxComponents} />
      </div>
    </>
  );
};

export default PostLayout;
