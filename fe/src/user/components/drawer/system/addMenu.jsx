import { useState, useEffect, useCallback, useMemo } from 'react'
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
import { PostMenu } from '../../../../features/system/postMenu'
import { GetAllRootMenus } from '../../../../features/system/getRootMenu'
import { debounce } from 'lodash'
export default function DrawerAddMenu({
  isOpen,
  onClose,
  fetchDataMenus,
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
  const [rootMenus, setRootMenus] = useState([])

  const fetchDataRootMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllRootMenus()
      setRootMenus(response.data.data || [])
    } catch (error) {
      setRootMenus([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataMenus = useMemo(
    () => debounce(fetchDataRootMenus, 100),
    [fetchDataRootMenus],
  )

  useEffect(() => {
    debouncedFetchDataMenus()
    return () => {
      debouncedFetchDataMenus.cancel()
    }
  }, [debouncedFetchDataMenus])

  const handleFinish = async (values) => {
    const { Label, Type, Key, Link, MenuRootId, MenuSubRootId } = values
    try {
      const result = await PostMenu(
        Label,
        Type,
        Key,
        Link,
        MenuRootId,
        MenuSubRootId,
      )

      if (result.success) {
        message.success(t('Tạo menu thành công'))
        fetchDataMenus()
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
      title={<Title level={5}>{t('Thêm Menu')}</Title>}
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
              label={t('Tên menu')}
              name="Label"
              rules={[
                {
                  required: true,
                  message: t('Vui lòng nhập tên menu hiển thị'),
                },
              ]}
            >
              <Input size="large" placeholder={t('Nhập tên menu hiển thị')} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label={t('Type')}
              name="Type"
              rules={[
                { required: true, message: t('Vui lòng chọn kiểu menu') },
              ]}
            >
              <Select size="large" placeholder={t('Type')}>
                <Option value="submenu">{t('Submenu')}</Option>
                <Option value="menu">{t('Menu')}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
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
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label={t('Menu Root ID')} name="MenuRootId">
              <Select
                showSearch
                placeholder="Nhập Menu Root"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.children?.toLowerCase().includes(input.toLowerCase())
                }
                size="large"
              >
                {rootMenus.map((item) => (
                  <Option key={item.Id} value={item.Id} className=" uppercase">
                    {item.Label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label={t('Menu Sub Root ID')} name="MenuSubRootId">
              <Select
                showSearch
                placeholder="Nhập Menu Sub Root"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.children?.toLowerCase().includes(input.toLowerCase())
                }
                size="large"
              >
                {menus.map((item) => (
                  <Option key={item.Id} value={item.Id}>
                    {item.Type} -{' '}
                    <span className="uppercase">{item.Label}</span>
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}
