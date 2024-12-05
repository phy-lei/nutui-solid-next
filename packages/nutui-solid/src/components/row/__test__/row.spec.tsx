import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { Row } from 'nutui-solid'

test('should add "nut-row-flex-nowrap" class when wrap prop is false', () => {
  const {container} = render(() => <Row  />)
  expect(container.children[0].classList).toContain('nut-row-flex-nowrap')
})
