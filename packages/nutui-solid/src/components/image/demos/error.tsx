import { Image, Space } from 'nutui-solid'
import { Loading } from '../../icon-temple/loading'

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
          <svg class="nut-icon nut-icon-circleClose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="presentation" style={{ height: '16px', width: '16px' }}><path d="M511.492 73.063a438.425 438.425 0 0 1 310.545 748.953 439.16 439.16 0 1 1-621.09-621.073A435.695 435.695 0 0 1 511.492 73.046m0-73.063C267.49.018 57.468 172.408 9.87 411.717-37.713 651.042 90.39 890.658 315.823 984.03c225.45 93.355 485.444 14.472 621.005-188.416 135.543-202.906 108.885-473.293-63.659-645.82A509.645 509.645 0 0 0 511.492.002zm-175.7 635.495 299.673-299.674c12.049-12.049 24.115-12.049 36.164 0l15.496 15.497c12.05 12.066 12.05 24.115 0 36.18L387.47 687.122c-12.066 12.05-24.115 12.05-36.181 0l-15.497-15.496c-12.049-12.066-12.049-24.115 0-36.182zm0-284.177 15.496-15.497c12.066-12.049 24.115-12.049 36.18 0l299.64 299.674c12.05 12.049 12.05 24.098 0 36.164l-15.496 15.496c-12.05 12.05-24.115 12.05-36.182 0L335.808 387.465c-12.049-12.05-12.049-24.098 0-36.164z" fill="currentColor" fill-opacity="0.9" /></svg>
        }
      />
    </Space>
  )
}

export default Error
