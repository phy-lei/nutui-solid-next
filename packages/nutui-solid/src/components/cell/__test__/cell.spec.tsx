import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import userEvent from "@testing-library/user-event"
import { Cell } from 'nutui-solid'

const user = userEvent.setup()

test('prop title desc subtitle', async () => {
  const { getByText: render1GetByText } = render(() => <Cell title="标题1" desc='描述1' subTitle='副标题1'></Cell>)
  expect(render1GetByText('标题1')).toHaveTextContent('标题1')
  expect(render1GetByText('描述1')).toHaveTextContent('描述1')
  expect(render1GetByText('副标题1')).toHaveTextContent('副标题1')

  const { getByText: render2GetByText } = render(() => <Cell title="标题2" desc='描述2' subTitle='副标题2'></Cell>)
  expect(render2GetByText('标题2')).toHaveTextContent('标题2')
  expect(render2GetByText('描述2')).toHaveTextContent('描述2')
  expect(render2GetByText('副标题2')).toHaveTextContent('副标题2')
})

test('prop desc-text-align left', () => {
  const { container } = render(() => <Cell descTextAlign='left' desc='张三' ></Cell>)
  
  expect(container.children[0].children[0]).toHaveStyle('text-align: left')
})

test('prop isLink', () => {
  const { container, getByTestId } = render(() => <Cell isLink></Cell>)
  
  expect(container.children[0].classList).toContain('nut-cell--clickable')
  const icons = getByTestId('test-cell-svg')
  expect(icons.classList).toContain('nut-cell__link')
})

test("click event", async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => <Cell onClick={handleClick}>click</Cell>)
  await user.click(getByText('click'))
  expect(a).toEqual(1)
})

test('children test', async () => {
  const { getByText, queryByText } = render(() => <Cell title="标题1" desc='描述1' subTitle='副标题1'>Custom Content</Cell>)

  expect(queryByText('标题1')).toBeNull()
  expect(queryByText('描述1')).toBeNull()
  expect(queryByText('副标题1')).toBeNull()
  expect(getByText('Custom Content')).toHaveTextContent('Custom Content')
})

test('prop link test', () =>{
  const { getByText } = render(() => <Cell title="标题1" desc='描述1' subTitle='副标题1' link='Custom Link'></Cell>)
  expect(getByText('Custom Link')).toHaveTextContent('Custom Link')
 })