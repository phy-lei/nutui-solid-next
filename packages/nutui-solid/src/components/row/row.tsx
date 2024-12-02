import { Component, JSX, ParentProps, createMemo, mergeProps, splitProps } from 'solid-js'
import { DataContext } from './UserContext'

export type RowProps = JSX.HTMLAttributes<HTMLDivElement> & Partial<{
  type: string
  gutter: string | number
  justify: string
  align: string
  flexWrap: string
}>

const defaultProps = {
  type: '',
  gutter: '',
  justify: 'start',
  align: 'flex-start',
  flexWrap: 'nowrap',
}

export const Row: Component<ParentProps<RowProps>> = (props) => {
  const merged = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(merged, [
    'type',
    'gutter',
    'justify',
    'align',
    'flexWrap',
  ])

  const getClass = (prefix: string, type: string) => {
    return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`
  }

  const classes = createMemo(() => {
    return {
      'nut-row': true,
      [getClass('', local.type)]: true,
      [getClass('justify', local.justify)]: true,
      [getClass('align', local.align)]: true,
      [getClass('flex', local.flexWrap)]: true,
    }
  })

  return (
    <DataContext.Provider value={{ gutter: local.gutter }}>
      <div classList={classes()} {...rest}>
        {props.children}
      </div>
    </DataContext.Provider>
  )
}
