import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Input,
  Modal,
  Typography,
  Form,
  Button,
  Drawer,
  Row,
  Col,
  message,
  InputNumber,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Barcode from 'react-barcode'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { PostEpuw } from '../../../features/unpacking/postEtcPcbUnpackingWeb'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../../utils/constants'

const { Title } = Typography
dayjs.extend(utc)
dayjs.extend(timezone)
export default function AddEpuw() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [openView, setOpenView] = useState(false)
  const [barcodeValue, setBarcodeValue] = useState('')

  const openModalView = () => {
    setOpenView(true)
  }

  const onClose = () => {
    setOpenView(false)
    form.resetFields()
    setBarcodeValue('')
  }

  const handleFinish = async (values) => {
    const TRANS_TIME = dayjs().tz('Asia/Ho_Chi_Minh').format('YYYYMMDDHHmmss')
    const { PLANT, MATERIAL_LOT, PCB_BARCODE, USER_ID, LOT_NUMBER, XOUT_QTY } =
      values
    const data = {
      PLANT,
      MATERIAL_LOT,
      PCB_BARCODE,
      TRANS_TIME,
      USER_ID,
      LOT_NUMBER,
      XOUT_QTY,
    }
    try {
      const response = await PostEpuw(data)
      if (response.success) {
        message.success(SUCCESS_MESSAGES.RECORD_CREATED)
        setOpenView(false)
        form.resetFields()
        setBarcodeValue('')
      } else {
        message.error(ERROR_MESSAGES.INVALID_DATA)
      }
    } catch (error) {
      message.error(ERROR_MESSAGES.INVALID_DATA)
    }
  }

  const handleBarcodeChange = (e) => {
    const value = e.target.value
    setBarcodeValue(value)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={openModalView}
        icon={<PlusOutlined />}
        className=" rounded-lg  border-gray-200 bg-indigo-600 hover:bg-none text-white shadow-sm text-sm"
        size="large"
      >
        {t('Add')}
      </Button>
      <Drawer
        title={
          <Title level={4}>
            <span className="text-base"> {t('')}</span>
          </Title>
        }
        open={openView}
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
        <div className="flex items-center justify-center mb-5">
          <Barcode value={barcodeValue || 'default-barcode'} />
        </div>

        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Row gutter={16}>
            {/* PLANT */}
            <Col span={24}>
              <Form.Item
                label="PLANT"
                name="PLANT"
                rules={[{ required: true, message: 'PLANT is required' }]}
              >
                <Input placeholder="Enter PLANT" size="large" />
              </Form.Item>
            </Col>

            {/* MATERIAL LOT */}
            <Col span={24}>
              <Form.Item
                label="MATERIAL LOT"
                name="MATERIAL_LOT"
                rules={[
                  { required: true, message: 'MATERIAL LOT is required' },
                ]}
              >
                <Input placeholder="Enter MATERIAL LOT" size="large" />
              </Form.Item>
            </Col>

            {/* PCB BARCODE */}
            <Col span={24}>
              <Form.Item
                label="PCB BARCODE"
                name="PCB_BARCODE"
                rules={[{ required: true, message: 'PCB BARCODE is required' }]}
              >
                <Input
                  placeholder="Enter PCB BARCODE"
                  size="large"
                  onChange={handleBarcodeChange}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="USER ID"
                name="USER_ID"
                rules={[{ required: true, message: 'USER ID is required' }]}
              >
                <Input placeholder="Enter USER ID" size="large" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="LOT NUMBER"
                name="LOT_NUMBER"
                rules={[{ required: true, message: 'LOT NUMBER is required' }]}
              >
                <Input placeholder="Enter LOT NUMBER" size="large" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="XOUT QTY" name="XOUT_QTY">
                <InputNumber
                  placeholder="Enter XOUT QTY"
                  size="large"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
