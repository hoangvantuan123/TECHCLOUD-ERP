import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button, Form, Input, Typography, notification, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginAuth } from '../../features/auth/login'
import decodeJWT from '../../utils/decode-JWT'
import Cookies from 'js-cookie'
import BgCarousel from '../components/carousel/bgCarousel'
import { ChangePassword } from '../../features/auth/changePassword'
import Logo from '../../assets/ItmLogo.png'
const { Title, Text } = Typography
const languages = [
  { key: 'vi', label: 'Tiếng Việt' },
  { key: 'en', label: 'English' },
  { key: 'ko', label: '한국어' },
]
export default function Login({ fetchPermissions, processRolesMenu }) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const location = useLocation()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [status, setStatus] = useState(false)
  const [currentView, setCurrentView] = useState('login')
  const [username, setUsername] = useState(null)

  const onFinish = async (values) => {
    const { login, password } = values
    setEmployeeId(login)

    try {
      setLoading(true)
      setError(null)

      const response = await LoginAuth({ login, password })

      if (response.success) {
        console.log('response', response)
        localStorage.setItem('userInfo', JSON.stringify(response.data.user))
        localStorage.setItem('roles_menu', response.data.tokenRolesUserMenu)
        Cookies.set('a_a', response.data.token)
        processRolesMenu()
        navigate('/u/home')
      } else {
        switch (response.error.code) {
          case 'ACCOUNT_NOT_ACTIVATED':
            console.log('ACCOUNT_NOT_ACTIVATED')
            setStatus(true)
            break
          case 'USER_NOT_FOUND':
          case 'INVALID_CREDENTIALS':
            setError(response.error.message)
            break
          case 'ACCOUNT_LOCKED':
            setError(response.error.message)
            break
          default:
            setError('An unexpected error occurred. Please try again later.')
        }
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError('Please fill in all required fields!')
      return
    }

    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match!')
      return
    }

    if (newPassword === oldPassword) {
      setError(
        'New password cannot be the same as the old password. Please choose a different one!',
      )
      return
    }

    try {
      const response = await ChangePassword(
        employeeId,
        oldPassword,
        newPassword,
      )
      console.log('response', response)
      if (response.success) {
        message.success(response.message || 'Password changed successfully!')

        setStatus(false)
        setNewPassword('')
        setConfirmNewPassword('')
        setOldPassword('')
        setCurrentView('login')
        form.resetFields()
        setError(null)
      } else {
        setError(response.message)
      }
    } catch (error) {
      setError(
        'An error occurred while changing the password. Please try again later.',
      )
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    const user = queryParams.get('user')
    const decoded = decodeJWT(token)
    if (token && decoded) {
      localStorage.setItem('token', token)
      localStorage.setItem('userInfo', JSON.stringify(decoded))
      window.location.href = '/u/home'
    }
  }, [location])

  return (
    <>
      <Helmet>
        <title>{t('auth.login')}</title>
      </Helmet>
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <div className="hidden  lg:flex lg:w-1/2 h-screen items-center justify-center">
          <BgCarousel />
        </div>

        <div className="w-full  lg:w-1/2 flex flex-col items-center justify-center p-5 pt-36">
          <div className="flex flex-col items-center top-20 absolute">
            <img src={Logo} alt="Company Logo" className="w-60 h-auto mb-4" />
          </div>

          {currentView === 'login' && !status ? (
            <>
              <div className="mx-auto w-full text-center mb-5 mt-3">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Welcome Back!
                </h1>
                <p className="mt-4 text-gray-500 text-xs">
                  ITM Semiconductor CO., Ltd, a company that gives trust to
                  customers and happiness to employees, values shared growth to
                  shareholders.
                </p>
              </div>

              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 "
              >
                <Form.Item
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your Employee ID!',
                    },
                  ]}
                >
                  <Input
                    className="w-full p-3 text-sm hover:bg-transparent hover:border-gray-300 focus:!shadow-none"
                    size="large"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Employee ID"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '')
                      setEmployeeId(inputValue)
                      e.target.value = inputValue
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please enter your Password!' },
                  ]}
                >
                  <Input.Password
                    className="w-full p-3 text-sm hover:bg-transparent hover:border-gray-300 focus:!shadow-none"
                    size="large"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '')
                      setOldPassword(inputValue)
                      e.target.value = inputValue
                    }}
                  />
                </Form.Item>
                {error && (
                  <div className="flex items-center justify-center mb-5 gap-2 self-end rounded bg-red-100 p-1 text-red-600">
                    <span className="text-xs font-medium">{error}</span>
                  </div>
                )}
                <Form.Item>
                  <button
                    type="submit"
                    className="w-full rounded-lg h-full bg-gray-700 text-white mt-4 p-3 text-base hover:bg-gray-700 first-line:relative hover:text-white"
                    size="large"
                  >
                    Log in
                  </button>
                </Form.Item>
                {/*  <div className="flex justify-end">
                  <button
                    type="button"
                    className=" text-xs text-blue-600 "
                    onClick={() => setCurrentView('resetPassword')} 
                  >
                   Rest Password
                  </button>
                </div> */}
              </Form>
            </>
          ) : status ? (
            <>
              <div className="mx-auto max-w-lg text-center mb-5 mt-3">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Change Password
                </h1>
                <p className="mt-4 text-gray-500 text-xs">
                  Please enter your new password and confirm it.
                </p>
              </div>
              <Form
                form={form}
                layout="vertical"
                className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 "
              >
                <Form.Item
                  label="Old Password"
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your old password!',
                    },
                  ]}
                >
                  <Input.Password
                    value={oldPassword}
                    size="large"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '') // Remove spaces
                      setOldPassword(inputValue)
                      e.target.value = inputValue // Update input value
                    }}
                    placeholder="Old Password"
                  />
                </Form.Item>

                <Form.Item
                  label="New Password"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your new password!',
                    },
                  ]}
                >
                  <Input.Password
                    value={newPassword}
                    size="large"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '')
                      setNewPassword(inputValue)
                      e.target.value = inputValue
                    }}
                    placeholder="New Password"
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm New Password"
                  name="confirmNewPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                  ]}
                >
                  <Input.Password
                    value={confirmNewPassword}
                    size="large"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '')
                      setConfirmNewPassword(inputValue)
                      e.target.value = inputValue
                    }}
                    placeholder="Confirm Password"
                  />
                </Form.Item>

                {error && (
                  <div className="flex items-center justify-center mb-5 gap-2 self-end rounded bg-red-100 p-1 text-red-600">
                    <span className="text-xs font-medium">{error}</span>
                  </div>
                )}

                <Form.Item>
                  <button
                    type="button"
                    className="w-full rounded-lg h-full bg-gray-700 text-white mt-4 p-3 text-base hover:bg-gray-700 first-line:relative hover:text-white"
                    size="large"
                    onClick={handleChangePassword}
                  >
                    Change Password
                  </button>
                </Form.Item>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" text-xs text-blue-600 "
                    onClick={() => {
                      setStatus(false)
                      setOldPassword('')
                      setNewPassword('')
                      setConfirmNewPassword('')
                      setError(null)
                      form.resetFields()
                    }}
                  >
                    Back to Login
                  </button>
                </div>
              </Form>
            </>
          ) : currentView === 'resetPassword' ? (
            <>
              <div className="mx-auto max-w-lg text-center mb-5 mt-3">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Reset Password
                </h1>
                <p className="mt-4 text-gray-500 text-xs">
                  Please enter your 6-digit ID number and your account username
                  to reset your password.
                </p>
              </div>
              <Form
                layout="vertical"
                className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3"
              >
                <Form.Item
                  label="Login"
                  name="username"
                  rules={[
                    { required: true, message: 'Please enter your username!' },
                  ]}
                >
                  <Input
                    className="w-full p-3 text-sm hover:bg-transparent hover:border-gray-300 focus:!shadow-none"
                    size="large"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Account Username"
                    onKeyDown={(e) => {
                      if (e.key === ' ') {
                        e.preventDefault()
                      }
                    }}
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/\s+/g, '') // Xóa dấu cách
                      setUsername(inputValue)
                      e.target.value = inputValue
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="ID Number"
                  rules={[
                    { required: true, message: 'Please enter your ID Number!' },
                    {
                      len: 6,
                      message: 'The ID number must be exactly 6 digits!',
                    },
                  ]}
                >
                  <Input
                    type="text"
                    size="large"
                    maxLength={6}
                    placeholder="Enter the last 6 digits of ID Number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onInput={(e) => {
                      const inputValue = e.target.value.replace(/[^0-9]/g, '')
                      setEmployeeId(inputValue)
                      e.target.value = inputValue
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key !== 'Backspace' &&
                        e.key !== 'Delete' &&
                        isNaN(e.key)
                      ) {
                        e.preventDefault()
                      }
                    }}
                  />
                </Form.Item>
                {error && (
                  <div className="flex items-center justify-center mb-5 gap-2 self-end rounded bg-red-100 p-1 text-red-600">
                    <span className="text-xs font-medium">{error}</span>
                  </div>
                )}
                <Form.Item>
                  <button
                    type="button"
                    className="w-full rounded-lg h-full bg-gray-700 text-white mt-4 p-3 text-base hover:bg-gray-800"
                    size="large"
                  >
                    Submit
                  </button>
                </Form.Item>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" text-xs text-blue-600 "
                    onClick={() => {
                      setCurrentView('login')
                      setError(null)
                    }}
                  >
                    Back to Login
                  </button>
                </div>
              </Form>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
