import { Button, Col, Row, Space } from 'nutui-solid'
import { createSignal } from 'solid-js'
import { demoStyles } from './basic'

function Gap() {
  const [gutter, setGutter] = createSignal(8)

  const handleClick = () => {
    setGutter(gutter() + 4)
  }

  return (
    <>
      <style>{demoStyles}</style>
      <Space>
        <Button onClick={handleClick}>add</Button>
        <Button onClick={() => setGutter(gutter() - 4)}>minus</Button>
      </Space>
      <Row gutter={gutter()}>
        <Col span="8">
          <div class="layout-flex-content">span:8</div>
        </Col>
        <Col span="8">
          <div class="layout-flex-content layout-flex-content-light">
            span:8
          </div>
        </Col>
        <Col span="8">
          <div class="layout-flex-content">span:8</div>
        </Col>
      </Row>
    </>
  )
}
export default Gap
