import { Component, JSX, ParentProps, createMemo, mergeProps, splitProps, useContext } from 'solid-js'
import { GridContext } from '../grid/grid.context'
import { pxCheck } from '@/utils/pxCheck'

export type GridItemProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  text: string
  /**
   * @deprecated It will be removed in next major version.
   */
  url: string
  /**
   * @deprecated It will be removed in next major version.
   */
  replace: boolean
}>

const defaultProps = {
  url: '',
  replace: false,
}

export const GridItem: Component<ParentProps<GridItemProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const parent = useContext(GridContext) || {}

  const [local, rest] = splitProps(merged, [
    'text',
    'url',
    'replace',
  ])

  const rootStyle = createMemo(() => {
    const style: JSX.CSSProperties = {
      'flex-basis': `${100 / +parent.columnNum}%`,
    }
    if (parent.square) {
      style['padding-top'] = `${100 / +parent.columnNum}%`
    }
    else if (parent.gutter) {
      style['padding-right'] = pxCheck(parent.gutter)
    }
    return style
  })

  const contentClass = createMemo(() => {
    const prefixCls = `nut-grid-item__content`
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}--border`]: parent.border,
      [`${prefixCls}--surround`]: parent.border && !!parent.gutter,
      [`${prefixCls}--center`]: parent.center,
      [`${prefixCls}--square`]: parent.square,
      [`${prefixCls}--reverse`]: parent.reverse,
      [`${prefixCls}--${parent.direction}`]: !!parent.direction,
      [`${prefixCls}--clickable`]: parent.clickable || !!local.url,
    }
  })

  const handleClick: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> = (e) => {
    if (typeof rest?.onClick === 'function') {
      rest.onClick(e)
    }
    if (props.url) {
      props.replace ? location.replace(props.url) : (location.href = props.url)
    }
  }

  return (
    <div class="nut-grid-item" style={rootStyle()} onClick={handleClick}>
      <div classList={contentClass()}>
        {rest.children}
        <div class="nut-grid-item__text">
          {local.text}
        </div>
      </div>
    </div>
  )
}
