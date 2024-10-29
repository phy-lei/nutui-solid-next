import { Image } from 'nutui-solid'

function Basic() {
  const src
    = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <Image
      src={src}
      onClick={() => {
        console.log('click image')
      }}
    />
  )
}
export default Basic
