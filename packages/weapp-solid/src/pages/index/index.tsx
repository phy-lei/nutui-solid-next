import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Add, Star } from '@nutui/icons-solid-taro'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View class="index">
      <Text>Hello world!</Text>
      <Add />
      <Star color="red" size="24" />
    </View>
  )
}
