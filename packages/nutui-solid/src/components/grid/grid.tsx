import { Component, JSX, ParentProps, createMemo, mergeProps, splitProps } from 'solid-js'
import { GridContextProvider } from './grid.context'
import { pxCheck } from '@/utils/px-check'

export type GridDirection = 'horizontal' | 'vertical'

export type GridProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'style'> & Partial<{
  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  clickable: boolean
  style: JSX.CSSProperties
}>

const defaultProps = {
  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  clickable: false,
}

export const Grid: Component<ParentProps<GridProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)

  const [local, rest] = splitProps(merged, [
    'columnNum',
    'border',
    'gutter',
    'center',
    'square',
    'reverse',
    'direction',
    'clickable',
    'classList',
    'style',
    'children',
    'class',
  ])

  const classes = createMemo(() => {
    const prefixCls = 'nut-grid'
    return {
      [prefixCls]: true,
      [`${prefixCls}-${local.columnNum}`]: true,
      [`${prefixCls}-border`]: local.border,
      ...local.classList,
      [local.class]: true,
    }
  })

  const styles = createMemo(() => {
    const style: JSX.CSSProperties = {}
    if (local.gutter) {
      style['padding-left'] = pxCheck(props.gutter)
      style['row-gap'] = pxCheck(props.gutter)
    }
    return { ...style, ...local.style }
  })

  return (
    <GridContextProvider
      columnNum={local.columnNum}
      border={local.border}
      gutter={local.gutter}
      center={local.center}
      square={local.square}
      reverse={local.reverse}
      direction={local.direction}
      clickable={local.clickable}
    >
      <div classList={classes()} style={styles()} {...rest}>
        {local.children}
      </div>
    </GridContextProvider>
  )
}
