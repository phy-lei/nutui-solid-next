import { Component, JSX, ParentProps, createMemo, mergeProps, splitProps, useContext } from 'solid-js'
import { DataContext } from '../row/UserContext'

export type ColProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onClick'> & Partial<{
  span: string | number
  offset: string | number
}>

const defaultProps: ColProps = {
  span: 24,
  offset: 0,
}

export const Col: Component<ParentProps<ColProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const { gutter } = useContext(DataContext)
  const [local, rest] = splitProps(merged, [
    'span',
    'offset',
  ])

  const classes = createMemo(() => {
    const prefixCls = 'nut-col'
    return {
      [prefixCls]: true,
      [`${prefixCls}-gutter`]: !!gutter,
      [`nut-col-${local.span}`]: true,
      [`nut-col-offset-${local.offset}`]: true,
    }
  })

  const style = createMemo(() => {
    if (gutter) {
      return {
        'padding-left': `${Number(gutter) / 2}px`,
        'padding-right': `${Number(gutter) / 2}px`,
      }
    }
  })

  return (
    <div classList={classes()} style={style()} {...rest}>{props.children}</div>
  )
}
