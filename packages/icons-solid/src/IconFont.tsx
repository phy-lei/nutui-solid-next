import h from 'solid-js/h'
import { memo } from 'solid-js/web'
import { createMemo, mergeProps, splitProps } from 'solid-js'
import { type JSX, type ParentProps } from 'solid-js'
import { globalConfig } from './internal'

export interface IconProps {
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

function IconFont(props: ParentProps<Partial<IconProps>>) {
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

  const type = createMemo(() => isImage() ? 'img' : local.tag)

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

  return memo(() => h(
    type(),
    {
      class: isImage()
        ? `${local.classPrefix}__img ${local.class || ''} `
        : `${local.fontClassName} ${local.classPrefix} ${local.classPrefix}-${local.name} ${local.class || ''
        }`,
      style: {
        color: local.color,
        fontSize: pxCheck(local.size),
        width: pxCheck(local.size),
        height: pxCheck(local.size),
        ...local.style,
      },
      ...rest,
      onClick: handleClick,
      ...hasSrc(),
    },
    local.children,
  ), true) as unknown as JSX.Element
}

export default IconFont
