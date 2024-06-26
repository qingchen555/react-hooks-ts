import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { dicoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
}

const NavBar: FC<Iprops> = () => {
  return (
    <NavWrapper>
      <div className='wrap-v1 nav'>
        {dicoverMenu.map(item => {
          return (
            <div className='item' key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
