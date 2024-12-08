import { Modal } from 'antd'
import { CheckCircleTwoTone, LoadingOutlined } from '@ant-design/icons'
export default function LoadSubmit({ modal4Open, setModal4Open }) {
  return (
    <Modal centered open={modal4Open} closable={false} footer={false}>
      <div className="items-center justify-center flex flex-col">
        <LoadingOutlined twoToneColor="#52c41a" className=" text-4xl mb-2" />
        <p className="mt-10 text-lg">Đang thực thi</p>
      </div>
    </Modal>
  )
}
