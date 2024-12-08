import { Tag } from 'antd'

const UMEmpType = ({ status }) => {
  let color
  let text

  switch (status) {
    case 3059001:
      color = 'green'
      text = 'Official'
      break
    case 3059002:
      color = 'geekblue'
      text = 'Seasonal'
      break
    default:
      color = 'default'
      text = 'Default '
      break
  }

  return <Tag color={color}>{text}</Tag>
}

export default UMEmpType
