import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import userEvent from "@testing-library/user-event"
import { Button } from 'nutui-solid'
import { Star } from '@nutui/icons-solid'

const user = userEvent.setup()

test("emit click event", async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => <Button onClick={handleClick}>click</Button>)
  await user.click(getByText('click'))
  expect(a).toEqual(1)
})

test('children test', async () => {
  const { getByText } = render(() => <Button>按钮测试</Button>)
  expect(getByText('按钮测试')).toHaveTextContent('按钮测试')
})

test('should not allow click when set disabled props', async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => <Button onClick={handleClick} disabled>click</Button>)
  await user.click(getByText('click'))
  expect(a).toEqual(0)
})

test('should not emit click event when loading', async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => <Button onClick={handleClick} loading>click</Button>)
  user.click(getByText('click'))
  expect(await user.click(getByText('click'))).toBeFalsy()
})

test('should container nut-icon class of an svg tag when using icon slot', () => {
  const { container } = render(() => <Button icon={<Star />}>icon</Button>)
  const icons = container.querySelector('svg')
  expect(icons.classList).toContain('nut-icon')
})

test('props color', async () => {
  const { container } = render(() => <Button color="blue">props</Button>)
  expect(container.children[0]).toHaveStyle('border-color: blue')
})

test('props color & plain', async () => {
  const { container } = render(() => <Button color="blue" plain>props</Button>)
  expect(container.children[0]).toHaveStyle('border-color: blue')
  expect(container.children[0]).toHaveStyle('background: rgb(255, 255, 255)')
})