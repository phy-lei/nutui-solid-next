import { Component, JSX, ParentProps, Show, mergeProps, splitProps } from 'solid-js'

export type CellGroupProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, 'title'> & Partial<{
  title: JSX.Element
  desc: JSX.Element
}>

export const CellGroup: Component<ParentProps<CellGroupProps>> = (props) => {
  const merged = mergeProps({
    title: '',
    desc: '',
  }, props)

  const [local, rest] = splitProps(merged, [
    'title',
    'desc',
    'children',
  ])

  return (
    <div class="nut-cell-group" {...rest}>
      <Show when={local.title}>
        <div class="nut-cell-group__title">{local.title}</div>
      </Show>
      <Show when={local.desc}>
        <div class="nut-cell-group__desc">{local.desc}</div>
      </Show>
      <div class="nut-cell-group__wrap">
        {local.children}
      </div>
    </div>
  )
}
