import Link from "next/link";
import { Post } from "@/interface/Post";
import formatDate from "@/util/formatDate";

interface ListProps {
  posts: Post[];
}

const MAX_DISPLAY: number = 5;

export default function BlogSection({ posts }: ListProps) {
  return (
    <>
      <div className="space-y-5 pt-6 pb-8 md:space-y-2 border-b border-gray200">
        <h2 className="text-5xl leading-14 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
          최근 게시물
        </h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.slice(0, MAX_DISPLAY).map((post: Post) => {
          const { id, title, createdAt, tags } = post;
          return (
            <li key={id} className="py-12">
              <article className="flex">
                <dl className="flex-1">
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {formatDate(createdAt)}
                  </dd>
                </dl>
                <div className="flex-[3_3_0%]">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${id}`}>{title}</Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="mr-3 text-sm font-medium uppercase text-gray-500"
                      >
                        {tag.split(" ").join("-")}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
