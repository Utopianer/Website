import * as React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

interface TerminalBlockProps {
  children: React.ReactNode
}

const TerminalBlock = ({ children }: TerminalBlockProps) => {
  let message: string | undefined
  if (typeof children === 'string') {
    message = children
  } else if (
    React.isValidElement(children) &&
    typeof children.props.children === 'string'
  ) {
    message = children.props.children
  }

  return (
    <div className="h-full bg-black rounded-lg" translate="no">
      <div className="w-full bg-gray-800 rounded-t-lg">
        <div className="relative">
          <div className="flex px-4 py-2 text-sm text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex self-center w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Terminal
          </div>
          <CopyToClipboard
            onCopy={() => toast.success('Code copied 🎉')}
            text={message || ''}
          >
            <button className="absolute z-10 outline-none opacity-50 hover:opacity-100 top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="p-6 text-white whitespace-pre">
        <span className="mr-2 text-yellow-600 pointer-events-none select-none text-red-40">
          $
        </span>
        {message}
      </div>
    </div>
  )
}

export default TerminalBlock
