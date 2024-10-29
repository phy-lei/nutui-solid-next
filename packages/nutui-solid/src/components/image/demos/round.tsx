import { Image, Space } from 'nutui-solid'

function Round() {
  const src
    = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <Space>
      <div>
        <Image src={src} width="100" height="100" fit="cover" round />
        <div style={{ 'text-align': 'center' }}>cover</div>
      </div>
      <div>
        <Image src={src} width="100" height="100" fit="cover" radius="10px" />
        <div style={{ 'text-align': 'center' }}>cover</div>
      </div>
    </Space>
  )
}

export default Round
