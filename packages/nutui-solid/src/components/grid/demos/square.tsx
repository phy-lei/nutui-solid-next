import { Dongdong } from '@nutui/icons-solid'
import { Grid, GridItem } from 'nutui-solid'

function Square() {
  return (
    <Grid columnNum={3} square>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
      <GridItem text="text"><Dongdong /></GridItem>
    </Grid>
  )
}

export default Square
