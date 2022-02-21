import clsx from 'clsx'
import Link from 'next/link'

export default function ProjectCard({
  title,
  description,
  gradient,
  href,
  images
}: {
  title: string
  description: string
  gradient: string
  href: string
  images: string[]
}) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        className={clsx(
          'transform transition-all',
          'rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 rounded-lg">
          <div className="mb-4">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full text-lg font-medium tracking-tight text-gray-900 md:text-lg dark:text-gray-100">
                {title}
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {images.map((src, idx) => (
              <img
                className="h-10 rounded"
                loading="eager"
                key={idx}
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
