import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Segmented,
  Select,
} from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const dateFormat = 'YYYY/MM/DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'

export default function DeliveryListQuery({
  formData,
  setFormData,
  setDeliveryNo,
  setToDate,
  toDate,
  deliveryNo,
  bizUnit,
  setBizUnit,
  dataUnit,
}) {
  const handleFormDate = (date) => {
    setFormData(date)
  }
  const handletoDate = (date) => {
    setToDate(date)
  }
  const handleChange = (value) => {
    setBizUnit(value)
  }
  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row className="gap-4 flex items-center ">
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Date 1</span>}
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={formData}
                onChange={handleFormDate}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Date 2</span>}
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={toDate}
                onChange={handletoDate}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Delivery No</span>}
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={deliveryNo}
                size="small"
                onChange={(e) => setDeliveryNo(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Acc Unit</span>}
              className="mb-0"
            >
              <Select
                id="typeSelect"
                defaultValue="All"
                size="large"
                style={{
                  width: 190,
                }}
                onChange={handleChange}
                options={dataUnit?.map((item) => ({
                  label: item?.AccUnitName,
                  value: item?.BizUnit,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
