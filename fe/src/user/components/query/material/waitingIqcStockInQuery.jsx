import { useState, useRef } from 'react'
import { Form, Input, Row, Col, Button, Typography, message } from 'antd'
import debounce from 'lodash.debounce'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
dayjs.locale('vi')
const { Title } = Typography
export default function WaitingIqcStockInQuery({
  filteredData,
  handleCheckBarcode,
  inputBarCode,
  setInputBarCode,
  YYWW,
  YYYYMM,
}) {
  const [date] = useState(dayjs())

  const formatDateWithWeekday = (date) => {
    const dayOfWeek = date.format('dddd')
    const capitalizedDay =
      dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
    return `${capitalizedDay}, ${date.format('DD/MM/YYYY')}`
  }
  const handleChange = debounce((e) => {
    setInputBarCode(e.target.value)
  }, 100)

  const handleEnter = () => {
    if (inputBarCode) {
      handleCheckBarcode(inputBarCode)
    }
  }
  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row className="gap-4 flex items-center">
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Date</span>}
              className="mb-0"
            >
              <Input
                value={formatDateWithWeekday(date)}
                size="small"
                className="text-sm p-2"
                readOnly
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">MAT Barcode</span>}
              tooltip="MAT Barcode"
              className="mb-0"
            >
              <Input
                value={inputBarCode}
                onChange={handleChange}
                onPressEnter={handleEnter}
                placeholder="Input Barcode"
                size="small"
                className="text-sm p-2  w-72"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Delivery No</span>}
              className="mb-0"
            >
              <Input
                value={filteredData?.DelvMngNo}
                size="small"
                className="text-sm p-2"
                readOnly
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Biz Unit</span>}
              className="mb-0"
            >
              <Input
                value={filteredData?.BizUnit}
                size="small"
                className="text-sm p-2"
                readOnly
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Purchase Type</span>
              }
              className="mb-0"
            >
              <Input
                value={filteredData?.PurchaseType}
                size="small"
                className="text-sm p-2"
                readOnly
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">YYWW</span>}
              className="mb-0"
            >
              <Title level={3} className="text-gray-800">
                {YYWW || 'YYWW'}
              </Title>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">YYYYMM</span>}
              className="mb-0"
            >
              <Title level={3} className="text-gray-800">
                {YYYYMM || 'YYYYMM'}
              </Title>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
