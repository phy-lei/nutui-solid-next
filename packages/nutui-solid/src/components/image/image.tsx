import { Component, JSX, ParentProps, Show, createEffect, createMemo, createSignal, mergeProps, onCleanup, onMount, splitProps } from 'solid-js'
import { DOMElement } from 'solid-js/jsx-runtime'
import { ImageError, ImageIcon } from '@nutui/icons-solid'
import { pxCheck } from '@/utils/pxCheck'

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
export type ImagePosition = 'center' | 'top' | 'right' | 'bottom' | 'left' | string

export type ImageProps = Omit<JSX.HTMLAttributes<HTMLImageElement>, 'onClick'> & Partial<{
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string
  height: string
  round: boolean
  radius: string | number
  showError: boolean
  showLoading: boolean
  lazyLoad: boolean
  loading: JSX.Element
  error: JSX.Element
  onClick: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent>
}>

const defaultProps: ImageProps = {
  fit: 'fill',
  position: 'center',
  alt: '',
  width: '',
  height: '',
  round: false,
  showError: true,
  showLoading: true,
  lazyLoad: false,
}
export const Image: Component<ParentProps<ImageProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'src',
    'fit',
    'position',
    'width',
    'height',
    'round',
    'radius',
    'showError',
    'showLoading',
    'lazyLoad',
    'loading',
    'error',
    'children',
    'onClick',
    'onLoad',
    'onError',
  ])

  const [loading, setLoading] = createSignal(true)
  const [isError, setIsError] = createSignal(false)
  const [show, setShow] = createSignal(false)

  let observer: IntersectionObserver
  let imgRef: HTMLImageElement

  const classes = createMemo(() => {
    const prefixCls = 'nut-image'
    return {
      [prefixCls]: true,
      [`${prefixCls}-round`]: local.round,
    }
  })
  const initObserver = () => {
    const options = {
      threshold: [0],
      rootMargin: '0px',
    }
    observer = new IntersectionObserver((entires) => {
      entires.forEach((item) => {
        if (item.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
    }, options)
    imgRef && observer?.observe(imgRef)
  }

  onMount(() => {
    local.lazyLoad && initObserver()
  })

  onCleanup(() => {
    observer && observer.disconnect()
  })

  const stylebox = createMemo(() => {
    const style: JSX.CSSProperties = {}

    if (local.width)
      style.width = pxCheck(local.width)
    if (local.height)
      style.height = pxCheck(local.height)

    if (local.radius !== undefined && local.radius !== null) {
      style.overflow = 'hidden'
      style['border-radius'] = pxCheck(local.radius)
    }

    return style
  })
  const styles = createMemo(() => {
    const styless: JSX.CSSProperties = {
      'object-fit': local.fit,
      'object-position': local.position,
    }

    return styless
  })

  createEffect(() => {
    if (local.src) {
      setIsError(false)
      setLoading(true)
    }
  })

  // 图片加载
  const onLoad = (e: Event & {
    currentTarget: HTMLImageElement
    target: DOMElement
  }) => {
    setIsError(false)
    setLoading(false)
    if (typeof local.onLoad === 'function')
      local.onLoad(e)
  }
  // 图片加载失败
  const onError = (e: Event & {
    currentTarget: HTMLImageElement
    target: DOMElement
  }) => {
    setIsError(true)
    setLoading(false)
    if (typeof local.onError === 'function')
      local.onError(e)
  }

  const imageClick = (e: MouseEvent & {
    currentTarget: HTMLDivElement
    target: DOMElement
  }) => {
    if (typeof local.onClick === 'function')
      local.onClick(e)
  }

  return (
    <div classList={classes()} style={stylebox()} onClick={imageClick}>
      <img
        ref={imgRef}
        class="nut-img"
        src={local.lazyLoad ? (show() ? local.src : undefined) : local.src}
        data-src={local.lazyLoad ? (show() ? undefined : local.src) : undefined}
        style={styles()}
        {...rest}
        onLoad={onLoad}
        onError={onError}
      />
      <Show when={loading()}>
        <div class="nut-img-loading">
          {local.loading ?? (
            <ImageIcon width="16px" height="20px" name="image" />
          )}
        </div>
      </Show>
      <Show when={isError() && !loading()}>
        <div class="nut-img-error">
          {local.error ?? (
            <ImageError width="16px" height="20px" name="imageError" />
          )}
        </div>
      </Show>
    </div>
  )
}
