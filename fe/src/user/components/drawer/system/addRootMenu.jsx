import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Input,
  Modal,
  Typography,
  Form,
  Select,
  Button,
  Card,
  Divider,
  Space,
  Switch,
  Checkbox,
  Drawer,
  Radio,
  message,
  InputNumber,
  Alert,
  Spin,
  Row,
  Col,
} from 'antd'

const { Title } = Typography
const { Option } = Select
import { PostRootMenu } from '../../../../features/system/postRootMenu'

export default function DrawerAddRootMenu({
  isOpen,
  onClose,
  fetchDataRootMenus,
  menus,
}) {
  const { t } = useTranslation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'

  const [form] = Form.useForm()
  const [menuOptions, setMenuOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)

  const handleFinish = async (values) => {
    const { Label, Key, Icon, Link } = values
    try {
      const result = await PostRootMenu(Label, Key, Icon, Link)

      if (result.success) {
        message.success(t('Tạo menu thành công'))
        fetchDataRootMenus()
        form.resetFields()
        onClose()
      } else {
        message.error(result.message || t('Lỗi khi tạo menu'))
      }
    } catch (error) {
      message.error(t('Lỗi khi tạo menu'))
    }
  }

  return (
    <Drawer
      title={<Title level={5}>{t('Thêm Root Menu')}</Title>}
      open={isOpen}
      closable={false}
      width={600}
      extra={[
        <Button key="cancel" onClick={onClose}>
          {t('Hủy')}
        </Button>,
        <Button
          key="submit"
          type="primary"
          className=" ml-2 border-gray-200  bg-indigo-600 text-white  shadow-sm text-sm"
          onClick={() => form.submit()}
        >
          {t('Lưu')}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ textAlign: 'left' }}
        className="w-full"
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label={t('Tên Root Menu')}
              name="Label"
              rules={[
                {
                  required: true,
                  message: t('Vui lòng nhập tên  root menu hiển thị'),
                },
              ]}
            >
              <Input
                size="large"
                placeholder={t('Nhập tên root menu hiển thị')}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label={t('Key')}
              name="Key"
              rules={[{ required: true, message: t('Vui lòng nhập Key') }]}
            >
              <Input size="large" placeholder={t('Nhập key hiển thị')} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label={t('Link')} name="Link">
              <Input size="large" placeholder={t('Nhập link')} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label={t('Icon')} name="Icon">
              <Input size="large" placeholder={t('Nhập Icon HTML')} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}
