import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
import { registerUser } from '../../features/auth/API/registerAPI'
const { Title, Text } = Typography

export default function Register() {
  const { t } = useTranslation()

  const onFinish = async (values) => {
    const { login, password } = values
    try {
      const data = await registerUser({ login, password })
      window.location.href = '/u/login'
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
      <Helmet>
        <title>{t('auth.register')}</title>
      </Helmet>
      <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-2 lg:p-0">
        <div className="text-center">
          <Title level={2}>Đăng ký</Title>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-5 lg:p-0 "
        >
          <Form.Item name="login">
            <Input size="large" placeholder="Login" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="w-full" size="large">
              Tiếp tục
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
