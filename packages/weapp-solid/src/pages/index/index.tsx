import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Add } from '@nutui/icons-solid-taro'
import { Button } from 'nutui-solid'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View class="index">
      <Text>Hello world!</Text>
      <Add />
      <Button>123</Button>
    </View>
  )
}
