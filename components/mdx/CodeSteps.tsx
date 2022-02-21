import clsx from 'clsx'
import * as React from 'react'

import CodeBlock from './CodeBlock'

interface CodeStepsProps {
  children: React.ReactNode
}

interface CodeContent {
  steps: React.ReactElement[]
  code: React.ReactNode
}

const colors = [
  {
    hex: '#149ECA',
    border: 'border-blue-400',
    background: 'bg-blue-400'
  },
  {
    hex: '#DB7D27',
    border: 'border-yellow-400',
    background: 'bg-yellow-400'
  },
  {
    hex: '#44AC99',
    border: 'border-green-500',
    background: 'bg-green-500'
  },
  {
    hex: '#6B75DB',
    border: 'border-purple-400',
    background: 'bg-purple-400'
  }
]

export function CodeSteps({ children }: CodeStepsProps) {
  const [activeStep, setActiveStep] = React.useState<number | null>(null)
  const ref = React.useRef<HTMLDivElement>()

  const { steps, code } = React.Children.toArray(children).reduce(
    (acc: CodeContent, child) => {
      if (!React.isValidElement(child)) return acc
      switch (child.props.mdxType) {
        case 'CodeStep':
          acc.steps.push(
            React.cloneElement(child, {
              ...child.props,
              activeStep,
              handleStepChange: setActiveStep,
              stepNumber: acc.steps.length + 1
            })
          )
          break
        case 'pre':
          acc.code = (
            <CodeBlock
              ref={ref}
              {...child.props.children.props}
              noMargin={true}
            />
          )
          break
      }
      return acc
    },
    { steps: [], code: null }
  )

  return (
    <section className="grid grid-cols-1 my-8 gap-x-8 gap-y-4">
      <div className="relative lg:order-2">{code}</div>
      <div className="flex flex-col justify-center lg:order-2 gap-y-2">
        {steps}
      </div>
    </section>
  )
}

interface CodeStepProps {
  children: React.ReactNode
  title: string
  stepNumber: number
  activeStep?: number
}

export function CodeStep({ title, stepNumber, children }: CodeStepProps) {
  const color = colors[stepNumber - 1]
  return (
    <div
      className={clsx(
        'border-l-4 rounded-lg px-5 pt-8 pb-2 bg-opacity-5 shadow-inner',
        color.border,
        color.background
      )}
    >
      <div className="relative flex items-center justify-between">
        <div
          className={clsx(
            'inline align-middle text-center rounded-full w-5 h-5 absolute font-bold text-black font-mono leading-tight -left-8',
            color.background
          )}
        >
          {stepNumber}
        </div>
        <div className="font-bold leading-3 dark:text-gray-200 text-gray-800">
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
