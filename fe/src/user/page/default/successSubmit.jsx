import { Modal } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
export default function SuccessSubmit({
  modal5Open,
  setModal5Open,
  successMessage,
}) {
  return (
    <Modal
      centered
      open={modal5Open}
      onOk={() => setModal5Open(false)}
      onCancel={() => setModal5Open(false)}
      closable={false}
      footer={false}
    >
      <div className="items-center justify-center flex flex-col">
        <CheckCircleTwoTone twoToneColor="#52c41a" className=" text-4xl mb-2" />
        <p className="mt-10 text-lg">{successMessage}</p>
      </div>
    </Modal>
  )
}
