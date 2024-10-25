import { For, JSX } from 'solid-js'
import { Image, ImageFit, Space } from 'nutui-solid'

function Fit() {
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as ImageFit[]
  const src
    = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'

  const imageText: JSX.CSSProperties = {
    'margin-top': '5px',
    'text-align': 'center',
    'color': '#999',
    'font-size': '13px',
  }

  return (
    <Space wrap>
      <For each={fits}>
        {(i) => {
          return (
            <div>
              <Image src={src} width="80" height="80" fit={i} />
              <div style={imageText}>{i}</div>
            </div>
          )
        }}
      </For>
    </Space>
  )
}
export default Fit
