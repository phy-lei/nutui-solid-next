import { Component, JSX, ParentProps, Show, createMemo, mergeProps, splitProps } from 'solid-js'

export type DividerPosition = 'center' | 'left' | 'right'
export type DividerDirection = 'horizontal' | 'vertical'

export type DividerProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  contentPosition: DividerPosition
  dashed: boolean
  hairline: boolean
  direction: DividerDirection
}>

const defaultProps: DividerProps = {
  contentPosition: 'center',
  dashed: false,
  hairline: true,
  direction: 'horizontal',
}

export const Divider: Component<ParentProps<DividerProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'contentPosition',
    'dashed',
    'hairline',
    'direction',
  ])

  const classes = createMemo(() => {
    const prefixCls = 'nut-divider'
    if (local.direction === 'horizontal') {
      return {
        [prefixCls]: true,
        [`${prefixCls}-center`]: !!props.children,
        [`${prefixCls}-left`]: local.contentPosition === 'left',
        [`${prefixCls}-right`]: local.contentPosition === 'right',
        [`${prefixCls}-dashed`]: local.dashed,
        [`${prefixCls}-hairline`]: local.hairline,
      }
    }
    else {
      return {
        [prefixCls]: true,
        [`${prefixCls}-vertical`]: local.direction === 'vertical',
      }
    }
  })

  return (
    <div {...rest} classList={classes()}>
      <Show when={local.direction === 'horizontal'}>{props.children}</Show>
    </div>
  )
}
