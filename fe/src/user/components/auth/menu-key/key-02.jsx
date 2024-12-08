import { Button, Form, Input, Select, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { message } from 'antd'
const { Title } = Typography
const { Option } = Select

export default function KeyMenu02() {
  const { t } = useTranslation()
  const [email, setEmail] = useState(
    localStorage.getItem('email') || 'none@itm.com',
  )
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en',
  )
  const [timezone, setTimezone] = useState(
    localStorage.getItem('timezone') || '',
  )

  const onFinish = (values) => {
    try {
      setLanguage(values.language)
      localStorage.setItem('language', values.language)
      message.success(t('personal_settings_key_menu_02.success'))
    } catch (error) {
      message.error(t('personal_settings_key_menu_02.error'))
    }
  }

  return (
    <div>
      <Title level={4}>
        {t('personal_settings_key_menu_02.personalized_customization')}
      </Title>

      <Form
        name="notification_settings"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{ email, language, timezone }}
      >
        <Title level={5}>
          {t('personal_settings_key_menu_02.notification_method')}
        </Title>
        <Form.Item name="notification_method">
          <Select
            placeholder={t(
              'personal_settings_key_menu_02.select_notification_method',
            )}
            size="large"
          >
            <Option value="email">
              {t('personal_settings_key_menu_02.email')}
            </Option>
            <Option value="system">
              {t('personal_settings_key_menu_02.system')}
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_02.email')}
          name="email"
        >
          <Input
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_02.language')}
          name="language"
        >
          <Select
            size="large"
            value={language}
            onChange={(value) => setLanguage(value)}
          >
            <Option value="vi">
              {t('personal_settings_key_menu_02.vietnamese')}
            </Option>
            <Option value="en">
              {t('personal_settings_key_menu_02.english')}
            </Option>
          </Select>
        </Form.Item>

        {/* Múi giờ */}
        <Form.Item
          label={t('personal_settings_key_menu_02.timezone')}
          name="timezone"
        >
          <Input
            size="large"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="px-7" size="default">
            {t('personal_settings_key_menu_02.save')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
