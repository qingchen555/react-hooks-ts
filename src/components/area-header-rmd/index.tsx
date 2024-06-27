import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  title?: string
  keyWords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaheaderV1: FC<Iprops> = props => {
  const { title = '默认标题', keyWords = [], moreLink = '' } = props

  return (
    <HeaderV1Wrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keywords'>
          {keyWords.map((item, index) => {
            return (
              <div className='item' key={index}>
                <span className='text'>{item}</span>
                <span className='divider'>|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <Link className='more' to={moreLink}>
          更多
        </Link>
        <i className='sprite_02 icon'></i>
      </div>
    </HeaderV1Wrapper>
  )
}

export default memo(AreaheaderV1)
