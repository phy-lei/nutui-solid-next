import { Dongdong } from '@nutui/icons-solid'
import { Grid, GridItem } from 'nutui-solid'

function Horizontal() {
  return (
    <Grid direction="horizontal">
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
    </Grid>
  )
}

export default Horizontal
