import { Button, Space } from 'nutui-solid'

function Gutter() {
  return (
    <>
      <Space gutter={20} style={{ 'margin-bottom': '10px' }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
      <Space style={{ '--nut-space-gap': '30px' }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
    </>
  )
}

export default Gutter
