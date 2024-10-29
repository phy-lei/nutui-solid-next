import { test, expect } from "vitest"
import { fireEvent, render } from "@solidjs/testing-library"
import { Image } from 'nutui-solid'

const url = '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'

test('Image: render', async () => {
  const { container } = render(() => <Image src={url} width="100" height="100" showLoading />)
  const imgElement = container.querySelector('img')
  await fireEvent.load(imgElement)
  expect(container).toMatchSnapshot()
})

test('Image: load error', async () => {
  const { container } = render(() => <Image src='https://x' width="100" height="100" showError />)
  const imgElement = container.querySelector('img')
  await fireEvent.error(imgElement)
  expect(container.children[0].children[1].classList).toContain('nut-img-error')
  expect(container).toMatchSnapshot()
})

test('Image: loading', async () => {
  const { container } = render(() => <Image src='' width="100" height="100" showLoading />)
  expect(container.children[0].children[1].classList).toContain('nut-img-loading')
  expect(container).toMatchSnapshot()
})

test('Image: render Round', async () => {
  const { container } = render(() => <Image src={url} width="100" height="100" round />)
  const imgElement = container.querySelector('img')
  await fireEvent.load(imgElement)
  expect(container.children[0].classList).toContain('nut-image-round')
  expect(container).toMatchSnapshot()
})
