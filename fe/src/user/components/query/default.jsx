import { Button, Form, Input, Row, Col } from 'antd'

export default function WaitingIqcStockInQuery() {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            label="Field A"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Field A"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Field A"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
