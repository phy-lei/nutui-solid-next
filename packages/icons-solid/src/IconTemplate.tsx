import { createMemo, mergeProps } from 'solid-js'
import { type Component, type JSX, type ParentProps } from 'solid-js'
import { globalConfig } from './internal'

export interface SVG_IconProps {
    class?: string
    style?: JSX.CSSProperties
    viewBox?: string
    name?: string
    color?: string
    width?: string | number
    height?: string | number
    onClick?: (event: MouseEvent) => void
}

export const defaultProps = {
    class: '',
    style: {},
    viewBox: ' 0 0 1024 1024',
    name: '',
    width: '',
    height: '',
    onClick: () => { },
} as SVG_IconProps

const Icon: Component<ParentProps<SVG_IconProps>> = (props) => {
    const classPrefix = globalConfig.classPrefix
    const merged = mergeProps(defaultProps, props)

    const handleClick = (e: MouseEvent) => {
        merged.onClick && merged.onClick(e)
    }
    const pxCheck = (value: string | number): string => {
        if (value === '')
            return ''
        return isNaN(Number(value)) ? String(value) : `${value}px`
    }

    const classes = createMemo(() => {
        return `${classPrefix} ${classPrefix}-${merged.name} ${merged.class}`
    })

    const getStyle = createMemo(() => {
        const props2Style: any = {}
        const checkedWidth = pxCheck(merged.width || '')
        const checkedHeight = pxCheck(merged.height || '')
        if (checkedWidth) {
            props2Style.width = checkedWidth
        }
        if (checkedHeight) {
            props2Style.height = checkedHeight
        }
        return {
            color: merged.color,
            ...merged.style,
            ...props2Style,
        }
    })

    return (
        <>
            <svg
                class={classes()}
                style={getStyle()}
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                color={merged.color}
                viewBox={merged.viewBox}
                aria-labelledby={merged.name}
                role="presentation"
            >
                {merged.children}
            </svg>
        </>
    )
}

export default Icon
