import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<Iprops> = props => {
  const { itemData } = props
  return (
    <NewAlbumWrapper>
      <div className='top'>
        <img src={getImageSize(itemData.picUrl, 100)} alt='' />
        <a href='' className='cover sprite_cover'></a>
      </div>
      <div className='bottom'>
        <div className='name'>{itemData.name}</div>
        <div className='artist'>{itemData.artist.name}</div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbumItem)
