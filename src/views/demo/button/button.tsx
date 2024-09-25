// @/components/Button/index.tsx
import { useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
import { ButtonWrapper } from './style'

// 组件的属性类型
type Props = {
  // 按钮的文本
  text: string
  // 自定义的类名
  className?: string
  // 是否禁用按钮
  disabled?: boolean
  // 是否显示加载动画
  loading?: boolean
  // 点击按钮时的回调函数
  click?: () => void
  beforeChange?: (() => Promise<any>) | undefined
}

// 按钮组件
export default (props: Props) => {
  // 解构属性
  const { text, className, disabled, loading, beforeChange, click } = props
  const [load, setLoad] = useState(false)
  /**
   * 点击按钮时的事件处理函数
   * - 如果按钮被禁用，则直接返回
   * - 如果 beforeChange 是一个Promise函数，则调用其后续处理
   * - 否则直接调用 click
   */
  const handleClick = () => {
    if (disabled) return undefined
    const isFunction = Object.prototype.toString.call(beforeChange) === '[object Function]'
    if (!isFunction) {
      click?.()
      return false
    }
    // 启用加载动画
    setLoad(true)
    beforeChange?.().finally(() => setLoad(false))
  }
  return (
    // 按钮元素
    <ButtonWrapper>
      <button
        type='button'
        // 设置类名
        className={classNames(
          styles.container,
          // 禁用或加载时增加特定的类名
          (disabled || loading) && styles.isDisabled,
          className
        )}
        // 禁用时禁用快捷键操作
        onKeyDown={handleClick}
        // 禁用时禁用点击事件
        onClick={handleClick}
      >
        {/* 加载动画 */}
        {loading && load && <i className={`${styles.loading} iconfont icon-loading`}></i>}
        {/* 按钮文本 */}
        <span>{text}</span>
      </button>
    </ButtonWrapper>
  )
}
