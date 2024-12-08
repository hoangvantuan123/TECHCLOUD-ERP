import { Modal, Button } from 'antd'

export default function ModalLogout({
  modalOpen,
  setModalOpen,
  confirmLogout,
}) {
  return (
    <Modal
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      closable={false}
      footer={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">
          Đăng xuất khỏi tài khoản của bạn?
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Bạn có chắc chắn muốn đăng xuất? Bạn sẽ cần đăng nhập lại để tiếp tục
          sử dụng.
        </p>

        <div className="flex w-full gap-4">
          <Button type="default" size="large" className="w-full">
            Hủy
          </Button>
          <Button
            type="primary"
            danger
            onClick={confirmLogout}
            className="w-full"
            size="large"
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    </Modal>
  )
}
