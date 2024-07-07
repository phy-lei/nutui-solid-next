import { Show, createMemo, mergeProps, splitProps } from 'solid-js'
import { type Component, type JSX } from 'solid-js'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'xlarge' | 'large' | 'normal' | 'small' | 'mini'
export type ButtonShape = 'square' | 'round'
export type ButtonFill = 'solid' | 'outline' | 'dashed' | 'none'

export type ButtonProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  type: ButtonType
  size: ButtonSize
  block: boolean
  icon: JSX.Element
}>

const defaultProps: ButtonProps = {
  color: '',
  shape: 'round',
  plain: false,
  loading: false,
  disabled: false,
  type: 'default',
  size: 'normal',
  block: false,
  icon: null,
}

export const Button: Component<ButtonProps> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'color',
    'shape',
    'plain',
    'loading',
    'disabled',
    'icon',
    'type',
    'size',
    'block',
    'children',
    'class',
    'style',
    'onClick',
    'ref',
  ])

  const getStyle = createMemo(() => {
    let style: JSX.CSSProperties = {}
    if (local.color) {
      style = {
        color: local.plain ? local.color : '#fff',
        background: local.plain ? '#fff' : `border-box ${local.color}`,
      }
      if (local.color.includes('gradient')) {
        style['border-color'] = 'transparent'
      }
      else {
        style['border-color'] = local.color
      }
    }
    return style
  })

  const handleClick: JSX.EventHandler<HTMLDivElement, MouseEvent> = (e) => {
    if (!local.loading && !local.disabled && local.onClick) {
      if (typeof local.onClick === 'function') {
        local.onClick(e)
      }
    }
  }

  const classes = createMemo(() => {
    const prefixCls = 'nut-button'
    return {
      [prefixCls]: true,
      [`${prefixCls}--${local.type}`]: !!local.type,
      [`${prefixCls}--${local.size}`]: !!local.size,
      [`${prefixCls}--${local.shape}`]: !!local.shape,
      [`${prefixCls}--plain`]: local.plain,
      [`${prefixCls}--block`]: local.block,
      [`${prefixCls}--disabled`]: local.disabled,
      [`${prefixCls}--loading`]: local.loading,
    }
  })

  return (
    <div
      {...rest}
      ref={local.ref}
      classList={classes()}
      style={getStyle()}
      onClick={handleClick}
    >
      <div class="nut-button__wrap">
        <Show when={local.loading} fallback={null}>
          {/* Loading Component */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="2" r="0" fill="#fff">
              <animate
                attributeName="r"
                begin="0"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(45 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.125s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(90 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.25s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(135 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.375s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(180 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.5s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(225 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.625s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(270 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.75s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle
              cx="12"
              cy="2"
              r="0"
              fill="#ffa200"
              transform="rotate(315 12 12)"
            >
              <animate
                attributeName="r"
                begin="0.875s"
                calcMode="spline"
                dur="1s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
          </svg>
        </Show>
        <Show when={!local.loading && local.icon} fallback={null}>
          {local.icon}
        </Show>
        <Show when={local.children} fallback={null}>
          <div
            class={`${local.icon || local.loading ? 'nut-button__text' : ''}`}
          >
            {local.children}
          </div>
        </Show>
      </div>
    </div>
  )
}
