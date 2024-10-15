import { Cell } from 'nutui-solid'

function Basic() {
  return (
    <>
      <Cell title="Title" desc="Description" />
      <Cell title="Title" subTitle="Subtitle" desc="Description" />
      <Cell title="Click Test" onClick="onClick" />
      <Cell title="Round Radius = 0" roundRadius="0" />
    </>
  )
}

export default Basic
