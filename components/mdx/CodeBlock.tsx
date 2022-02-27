import {
  ClasserProvider,
  SandpackCodeViewer,
  SandpackProvider,
  SandpackThemeProvider
} from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import clsx from 'clsx'
import rangeParser from 'parse-numeric-range'
import * as React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'

const theme = {
  palette: {
    activeText: 'inherit',
    defaultText: 'inherit',
    inactiveText: 'inherit',
    activeBackground: 'inherit',
    defaultBackground: 'inherit',
    inputBackground: 'inherit',
    accent: 'inherit',
    errorBackground: 'inherit',
    errorForeground: 'inherit'
  },
  syntax: {
    plain: '#c8c8fa',
    comment: '#6a737d',
    keyword: '#d73a49',
    tag: '#43d165',
    punctuation: '#999999',
    definition: '#9c6af7',
    property: '#4a9eff',
    static: '#c8c8fa',
    string: '#9c6af7'
  }
}

interface InlineHiglight {
  step: number
  line: number
  startColumn: number
  endColumn: number
}

const CodeBlock = React.forwardRef(function CodeBlock(
  {
    children,
    className = 'language-js',
    metastring,
    noMargin,
    noMarkers
  }: {
    children: string
    className?: string
    metastring: string
    noMargin?: boolean
    noMarkers?: boolean
  },
  ref?: React.Ref<CodeMirrorRef>
) {
  const getDecoratedLineInfo = () => {
    if (!metastring) {
      return []
    }

    const linesToHighlight = getHighlightLines(metastring)
    const highlightedLineConfig = linesToHighlight.map((line) => {
      return {
        className: 'bg-gray-700 bg-opacity-50',
        line
      }
    })

    const inlineHighlightLines = getInlineHighlights(metastring, children)
    const inlineHighlightConfig = inlineHighlightLines.map(
      (line: InlineHiglight) => ({
        ...line,
        elementAttributes: { 'data-step': `${line.step}` },
        className: clsx(
          'code-step bg-opacity-20 relative rounded-md p-1 ml-2',
          {
            'pl-3 before:content-[attr(data-step)] before:block before:w-4 before:h-4 before:absolute before:top-1 before:-left-2 before:rounded-full before:text-black before:font-bold before:text-center before:text-xs before:leading-4':
              !noMarkers,
            'bg-blue-400 before:bg-blue-400': line.step === 1,
            'bg-yellow-400 before:bg-yellow-400': line.step === 2,
            'bg-green-400 before:bg-green-400': line.step === 3,
            'bg-purple-400 before:bg-purple-400': line.step === 4
          }
        )
      })
    )

    return highlightedLineConfig.concat(inlineHighlightConfig)
  }

  // e.g. "language-js"
  const language = className.substring(9)
  const filename = '/index.' + language
  const decorators = getDecoratedLineInfo()
  return (
    <div
      className={clsx(
        'rounded-lg h-full w-full overflow-x-auto bg-black text-white flex items-center shadow-lg',
        !noMargin && 'my-8'
      )}
    >
      <CopyToClipboard
        onCopy={() => toast.success('Code copied 🎉')}
        text={children.trimEnd()}
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
      <SandpackProvider
        customSetup={{
          entry: filename,
          files: {
            [filename]: {
              code: children.trimEnd()
            }
          }
        }}
      >
        <SandpackThemeProvider theme={theme}>
          <ClasserProvider
            classes={{
              'sp-cm': 'py-7 px-5'
            }}
          >
            <SandpackCodeViewer
              ref={ref}
              showLineNumbers={false}
              decorators={decorators}
            />
          </ClasserProvider>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  )
})

export default CodeBlock

/**
 *
 * @param metastring string provided after the language in a markdown block
 * @returns array of lines to highlight
 * @example
 * ```js {1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active`
 */
function getHighlightLines(metastring: string): number[] {
  const HIGHLIGHT_REGEX = /{([\d,-]+)}/
  const parsedMetastring = HIGHLIGHT_REGEX.exec(metastring)
  if (!parsedMetastring) {
    return []
  }
  return rangeParser(parsedMetastring[1])
}

/**
 *
 * @param metastring string provided after the language in a markdown block
 * @returns InlineHighlight[]
 * @example
 * ```js {1-3,7} [[1, 1, 'count'], [2, 4, 'setCount']] App.js active
 * ...
 * ```
 *
 * -> The metastring is `{1-3,7} [[1, 1, 'count', [2, 4, 'setCount']] App.js active`
 */
function getInlineHighlights(metastring: string, code: string) {
  const INLINE_HIGHT_REGEX = /(\[\[.*\]\])/
  const parsedMetastring = INLINE_HIGHT_REGEX.exec(metastring)
  if (!parsedMetastring) {
    return []
  }

  const lines = code.split('\n')
  const encodedHighlights = JSON.parse(parsedMetastring[1])
  return encodedHighlights.map(([step, lineNo, substr, fromIndex]: any[]) => {
    const line = lines[lineNo - 1]
    let index = line.indexOf(substr)
    const lastIndex = line.lastIndexOf(substr)
    if (index !== lastIndex) {
      if (fromIndex === undefined) {
        throw Error(
          "Found '" +
            substr +
            "' twice. Specify fromIndex as the fourth value in the tuple."
        )
      }
      index = line.indexOf(substr, fromIndex)
    }
    if (index === -1) {
      throw Error("Could not find: '" + substr + "'")
    }
    return {
      step,
      line: lineNo,
      startColumn: index,
      endColumn: index + substr.length
    }
  })
}
