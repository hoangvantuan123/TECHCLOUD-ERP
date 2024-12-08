import { useState } from 'react'
import {
  Input,
  Button,
  Table,
  Typography,
  message,
  Space,
  Row,
  Col,
  Modal,
} from 'antd'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const { Text } = Typography

const loginHistoryData = [
  { key: '1', deviceName: 'Device 1', loginTime: '2024-11-29 08:30:00' },
  { key: '2', deviceName: 'Device 2', loginTime: '2024-11-28 15:45:00' },
  { key: '3', deviceName: 'Device 3', loginTime: '2024-11-27 20:00:00' },
]

export default function SecurityProfileID() {
  const { t } = useTranslation()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loginHistory, setLoginHistory] = useState(loginHistoryData)
  const [visibleResetModal, setVisibleResetModal] = useState(false)

  const handleResetAccount = () => setVisibleResetModal(true)
  const confirmReset = () => {
    setVisibleResetModal(false)
    message.info(t('Account reset to default'))
    setCurrentPassword('')
    setNewPassword('')
    setLoginHistory([])
  }

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword) {
      message.error(t('Please fill in both fields'))
      return
    }
    message.success(t('Password changed successfully'))
    setCurrentPassword('')
    setNewPassword('')
  }

  const loginHistoryColumns = [
    { title: t('Device Name'), dataIndex: 'deviceName', key: 'deviceName' },
    { title: t('Login Time'), dataIndex: 'loginTime', key: 'loginTime' },
  ]

  return (
    <>
      <Helmet>
        <title>{t('Security Profile')}</title>
      </Helmet>

      <Row gutter={[16, 16]} className="mb-6">
        <Col span={12}>
          <Text level={5}>{t('Change Password')}</Text>
          <br />
          <Text className="text-xs italic opacity-70">
            {t(
              'Enter your current password and the new password to change your account password.',
            )}
          </Text>
        </Col>
        <Col span={12}>
          <Space direction="vertical" className="w-full">
            <Input.Password
              placeholder={t('Current Password')}
              value={currentPassword}
              size="large"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <Input.Password
              placeholder={t('New Password')}
              value={newPassword}
              size="large"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button type="primary" onClick={handlePasswordChange} block>
              {t('Change Password')}
            </Button>
          </Space>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-10">
        <Col span={12}>
          <Text level={5}>{t('Login History')}</Text>
          <br />
          <Text className="text-xs italic opacity-70">
            {t(
              'View the list of devices and times when your account was accessed.',
            )}
          </Text>
        </Col>
        <Col span={12}>
          <Table
            columns={loginHistoryColumns}
            dataSource={loginHistory}
            pagination={false}
            rowKey="key"
            size="small"
            bordered
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-10">
        <Col span={12}>
          <Text level={5}>{t('Reset Account to Default')}</Text>
          <br />
          <Text className="text-xs italic opacity-70">
            {t(
              'Reset your account to its default settings, clearing all custom configurations and history.',
            )}
          </Text>
        </Col>
        <Col span={12}>
          <Button type="default" danger onClick={handleResetAccount} block>
            {t('Reset Account to Default')}
          </Button>
        </Col>
      </Row>

      <Modal
        title={t('Confirm Reset')}
        visible={visibleResetModal}
        onOk={confirmReset}
        onCancel={() => setVisibleResetModal(false)}
        okText={t('Yes')}
        cancelText={t('No')}
      >
        <p>{t('Are you sure you want to reset your account to default?')}</p>
      </Modal>
    </>
  )
}
