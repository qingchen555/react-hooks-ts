import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Template: FC<Iprops> = () => {
  return <div>template</div>
}

export default memo(Template)
