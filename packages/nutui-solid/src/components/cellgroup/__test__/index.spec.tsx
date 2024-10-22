import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { CellGroup } from 'nutui-solid'

test('should render title、desc prop correctly', () => {
  const { getByText } = render(() => <CellGroup title="Custom Title" desc='Custom Desc' />)
  expect(getByText('Custom Title')).toHaveTextContent('Custom Title')
  expect(getByText('Custom Desc')).toHaveTextContent('Custom Desc')
})
