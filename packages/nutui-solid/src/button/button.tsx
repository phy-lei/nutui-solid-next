import { mergeProps, splitProps, Show } from 'solid-js'
import classNames from 'classnames'
import { toObjectStyle } from '@/utils/style'
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

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  color: string
  shape: ButtonShape
  type: ButtonType
  size: ButtonSize
  fill: ButtonFill
  block: boolean
  loading: boolean
  disabled: boolean
  icon: JSX.Element
  rightIcon: JSX.Element
  nativeType: 'submit' | 'reset' | 'button'
}

const prefixCls = 'nut-button'

const defaultProps: ButtonProps = {
  color: '',
  type: 'default',
  size: 'normal',
  shape: 'round',
  fill: 'outline',
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  rightIcon: null,
  nativeType: 'button',
}

export const Button: Component<Partial<ButtonProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'color',
    'shape',
    'fill',
    'loading',
    'disabled',
    'type',
    'size',
    'block',
    'icon',
    'rightIcon',
    'children',
    'class',
    'style',
    'nativeType',
    'onClick',
    'ref',
  ])
  const getStyle = () => {
    const style: JSX.CSSProperties = {}
    if (local.color) {
      if (local.fill === 'outline' || local.fill === 'dashed') {
        style.color = local.color
        if (!local.color?.includes('gradient')) {
          style['border-color'] = local.color
        }
      } else {
        style.color = '#fff'
        style.background = local.color
        style['border-color'] = 'transparent'
      }
    }
    return style
  }

  const handleClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    if (!local.loading && !local.disabled && local.onClick) {
      if (typeof local.onClick === 'function') {
        local.onClick(e)
      }
    }
  }

  return (
    <button
      {...rest}
      ref={local.ref}
      type={local.nativeType}
      class={classNames(
        prefixCls,
        `${prefixCls}-${local.type}`,
        local.fill ? `${prefixCls}-${local.fill}` : null,
        local.children ? '' : `${prefixCls}-icononly`,
        {
          [`${prefixCls}-${local.size}`]: local.size,
          [`${prefixCls}-${local.shape}`]: local.shape,
          [`${prefixCls}-block`]: local.block,
          [`${prefixCls}-disabled`]: local.disabled || local.loading,
          [`${prefixCls}-loading`]: local.loading,
        },
        local.class
      )}
      style={{ ...getStyle(), ...toObjectStyle(local.style ?? {}) }}
      onClick={handleClick}
    >
      <div class="nut-button-wrap">
        <Show when={local.loading} fallback={null}>
          {/* Loading Component */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="2" r="0" fill="#ffa200">
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
            class={`${local.icon || local.loading ? 'nut-button-text' : ''}${
              local.rightIcon ? ' nut-button-text right' : ''
            }`}
          >
            {local.children}
          </div>
        </Show>
        <Show when={local.rightIcon} fallback={null}>
          {local.rightIcon}
        </Show>
      </div>
    </button>
  )
}
