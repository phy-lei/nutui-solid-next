import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { Row, Col } from 'nutui-solid'

test('should render Col correctly and should render gutter correctly', async () => {
  const { container } = render(() => <Row gutter="6">
  <Col span="8">8</Col>
  <Col span="8">8</Col>
  <Col span="8">8</Col>
</Row>)
expect(container.children[0]).toMatchSnapshot()
})
