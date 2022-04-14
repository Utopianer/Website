import clsx from 'clsx'
import { IPFS_GATEWAY } from 'helpers/constants'
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
  images?: string[]
}) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        className={clsx(
          'transition-all hover:shadow-inner rounded-xl w-full bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 rounded-lg">
          <div className="">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full text-lg font-bold tracking-wide text-gray-900 opacity-90 md:text-lg dark:text-gray-100">
                {title}
              </h4>
            </div>
            <div className="flex items-center text-gray-800 opacity-80 dark:text-gray-200">
              <p>{description}</p>
            </div>
          </div>
          {images && (
            <div className="flex items-center mt-4 space-x-2">
              {images?.map((hash, idx) => (
                <img
                  className="h-10 rounded"
                  loading="eager"
                  key={idx}
                  src={`${IPFS_GATEWAY}/${hash}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}
