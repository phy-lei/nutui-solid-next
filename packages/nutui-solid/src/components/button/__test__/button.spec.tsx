import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import userEvent from "@testing-library/user-event"
import { Button } from 'nutui-solid'

const user = userEvent.setup()

test("emit click event", async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => <Button onClick={handleClick}>click</Button>)
  await user.click(getByText('click'))
  expect(a).toEqual(0)
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

test('should find nut-icon class of an svg tag when using icon slot', () => {
  const { getByTestId } = render(() => <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="nut-icon" data-testid="svg"><path fill="#ffa200" d="m16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1L16 6.52M16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/></svg>}>icon</Button>)
  const icons = getByTestId('svg')
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