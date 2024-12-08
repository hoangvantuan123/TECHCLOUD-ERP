import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, Typography, Form, Select, Button, Drawer, message } from 'antd'
import { PostResGroups } from '../../../../features/system/postGroups'
const { Title } = Typography
const { Option } = Select
const { TextArea } = Input
export default function DrawerAddUserGroups({
  isOpen,
  onClose,
  fetchDataGroups,
}) {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const handleFinish = async (values) => {
    const { name, comment } = values
    try {
      const result = await PostResGroups(name, comment)

      if (result.success) {
        message.success(t('Tạo nhóm thành công'))
        fetchDataGroups()
        form.resetFields()
        onClose()
      } else {
        message.error(result.message || t('Lỗi khi tạo nhóm'))
      }
    } catch (error) {
      message.error(t('Lỗi khi tạo nhóm'))
    }
  }

  return (
    <Drawer
      title={<Title level={4}>{t('Thêm nhóm')}</Title>}
      open={isOpen}
      closable={false}
      width={900}
      extra={[
        <Button key="cancel" onClick={onClose}>
          {t('Cancel')}
        </Button>,
        <Button
          key="submit"
          type="primary"
          className=" ml-2 border-gray-200  bg-indigo-600 text-white  shadow-sm text-sm"
          onClick={() => form.submit()}
        >
          {t('Save')}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ textAlign: 'left' }}
      >
        <Form.Item
          label={t('Tên nhóm')}
          name="name"
          rules={[{ required: true, message: t('add_page.rules_group') }]}
          style={{ textAlign: 'left' }}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={t('Ghi chú')}
          name="comment"
          style={{ textAlign: 'left' }}
        >
          <TextArea rows={4} size="large" />
        </Form.Item>
      </Form>
    </Drawer>
  )
}
