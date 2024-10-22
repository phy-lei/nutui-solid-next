import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { Divider } from 'nutui-solid'

test('children test', () => {
  const { getByText } = render(() => <Divider>custom text</Divider>)
  expect(getByText('custom text')).matchSnapshot()
})