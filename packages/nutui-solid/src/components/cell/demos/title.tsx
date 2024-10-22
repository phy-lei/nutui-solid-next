import { Cell } from 'nutui-solid'

function Title() {
  return (
    <Cell
      title={(
        <span style={{ color: 'red' }}>Title</span>
      )}
      desc="Description"
    />
  )
}

export default Title
