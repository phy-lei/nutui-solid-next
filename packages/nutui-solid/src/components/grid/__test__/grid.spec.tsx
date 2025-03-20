import { test, expect } from "vitest"
import { render } from "@solidjs/testing-library"
import { Grid, GridItem } from 'nutui-solid'
import userEvent from "@testing-library/user-event"

const user = userEvent.setup()

test('should render square correctly', () => {
  const { container } = render(() => (
    <Grid square columnNum={2}>
      <GridItem />
      <GridItem />
      <GridItem />
    </Grid>
  ))
expect(container.children[0]).toMatchSnapshot()
})

test('should render square correctly', () => {
  const { container } = render(() => (
    <Grid gutter={20}>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </Grid>
  ))
expect(container.children[0]).toMatchSnapshot()
})

test('should render default slot correctly', () => {
  const { container } = render(() => (
    <Grid>
      <GridItem>Default Slot</GridItem>
    </Grid>
  ))
  expect(container.children[0].children[0].children[0]).toMatchSnapshot()
expect(container.children[0]).toMatchSnapshot()
})

test('should click correctly', async () => {
  let a = 0
  const handleClick = () => {
    a++
  }
  const { getByText } = render(() => (
    <Grid>
      <GridItem onClick={handleClick}>click</GridItem>
    </Grid>
  ))
  await user.click(getByText('click'))
  expect(a).toEqual(1)
})