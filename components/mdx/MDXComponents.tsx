import * as React from 'react'

import Callout from './Callout'
import CodeBlock from './CodeBlock'
import { CodeStep, CodeSteps } from './CodeSteps'
import InlineCode from './InlineCode'
import TerminalBlock from './TerminalBlock'

const P = (p: JSX.IntrinsicElements['p']) => (
  <p className="my-4 whitespace-pre-wrap" {...p} />
)

const Heading = (p: JSX.IntrinsicElements['h1']) => (
  <h1 className="my-10 text-xl font-semibold tracking-wide" {...p} />
)

const MDXComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-semibold text-teal-500 border-b border-teal-500 hover:border-b-2"
      {...props}
    />
  ),
  Heading,
  p: P,
  code: CodeBlock,
  pre: (props: JSX.IntrinsicElements['div']) => (
    <div className="relative" {...props} />
  ),
  CodeSteps,
  CodeStep,
  TerminalBlock,
  Callout,
  inlineCode: InlineCode
}

export default MDXComponents
