import { For } from 'solid-js'
import { Cell, Image } from 'nutui-solid'

function Lazy() {
  const src
    = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'

  return (
    <For each={Array.from({ length: 7 })}>
      {(_, index) => {
        return (
          <Cell>
            <Image src={`${src}?t=${index()}`} height="200" width="100%" lazyLoad />
          </Cell>
        )
      }}
    </For>
  )
}
export default Lazy
