import React from 'react'

const ExternalLink = ({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) => (
  <div className="text-center">
    <a
      className="text-gray-400 transition hover:underline hover:text-gray-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  </div>
)

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-2 gap-4 pb-16 sm:grid-cols-5">
        <ExternalLink href="https://app.ens.domains/name/sasid.eth/details">
          ENS
        </ExternalLink>
        <ExternalLink href="https://twitter.com/sasicodes">
          Twitter
        </ExternalLink>
        <ExternalLink href="https://github.com/sasicodes">GitHub</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/sasicodes">
          LinkedIn
        </ExternalLink>
        <button
          className="hidden outline-none md:inline-block"
          onClick={() => {
            window?.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-auto text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  )
}
