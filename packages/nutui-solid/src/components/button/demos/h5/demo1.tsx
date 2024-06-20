import { Button } from 'nutui-solid'

const Demo1 = () => {
  const marginStyle = { margin: '8px' }
  return (
    <>
      <Button type="primary" style={marginStyle}>
        Primary
      </Button>
      <Button type="info" style={marginStyle}>
        Info
      </Button>
      <Button type="default" style={marginStyle}>
        Default
      </Button>
      <Button type="danger" style={marginStyle}>
        Danger
      </Button>
      <Button type="warning" style={marginStyle}>
        Warning
      </Button>
      <Button type="success" style={marginStyle}>
        Success
      </Button>
    </>
  )
}
export default Demo1
