import { Dongdong } from '@nutui/icons-solid'
import { Grid, GridItem } from 'nutui-solid'

function Column() {
  return (
    <Grid columnNum={3}>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
    </Grid>
  )
}

export default Column
