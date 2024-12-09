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

export default function StockOutRequestQuery({
  formData,
  setFormData,
  setToDate,
  toDate,
  dataUnit,
  setBizUnit,
  handleSearch1,
  handleSearch2,
  handleSearch3,
  minorName,
  setFactUnit,
  setProgStatus,
  minorName2,
  setUseType,
  deptName,
  empName,
  custName,
  prodPlanNo,
  setProdPlanNo,
  setWorkOrderNo,
  workOrderNo,
  prodReqNo,
  setProdReqNo,
  outReqNo,
  setOutReqNo,
  setDeptName,
  setDeptSeq,
  resetTable,
  setEmpName,
  setEmpSeq,
  resetTable2,
  setCustSeq,
  setCustName,
  resetTable3
}) {
  const handleFormDate = (date) => {
    setFormData(date)
  }
  const handletoDate = (date) => {
    setToDate(date)
  }
  const handleChange = (value) => {
    setFactUnit(value)
  }
  const handleChangeMinorName = (value) => {
    setProgStatus(value)
  }
  const handleChangeMinorName2 = (value) => {
    setUseType(value)
  }
  const handleOnChangeDeptName = (e) => {
    setDeptName(e.target.value)
    setDeptSeq('')
    resetTable()
  }
  const handleOnChangeEmpName = (e) => {
    setEmpName(e.target.value)
    setEmpSeq('')
    resetTable2()
  }
  const handleOnChangeCustName = (e) => {
    setCustName(e.target.value)
    setCustSeq('')
    resetTable3()
  }


  return (
    <div className="flex items-center gap-2">
      <Form
        layout="vertical"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}
      >
        <Row className="gap-4 flex items-center ">
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Ngày yêu cầu 1</span>
              }
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={formData}
                onChange={handleFormDate}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Ngày yêu cầu 2</span>
              }
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
              label={
                <span className="uppercase text-[10px]">Nơi sản xuất</span>
              }
              className="mb-0"
            >
              <Select
                defaultValue=""
                size="large"
                style={{
                  width: 190,
                }}
                allowClear
                onChange={handleChange}
                options={[
                  { label: "All", value: "" },
                  ...(dataUnit?.map((item) => ({
                    label: item?.AccUnitName,
                    value: item?.FactUnit,
                  })) || []),
                ]}
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
                className=" text-sm p-2 bg-blue-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch1()
                  }
                }}
                value={deptName}
                onChange={handleOnChangeDeptName}
                onDoubleClick={handleSearch1}
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
                className=" text-sm p-2 bg-blue-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch2()
                  }
                }}

                value={empName}
                onChange={handleOnChangeEmpName}
                onDoubleClick={handleSearch2}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Khách hàng</span>}
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 bg-blue-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch3()
                  }
                }}
                value={custName}
                onChange={handleOnChangeCustName}
                onDoubleClick={handleSearch3}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Số yêu cầu</span>}
              className="mb-0"
            >
              <Input
                value={outReqNo}
                onChange={(e) => setOutReqNo(e.target.value)}
                size="small"
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Số kế hoạch</span>}
              className="mb-0"
            >
              <Input
                value={prodPlanNo}
                onChange={(e) => setProdPlanNo(e.target.value)}
                size="small"
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Số lệnh sản xuất</span>
              }
              className="mb-0"
            >
              <Input
                value={workOrderNo}
                onChange={(e) => setWorkOrderNo(e.target.value)}
                size="small"
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">
                  Số yêu cầu sản xuất
                </span>
              }
              className="mb-0"
            >
              <Input
                value={prodReqNo}
                onChange={(e) => setProdReqNo(e.target.value)}
                size="small"
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Phân loại kho</span>
              }
              className="mb-0"
            >
              <Select
                id="typeSelect"
                defaultValue="All"
                size="large"
                style={{
                  width: 240,
                }}
                allowClear
                onChange={handleChangeMinorName2}
                options={[
                  { label: "All", value: "" },
                  ...(minorName2?.map((item) => ({
                    label: item?.MinorName,
                    value: item?.Value,
                  })) || []),
                ]}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Trạng thái</span>}
              className="mb-0"
            >
              <Select
                id="typeSelect"
                defaultValue="All"
                size="large"
                style={{
                  width: 240,
                }}
                allowClear
                onChange={handleChangeMinorName}
                options={[
                  { label: "All", value: "" },
                  ...(minorName?.map((item) => ({
                    label: item?.MinorName,
                    value: item?.Value,
                  })) || []),
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
