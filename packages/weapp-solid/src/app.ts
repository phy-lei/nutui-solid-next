
import { ParentProps } from 'solid-js'
import { useLaunch } from '@tarojs/taro'
// 引入所有组件的样式文件
import './app.css'


function App({ children }: ParentProps) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}


export default App
