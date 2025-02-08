import h from 'solid-js/h'
import { mergeProps, createMemo } from 'solid-js'
import { type Component, type JSX, type ParentProps } from 'solid-js'
import { globalConfig } from "./internal";

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
    onClick: (e: MouseEvent) => {},
    class: '',
    classPrefix: globalConfig.classPrefix,
    tag: globalConfig.tag,
    fontClassName: globalConfig.fontClassName,
}

function pxCheck(value: string | number): string {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

export default function Icon<T>(props): Component<ParentProps<Partial<IconProps> & T>> {
    const merged = mergeProps(defaultProps, props)
 

    const isImage = createMemo(() => merged.name ? merged.name.indexOf('/') !== -1 : false)
    
    const type = createMemo(() => isImage() ? 'img' : merged.tag)

    const handleClick = (e: MouseEvent) => {
        if (merged.onClick) {
            merged.onClick(e)
        }
    }
    const hasSrc = () => {
        if (isImage()) return { src: merged.name }
        return {}
    }

    return h(
        type(),
        {
            class: isImage
                ? `${merged.classPrefix}__img ${merged.class || ''} `
                : `${merged.fontClassName} ${merged.classPrefix} ${merged.classPrefix}-${merged.name} ${
                    merged.class || ''
                }`,
            style: {
                color: merged.color,
                fontSize: pxCheck(merged.size),
                width: pxCheck(merged.size),
                height: pxCheck(merged.size),
                ...merged.style,
            },
            ...merged.rest,
            onClick: handleClick,
            ...hasSrc(),
        },
        merged.children
    )
}


