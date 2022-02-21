import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/translucent.css'
import 'tippy.js/themes/light.css'

import Tippy from '@tippyjs/react'
import { useTheme } from 'next-themes'
import React from 'react'
import type { Placement } from 'tippy.js'

type Props = {
  children: React.ReactElement
  content: React.ReactNode
  placement?: Placement
}

const Tooltip = ({ children, content, placement = 'top', ...props }: Props) => {
  const { theme } = useTheme()

  return (
    <Tippy
      {...props}
      placement={placement}
      content={content}
      arrow={false}
      className="font-semibold"
      followCursor={true}
      theme={theme === 'dark' ? 'translucent' : 'light'}
    >
      {children}
    </Tippy>
  )
}

export default Tooltip
