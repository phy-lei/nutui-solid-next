import { Loading } from '@nutui/icons-solid'
import { Image, Space } from 'nutui-solid'

function LoadingDemo() {
  return (
    <Space>
      <Image width="100" height="100" showLoading />
      <Image width="100" height="100" showLoading loading={<Loading width="16" height="16" />} />
    </Space>
  )
}

export default LoadingDemo
