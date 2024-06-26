import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'

interface Iprops {
  children?: ReactNode
}

const AppHeader: FC<Iprops> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel='noreferrer' target='_blank'>
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          {/* logo */}
          <a className='logo sprite_01 ' href='/#'>
            网易云音乐
          </a>
          <div className='title-list'>
            {headerTitles.map(item => {
              return (
                <div className='item' key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className='divider' />
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
