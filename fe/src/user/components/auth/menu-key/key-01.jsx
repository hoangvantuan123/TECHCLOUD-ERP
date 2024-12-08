import {
  Button,
  Avatar,
  Form,
  Input,
  Typography,
  DatePicker,
  Row,
  Col,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import DefaultAvatar from '../../../../assets/default-avatar.png'
import '../static/css/scroll_container.css'

const { Title } = Typography

export default function KeyMenu01() {
  const { t } = useTranslation()
  const userFromLocalStorage =
    JSON.parse(localStorage.getItem('userInfo')) || {}

  const [formData, setFormData] = useState({
    firstName: userFromLocalStorage.firstName || '',
    lastName: userFromLocalStorage.lastName || '',
    mobile: userFromLocalStorage.mobile || '',
    workEmail: userFromLocalStorage.workEmail || '',
    birthDate: userFromLocalStorage.birthDate
      ? moment(userFromLocalStorage.birthDate)
      : null,
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const onFinish = (values) => {
    console.log('Submitted:', values)
  }

  const CustomInput = ({ label, field }) => (
    <Form.Item label={label} name={field}>
      <Input
        size="large"
        value={formData[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
      />
    </Form.Item>
  )

  return (
    <div className="h-full overflow-auto scrollable-content scroll-container">
      <Title level={4}>
        {t('personal_settings_key_menu_01.personal_settings')}
      </Title>

      <div className="flex items-center gap-4 mb-4">
        <Avatar
          size={64}
          src={userFromLocalStorage.avatar || DefaultAvatar}
          className="mr-4"
        />
        <div>
          <Title level={5}>{userFromLocalStorage.login || 'none'}</Title>
          <span>
            {t('personal_settings_key_menu_01.your_personal_account')}
          </span>
        </div>
      </div>

      <Form
        name="personal_settings"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        {/* Personal Information Section */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.personal_information')}
        </Title>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <CustomInput
              label={t('personal_settings_key_menu_01.first_name')}
              field="firstName"
            />
          </Col>
          <Col xs={24} sm={12}>
            <CustomInput
              label={t('personal_settings_key_menu_01.last_name')}
              field="lastName"
            />
          </Col>
        </Row>

        {/* Contact Information Section */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.contact_information')}
        </Title>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <CustomInput
              label={t('personal_settings_key_menu_01.mobile')}
              field="mobile"
            />
          </Col>
          <Col xs={24} sm={12}>
            <CustomInput
              label={t('personal_settings_key_menu_01.work_email')}
              field="workEmail"
            />
          </Col>
        </Row>

        {/* Birth Date */}
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label={t('personal_settings_key_menu_01.birth_date')}
              name="birthDate"
            >
              <DatePicker
                size="large"
                value={formData.birthDate}
                onChange={(date) => handleInputChange('birthDate', date)}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
