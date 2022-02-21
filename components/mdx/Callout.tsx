import * as React from 'react'

interface CalloutProps {
  children: React.ReactNode
}

const Callout = ({ children }: CalloutProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="relative px-4 pt-4 my-6 text-lg bg-blue-600 rounded-lg shadow-inner bg-opacity-20 sm:px-8 sm:mx-auto">
      <div className="absolute p-2 rounded-full -left-2 -top-2 bg-[#0e172b]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 opacity-80 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="relative">
        <div ref={contentRef} className="py-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Callout
