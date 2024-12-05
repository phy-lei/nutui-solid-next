import { Col, Row } from 'nutui-solid'
import { demoStyles } from './basic'

function Flex() {
  return (
    <>
      <style>{demoStyles}</style>
      <Row type="flex" flexWrap="nowrap">
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
      </Row>
      <Row type="flex" justify="center">
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
      </Row>
      <Row type="flex" justify="end">
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
      </Row>
      <Row type="flex" justify="space-between">
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
      </Row>
      <Row type="flex" justify="space-around">
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
      </Row>
    </>
  )
}
export default Flex
