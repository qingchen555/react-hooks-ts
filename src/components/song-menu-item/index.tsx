import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuWrapperitem } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<Iprops> = props => {
  const { itemData } = props
  return (
    <MenuWrapperitem>
      <div className='top '>
        <img src={getImageSize(itemData.picUrl, 140)} alt='' />
        <div className='cover sprite_cover'>
          <div className='info sprite_cover'>
            <span className='count'></span>
            <span>
              <i className='sprite_icon headset'></i>
              <span className='count'>{formatCount(itemData.playCount)}</span>
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='bottom'>{itemData.name}</div>
    </MenuWrapperitem>
  )
}

export default memo(SongMenuItem)
