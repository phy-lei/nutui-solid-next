import { Col, Row } from 'nutui-solid'
import { demoStyles } from './basic'

function Gap() {
  return (
    <>
      <style>{demoStyles}</style>
      <Row gutter="10">
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
