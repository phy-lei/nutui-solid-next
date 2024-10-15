import { Component, JSX, JSXElement, ParentProps, Show, createMemo, mergeProps, splitProps } from 'solid-js'
import { pxCheck } from '@/utils/pxCheck'

export type CellSize = 'normal' | 'large'

export type CellProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  title: JSXElement
  subTitle: JSXElement
  desc: string
  descTextAlign: string
  isLink: boolean
  roundRadius: string | number
  center: boolean
  size: CellSize
  /**
   * @deprecated It will be removed in next major version.
   */
  to: string | object
  /**
   * @deprecated It will be removed in next major version.
   */
  replace: boolean
  /**
   * @deprecated It will be removed in next major version.
   */
  url: string
  link: JSX.Element
}>

const defaultProps: CellProps = {
  title: '',
  subTitle: '',
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  roundRadius: '',
  center: false,
  size: 'normal',
  replace: false,
  url: '',
}

export const Cell: Component<ParentProps<CellProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'title',
    'subTitle',
    'desc',
    'descTextAlign',
    'isLink',
    'roundRadius',
    'center',
    'size',
    'to',
    'replace',
    'url',
    'replace',
    'link',
    'onClick',
  ])

  const classes = createMemo(() => {
    const prefixCls = 'nut-cell'
    return {
      [prefixCls]: true,
      [`${prefixCls}--clickable`]: local.isLink || !!props.to,
      [`${prefixCls}--center`]: local.center,
      [`${prefixCls}--large`]: local.size === 'large',
    }
  })

  const baseStyle = createMemo(() => {
    return {
      borderRadius: pxCheck(local.roundRadius),
    } as JSX.CSSProperties
  })

  const descStyle = createMemo(() => {
    return {
      textAlign: local.descTextAlign,
    } as JSX.CSSProperties
  })

  const descClasses = createMemo(() => {
    return {
      'nut-cell__value': true,
      'nut-cell__value--alone': !local.title && !local.subTitle,
    }
  })

  return (
    <div classList={classes()} style={baseStyle()} {...rest}>
      {props?.children
        ? props?.children
        : (
            <>
              <Show when={local.title || local.subTitle}>
                <div class="nut-cell__title">
                  <div class="title">{local.title}</div>
                  <Show when={local.subTitle}>
                    <div class="nut-cell__title-desc">{ local.subTitle}</div>
                  </Show>
                </div>
              </Show>
              <Show when={local.desc}>
                <div classList={descClasses()} style={descStyle()}>{local.desc}</div>
              </Show>
              {local?.link
                ? local?.link
                : (
                    <Show when={local.isLink || local.to}>
                      <div class="nut-cell__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M8.465 20.485L16.95 12L8.465 3.515L7.05 4.929L14.122 12L7.05 19.071l1.415 1.414Z" /></svg>
                      </div>
                    </Show>
                  )}
            </>
          )}
    </div>
  )
}
