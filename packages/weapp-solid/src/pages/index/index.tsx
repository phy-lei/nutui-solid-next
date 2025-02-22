import { Text, View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Add, Star } from '@nutui/icons-solid-taro'
import { createStore } from 'solid-js/store'

import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const [store, setStore] = createStore({
    userCount: 3,
    users: [
      {
        id: 0,
        username: 'felix909',
        location: 'England',
        loggedIn: false,
      },
      {
        id: 1,
        username: 'tracy634',
        location: 'Canada',
        loggedIn: true,
      },
      {
        id: 2,
        username: 'johny123',
        location: 'India',
        loggedIn: true,
      },
    ],
  })

  return (
    <View class="index">
      <View id="box" />
      <Text>Hello world!</Text>
      <Add />
      <Star color="red" size="24" />
      <h1>
        Hello,
        {store.users[0].username}
      </h1>

    </View>
  )
}
