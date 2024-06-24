function Demo5() {
  const marginStyle = { margin: '8px' }
  return (
    <div>
      <div type="primary" style={marginStyle} onClick={() => console.log(123123)}>
        Primary
      </div>
      <div type="info" style={marginStyle}>
        Info
      </div>
      <div type="default" style={marginStyle}>
        Default
      </div>
      <div type="danger" style={marginStyle}>
        Danger
      </div>
      <div type="warning" style={marginStyle}>
        Warning
      </div>
      <div type="success" style={marginStyle}>
        Success
      </div>
    </div>
  )
}
export default Demo5
