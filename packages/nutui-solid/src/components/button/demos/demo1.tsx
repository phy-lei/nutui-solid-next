import { Button } from 'nutui-solid'
import { Add, IconFont } from '@nutui/icons-solid'

function Demo1() {
  return (
    <>
      <Button color="blue" plain>
        <Add />
      </Button>
      <Button type="info">
        <IconFont name="minus" />
      </Button>
      <Button type="default">
        Default
      </Button>
      <Button type="danger">
        Danger
      </Button>
      <Button type="warning">
        Warning
      </Button>
      <Button type="success">
        Success
      </Button>
    </>
  )
}
export default Demo1
