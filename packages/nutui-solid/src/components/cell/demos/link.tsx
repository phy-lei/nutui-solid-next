import { Cell } from 'nutui-solid'

function Link() {
  return (
    <Cell
      title="Link"
      desc="Description"
      link={(
        <span style={{ 'margin-left': '4px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="#bd3d3d" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </span>
      )}
    />
  )
}

export default Link
