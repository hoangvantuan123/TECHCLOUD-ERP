import {
  Button,
  Space,
  Table,
  Typography,
  Modal,
  Form,
  Input,
  message,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changePassword } from '../../../../features/auth/API/changePasswordAPI'

const { Title } = Typography

const columns = [
  {
    title: 'Thiết bị',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Đã thêm vào',
    key: 'permissions',
    render: (_, record) => <a>{record.permissions}</a>,
  },
  {
    title: 'Hành động',
    key: 'actions',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'Chrome trên MacOS',
    permissions: '03/08/2024 13:25:03',
  },
  {
    key: '2',
    name: 'Firefox trên Windows',
    permissions: '12/07/2024 09:15:45',
  },
  {
    key: '3',
    name: 'Safari trên iOS',
    permissions: '22/06/2024 16:30:20',
  },
  {
    key: '4',
    name: 'Edge trên Linux',
    permissions: '01/09/2024 10:05:33',
  },
  {
    key: '5',
    name: 'Opera trên Android',
    permissions: '15/08/2024 11:40:10',
  },
]

const KeyMenu03 = () => {
  const { t } = useTranslation()
  const [oldPassword, setOldPassword] = useState('admin@cloud')
  const [newPassword, setNewPassword] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const handleChangePassword = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      const { new_password, confirm_password, old_password } = values

      if (new_password !== confirm_password) {
        message.error(t('personal_settings_key_menu_03.passwords_do_not_match'))
        return
      }

      const token = localStorage.getItem('token_1h')
      if (!token) {
        message.error(t('personal_settings_key_menu_03.token_missing'))
        return
      }

      const response = await changePassword(old_password, new_password, token)

      if (response.success) {
        message.success(response.message)
        form.resetFields()
        setIsModalVisible(false)
      } else {
        message.error(response.message)
      }
    } catch (error) {
      console.error('Validate Failed:', error)
      message.error(t('personal_settings_key_menu_03.error_occurred'))
    }
  }

  return (
    <div>
      <div className="mb-4">
        <Title level={4}>
          {t('personal_settings_key_menu_03.password_management')}
        </Title>
        <Button
          className="rounded-lg border-gray-200 bg-indigo-600 text-white p-4 shadow-sm text-sm"
          onClick={handleChangePassword}
          size="large"
        >
          {t('personal_settings_key_menu_03.change_password')}
        </Button>
      </div>

      <Title level={4}>{t('personal_settings_key_menu_03.device_list')}</Title>
      <Table columns={columns} dataSource={data} />
      <div className="mt-4">
        <Title level={4}>
          {t('personal_settings_key_menu_03.other_devices')}
        </Title>
        <Button
          size="large"
          className="rounded-lg border-gray-200 bg-indigo-600 text-white p-4 shadow-sm text-sm"
        >
          {t('personal_settings_key_menu_03.sign_out_of_all_devices')}
        </Button>
      </div>

      <Modal
        title={t('personal_settings_key_menu_03.change_password')}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            style={{ backgroundColor: '#f5f5f5', borderColor: '#d9d9d9' }}
          >
            {t('personal_settings_key_menu_03.cancel')}
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
          >
            {t('personal_settings_key_menu_03.save')}
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" name="change_password">
          <Form.Item
            label={t('personal_settings_key_menu_03.label_old_pass')}
            name="old_password"
            rules={[
              {
                required: true,
                message: t(
                  'personal_settings_key_menu_03.please_input_old_password',
                ),
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t('personal_settings_key_menu_03.label_old_pass')}
            />
          </Form.Item>
          <Form.Item
            label={t('personal_settings_key_menu_03.label_new_pass')}
            name="new_password"
            rules={[
              {
                required: true,
                message: t(
                  'personal_settings_key_menu_03.please_input_new_password',
                ),
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t('personal_settings_key_menu_03.label_new_pass')}
            />
          </Form.Item>

          <Form.Item
            label={t('personal_settings_key_menu_03.label_succ_pass')}
            name="confirm_password"
            dependencies={['new_password']}
            rules={[
              {
                required: true,
                message: t(
                  'personal_settings_key_menu_03.please_confirm_new_password',
                ),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      t('personal_settings_key_menu_03.passwords_do_not_match'),
                    ),
                  )
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t('personal_settings_key_menu_03.label_succ_pass')}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default KeyMenu03
