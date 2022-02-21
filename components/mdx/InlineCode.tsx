import * as React from 'react'

interface InlineCodeProps {
  isLink: boolean
}
function InlineCode({
  ...props
}: JSX.IntrinsicElements['code'] & InlineCodeProps) {
  return (
    <code
      className="inline text-sm bg-gray-700 py-0.4 text-gray-200 mx-0.5 p-1 rounded-md no-underline"
      {...props}
    />
  )
}

export default InlineCode
