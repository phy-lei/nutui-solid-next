function Demo2() {
  const marginStyle = { margin: '8px' }
  return (
    <>
      <div type="primary" style={marginStyle} onClick={() => console.log(444)}>
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
    </>
  )
}
export default Demo2
