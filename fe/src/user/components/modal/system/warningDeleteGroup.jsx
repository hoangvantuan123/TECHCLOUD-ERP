import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Modal, Button, message } from 'antd'
import { DeleteGroups } from '../../../../features/system/deleteGroups'
export default function WarningDeleteGroup({
  modalOpen,
  setModalOpen,
  selectedGroup,
  setSelectedGroup,
  setOpenView,
  fetchDataGroups,
}) {
  const handleDelete = useCallback(async () => {
    const response = await DeleteGroups([selectedGroup])
    if (response.success) {
      message.success('Delete successful!')
      setOpenView(false)
      setModalOpen(false)
      fetchDataGroups()
    } else {
      message.error('Save failed!')
    }
  }, [selectedGroup])

  return (
    <Modal
      centered
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
      closable={false}
    >
      <div className="items-center justify-center flex flex-col">
        <p className="text-lg font-bold">Xác nhận xóa nhóm phân quyền</p>
        <p className="mt-4 text-gray-600 text-center">
          Bạn có chắc chắn muốn xóa <b>Group phân quyền</b> này không?
          <br />
          Việc xóa sẽ dẫn đến <b>toàn bộ các quyền liên quan</b> bị xóa và không
          thể khôi phục. Hãy kiểm tra kỹ trước khi thực hiện.
        </p>
        <div className="flex justify-end w-full mt-6">
          <Button onClick={() => setModalOpen(false)} className="mr-2">
            Hủy bỏ
          </Button>
          <Button type="primary" danger onClick={handleDelete}>
            Xóa
          </Button>
        </div>
      </div>
    </Modal>
  )
}
