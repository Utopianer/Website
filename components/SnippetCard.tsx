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
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 bg-gray-900 rounded-lg">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-4 text-lg font-medium tracking-tight md:text-lg">
              {title}
            </h4>
          </div>
          <p className="flex items-center text-sm text-gray-300">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
