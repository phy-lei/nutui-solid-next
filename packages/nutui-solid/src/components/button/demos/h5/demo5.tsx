import { createSignal } from 'solid-js'
import { Button } from 'nutui-solid'

const Demo5 = () => {
  const [isLoading, setIsLoading] = createSignal(false)
  const onChange = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <>
      <Button loading type="info"></Button>
      <Button loading type="warning">Loading...</Button>
      <Button loading={isLoading()} type="success" onClick={onChange}>Click me!</Button>
    </>
  )
}
export default Demo5
