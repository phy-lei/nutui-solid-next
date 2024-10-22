import { Cell } from 'nutui-solid'

function Custom() {
  return (
    <Cell title="Title" desc={<span style={{ color: 'red' }}>Description</span>} />
  )
}

export default Custom
