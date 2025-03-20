import { Grid, GridItem } from 'nutui-solid'

const style = { 'width': '60px', 'height': '60px', 'border-radius': '50%' }

function Content() {
  return (
    <Grid>
      <GridItem>
        <img
          style={style}
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </GridItem>
      <GridItem>
        <img
          style={style}
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </GridItem>
      <GridItem>
        <img
          style={style}
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </GridItem>
      <GridItem>
        <img
          style={style}
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </GridItem>
    </Grid>
  )
}

export default Content
