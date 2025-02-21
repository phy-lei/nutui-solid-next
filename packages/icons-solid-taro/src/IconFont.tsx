import { Show, createMemo, mergeProps, splitProps } from 'solid-js'
import { type JSX, type ParentProps } from 'solid-js'
import { globalConfig } from './internal'

export interface IconFontProps {
  name: string
  size: string | number
  classPrefix: string
  color: string
  tag: HTMLElement
  onClick: (e: MouseEvent) => void
  fontClassName: string
  class: string
  style: JSX.CSSProperties
}

const defaultProps = {
  name: '',
  size: '',
  color: '',
  onClick: () => { },
  class: '',
  classPrefix: globalConfig.classPrefix,
  tag: globalConfig.tag,
  fontClassName: globalConfig.fontClassName,
}

function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

function IconFont(props: ParentProps<Partial<IconFontProps>>) {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'name',
    'size',
    'color',
    'onClick',
    'class',
    'classPrefix',
    'tag',
    'fontClassName',
    'children',
    'style',
  ])

  const isImage = createMemo(() => local.name ? local.name.includes('/') : false)

  const handleClick = (e: MouseEvent) => {
    if (local.onClick) {
      local.onClick(e)
    }
  }
  const hasSrc = () => {
    if (isImage())
      return { src: local.name }
    return {}
  }
  return (
    <>
      <Show
        when={isImage()}
        fallback={(
          <i
            class={`${local.fontClassName} ${local.classPrefix} ${local.classPrefix}-${local.name} ${local.class || ''}`}
            style={{
              'color': local.color,
              'font-size': pxCheck(local.size),
              'width': pxCheck(local.size),
              'height': pxCheck(local.size),
              ...local.style,
            }}
            onClick={handleClick}
            {...rest}
          >
            {local.children}
          </i>
        )}
      >
        <img
          class={`${local.classPrefix}__img ${local.class || ''} `}
          style={{
            'color': local.color,
            'font-size': pxCheck(local.size),
            'width': pxCheck(local.size),
            'height': pxCheck(local.size),
            ...local.style,
          }}
          onClick={handleClick}
          {...hasSrc()}
          {...rest}
        >
          {local.children}
        </img>
      </Show>
    </>
  )
}

export default IconFont
