import Post from "@/interface/Post";
import formatDate from "@/util/formatDate";

interface ListProps {
  posts: Post[];
}

const MAX_DISPLAY: number = 5;

export default function RecentPosts({ posts }: ListProps) {
  return (
    <ul className="divide-y divide-gray-200">
      {posts.slice(0, MAX_DISPLAY).map((post: Post) => {
        const { createdAt, title, tags } = post;
        return (
          <li className="py-12">
            <article className="flex">
              <dl className="flex-1">
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {formatDate(createdAt)}
                </dd>
              </dl>
              <div className="flex-[3_3_0%]">
                <h3 className="text-2xl font-bold leading-8 tracking-tight">
                  {title}
                </h3>
                <div className="flex flex-wrap">
                  {tags.map((tag: string) => (
                    <span className="mr-3 text-sm font-medium uppercase text-gray-500">
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
  );
}
