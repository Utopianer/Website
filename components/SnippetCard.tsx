import clsx from 'clsx'
import Link from 'next/link'

interface CardProps {
  gradient: string
  title: string
  slug: string
  summary: string
}

export default function SnippetCard({
  title,
  slug,
  gradient,
  summary
}: CardProps) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className={clsx(
          'transform transition-all',
          'rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 rounded-lg">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="dark:text-gray-200 text-gray-800 w-full mb-4 text-lg font-medium tracking-tight md:text-lg">
              {title}
            </h4>
          </div>
          <p className="flex items-center text-sm dark:text-gray-300 text-gray-700">
            {summary}
          </p>
        </div>
      </a>
    </Link>
  )
}
