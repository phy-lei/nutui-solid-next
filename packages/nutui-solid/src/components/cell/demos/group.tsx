import { Cell, CellGroup } from 'nutui-solid'

function Group() {
  return (
    <CellGroup title="CellGroup Title" desc="CellGroup Description">
      <Cell title="Cell" />
      <Cell title="Link Style" isLink />
    </CellGroup>
  )
}

export default Group
