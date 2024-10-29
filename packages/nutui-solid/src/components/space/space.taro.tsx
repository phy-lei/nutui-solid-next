import { Component, For, JSX, ParentProps, children, createMemo, mergeProps, splitProps } from 'solid-js'

export type SpaceGutter = number | string
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'
export type SpaceJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'
export type SpaceDirection = 'horizontal' | 'vertical'

export type SpaceProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  gutter: SpaceGutter | [SpaceGutter, SpaceGutter]
  align: SpaceAlign
  justify: SpaceJustify
  direction: SpaceDirection
  wrap: boolean
  fill: boolean
}>

const defaultProps: SpaceProps = {
  direction: 'horizontal',
}

const prefixCls = 'nut-space'

export const Space: Component<ParentProps<SpaceProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'gutter',
    'align',
    'justify',
    'direction',
    'wrap',
    'fill',
    'children',
  ])

  // gutter数值转换
  const getMargin = (gutter: SpaceGutter) => {
    if (typeof gutter === 'number') {
      return `${gutter}px`
    }
    return gutter
  }

  // 计算margin样式
  const getMarginStyle = (isLast: boolean): JSX.CSSProperties => {
    const style: JSX.CSSProperties = {}

    if (!local.gutter)
      return style

    const marginRight = `${getMargin(Array.isArray(local.gutter) ? local.gutter[0] : local.gutter)}`
    const marginBottom = `${getMargin(Array.isArray(local.gutter) ? local.gutter[1] : local.gutter)}`

    if (isLast) {
      return local.wrap ? { 'margin-bottom': marginBottom } : {}
    }

    if (local.direction === 'horizontal') {
      style['margin-right'] = marginRight
    }
    if (local.direction === 'vertical' || local.wrap) {
      style['margin-bottom'] = marginBottom
    }

    return style
  }

  const classes = createMemo(() => {
    return {
      [prefixCls]: true,
      [`${prefixCls}-${local.direction}`]: true,
      [`${prefixCls}-align-${local.align}`]: true,
      [`${prefixCls}-justify-${local.justify}`]: true,
      [`${prefixCls}-wrap`]: local.wrap,
      [`${prefixCls}-fill`]: local.fill,
    }
  })

  const childElements = children(() => props.children) as () => JSX.Element[]

  return (
    <div {...rest} classList={classes()}>
      <For each={childElements()}>
        {(child, i) => {
          return (
            child && (
              <div class={`${prefixCls}-item`} style={getMarginStyle(i() === childElements().length - 1)}>{child}</div>
            )
          )
        }}
      </For>
    </div>
  )
}
