import { Loading } from '@nutui/icons-solid'
import { Image, Space } from 'nutui-solid'

function Error() {
  return (
    <Space>
      <Image src="https://x" width="100" height="100" showError />
      <Image
        src="https://x"
        width="100"
        height="100"
        showError
        loading={<Loading width="16" height="16" />}
        error={
          <CircleClose width="16px" height="16px" name="circleClose" />
        }
      />
    </Space>
  )
}

export default Error
