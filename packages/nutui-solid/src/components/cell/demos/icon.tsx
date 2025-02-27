import { Cell } from 'nutui-solid'
import { User } from '@nutui/icons-solid'

function Icon() {
  return (
    <Cell
      title={(
        <div style={{ 'display': 'flex', 'align-items': 'center' }}>
          <User />
          <span style={{ 'margin-left': '4px' }}>Title</span>
        </div>
      )}
      desc="Description"
    />
  )
}

export default Icon
