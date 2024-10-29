import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { Button, Space } from 'nutui-solid'

const prefixCls = 'nut-space'

test('space: should match snapshot', () => {
  const { container } = render(() => 
  <Space>
    <Button>按钮</Button>
    <Button>按钮</Button>
    <Button>按钮</Button>
  </Space>)
  expect(container.children[0]).toMatchSnapshot()
})

test('space: with props direction', () => {
  const { container } = render(() => 
    <Space direction="vertical">
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].classList).toContain(`${prefixCls}-vertical`)
})

test('space: with props align', () => {
  const { container } = render(() => 
    <Space align="end">
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].classList).toContain(`${prefixCls}-align-end`)
})

test('space: with props justify', () => {
  const { container } = render(() => 
    <Space justify="center">
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].classList).toContain(`${prefixCls}-justify-center`)
})

test('space: with props wrap', () => {
  const { container } = render(() => 
    <Space wrap>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].classList).toContain(`${prefixCls}-wrap`)
})

test('space: with props fill', () => {
  const { container } = render(() => 
    <Space fill>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].classList).toContain(`${prefixCls}-fill`)
})

test('space: with props gutter number', () => {
  const { container } = render(() => 
    <Space gutter={20}>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].children[0]).toHaveStyle('margin-right: 20px;')
})

test('space: with props gutter string', () => {
  const { container } = render(() => 
    <Space gutter='1rem'>
      <Button>按钮</Button>
      <Button>按钮</Button>
      <Button>按钮</Button>
    </Space>)
  expect(container.children[0].children[0]).toHaveStyle('margin-right: 1rem;')
})