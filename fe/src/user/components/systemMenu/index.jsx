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
} from 'antd'
import { PutMenuID } from '../../../features/menu/putMenuID'
import { GetAllMenu } from '../../../features/menu/getAllMenu'
const { Title } = Typography
const { Option } = Select

export default function MenuDrawer({
  fetchTableData,
  selectedDetails,
  isModalVisible,
  handleCancel,
  canEdit,
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

  const fetchData = async () => {
    setLoading(true)
    const response = await GetAllMenu()
    if (response.success) {
      setMenuOptions(response.data.data)
      setTotal(response.data.total)
      setTotalPages(response.data.totalPages)
      setError(null)
    } else {
      setError(response.message)
    }
    setLoading(false)
  }
  useEffect(() => {
    if (selectedDetails) {
      form.setFieldsValue({
        name: selectedDetails.name || '',
        sequence: selectedDetails.sequence || '',
        parent_id: selectedDetails.parent_id || null,
        key: selectedDetails.key_name || '',
        parent_path: selectedDetails.parent_path || '',
      })
      fetchData()
    }
  }, [selectedDetails?.id, selectedDetails])

  const handleFinish = async (values) => {
    const { name, sequence, parent_id, key, parent_path } = values
    const data = {
      name,
      sequence,
      ...(parent_id !== undefined ? { parent_id } : {}),
      key,
      parent_path,
    }

    try {
      const result = await PutMenuID(selectedDetails?.id, data)

      if (result.success) {
        message.success(t('Cập nhật giá trị thành công'))
        fetchTableData()
        form.resetFields()
        handleCancel()
      } else {
        message.error(result.message || 'Lỗi khi cập nhật!')
      }
    } catch (error) {
      message.error(error.message || t('Lỗi khi cập nhật!'))
    }
  }

  return (
    <Drawer
      title={<Title level={4}>{selectedDetails?.name}</Title>}
      open={isModalVisible}
      onClose={handleCancel}
      width={600}
      closable={false}
      extra={[
        <Button key="cancel" onClick={handleCancel}>
          {t('Thoát')}
        </Button>,
        canEdit && (
          <Button
            key="submit"
            type="primary"
            className="ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
            onClick={() => form.submit()}
          >
            {t('Lưu')}
          </Button>
        ),
      ].filter(Boolean)}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ textAlign: 'left' }}
        className="w-full"
      >
        <Form.Item
          label={t('Menu')}
          name="name"
          rules={[
            { required: true, message: t('Vui lòng nhập tên menu hiển thị') },
          ]}
          style={{ textAlign: 'left' }}
        >
          <Input
            size="large"
            placeholder={t('Nhập menu hiển thị')}
            disabled={!canEdit}
          />
        </Form.Item>
        <div className="flex items-center gap-2 w-full">
          <Form.Item
            label={t('Thứ tự')}
            name="sequence"
            style={{ textAlign: 'left' }}
          >
            <InputNumber
              type="number"
              className="w-full"
              size="large"
              placeholder={t('Nhập thứ tự hiển thị')}
              disabled={!canEdit}
            />
          </Form.Item>
          <Form.Item
            label={t('Key')}
            name="key"
            style={{ textAlign: 'left' }}
            className="w-full"
            rules={[{ required: true, message: t('Vui lòng nhập Key') }]}
          >
            <Input
              size="large"
              placeholder={t('Nhập Key hiển thị')}
              disabled={!canEdit}
            />
          </Form.Item>
        </div>
        <Form.Item
          label={t('Parent path')}
          name="parent_path"
          style={{ textAlign: 'left' }}
          className="w-full"
          rules={[{ required: true, message: t('Vui lòng nhập Parent Path ') }]}
        >
          <Input size="large" placeholder={t('Nhập Parent Path')} />
        </Form.Item>
        <Form.Item
          label="Menu cha"
          name="parent_id"
          style={{ textAlign: 'left' }}
          className="w-full"
        >
          <Select
            showSearch
            placeholder="Chọn menu"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children?.toLowerCase().includes(input.toLowerCase())
            }
            disabled={!canEdit}
            size="large"
          >
            {menuOptions.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Drawer>
  )
}
