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

export default function StockOutRequestQueryFiFo() {
  return (
    <div className="flex items-center gap-2">
      <Form
        layout="vertical"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}


      > <Row className="gap-4 flex items-center">

          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Nơi sản xuất</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "

              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Số yêu cầu</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Ngày yêu cầu</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Người yêu cầu</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Bộ phận yêu cầu</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Trạng thái Y/N</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Ghi chú</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div >
  )
}
