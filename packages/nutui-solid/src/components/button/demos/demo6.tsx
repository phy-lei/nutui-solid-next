import { Button } from 'nutui-solid'
import { Star, StarFill } from '@nutui/icons-solid'

function Demo6() {
  return (
    <>
      <Button shape="square" plain type="primary" icon={<StarFill />} />
      <Button shape="square" type="primary" icon={<Star />}>Star</Button>
    </>
  )
}
export default Demo6
