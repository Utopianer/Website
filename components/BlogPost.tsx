import Link from 'next/link'

export type Log = {
  title: string
  slug: string
  excerpts: string
  views_count: string
}

export default function BlogPost({ title, slug, excerpts, views_count }: Log) {
  return (
    <Link href={`https://lagandlog.com/logs/${slug}`}>
      <a className="w-full group" target="_blank">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 transition-all group-hover:opacity-100 md:text-xl dark:text-gray-100 opacity-80">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {views_count} views
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{excerpts}</p>
        </div>
      </a>
    </Link>
  )
}
