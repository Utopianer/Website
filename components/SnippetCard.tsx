import clsx from 'clsx'
import Link from 'next/link'

interface CardProps {
  gradient: string
  title: string
  slug: string
  description: string
}

export default function SnippetCard({
  title,
  slug,
  gradient,
  description
}: CardProps) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className={clsx(
          'transition-all hover:shadow-inner rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 rounded-lg">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-4 text-lg font-medium tracking-tight text-gray-800 dark:text-gray-200 md:text-lg">
              {title}
            </h4>
          </div>
          <p className="flex items-center text-sm text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}
