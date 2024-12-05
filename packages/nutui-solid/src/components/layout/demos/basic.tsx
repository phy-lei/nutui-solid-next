import { Col, Row } from 'nutui-solid'

export const demoStyles = `
.layout-flex-content {
  line-height: var(--nutui-row-content-line-height, 40px);
  color: var(--nutui-row-content-color, #fff);
  text-align: center;
  border-radius: var(--nutui-row-content-border-radius, 6px);
  background: var(--nutui-row-content-background-color,var(--row-content-bg-color, #ff8881));
  font-size: 14px;
  margin-bottom: 10px;
}

.layout-flex-content-light {
  background: var(--row-content-light-bg-color,#ffc7c4);
}
`

function Basic() {
  return (
    <>
      <style>{demoStyles}</style>
      <Row>
        <Col span="24">
          <div class="layout-flex-content">span:24</div>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <div class="layout-flex-content">span:12</div>
        </Col>
        <Col span="12">
          <div class="layout-flex-content layout-flex-content-light">
            span:12
          </div>
        </Col>
      </Row>
      <Row>
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
      <Row>
        <Col span="6">
          <div class="layout-flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div class="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
        <Col span="6">
          <div class="layout-flex-content">span:6</div>
        </Col>
        <Col span="6">
          <div class="layout-flex-content layout-flex-content-light">
            span:6
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Basic
