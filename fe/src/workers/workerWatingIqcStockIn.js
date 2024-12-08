function checkBarcode(barcode, tableData, tableScanHistory) {
  if (!barcode || !Array.isArray(tableData)) {
    return {
      success: false,
      message: 'Dữ liệu không hợp lệ hoặc barcode bị thiếu',
    }
  }

  const parts = barcode.split('/')

  const code = parts[0]
  const lot = parts[1] // Lot
  const qty = parseInt(parts[2], 10) // Số lượng quét
  const dc = parts[3] // Date Code
  const reel = parts[4] // Reel

  const item = tableData.find((item) => item.ItemNo === code)
  const existingBarcode = tableScanHistory.find(
    (item) => item.Barcode === barcode,
  )

  if (existingBarcode) {
    return {
      success: false,
      message: 'Barcode đã được quét trước đó',
    }
  }

  if (!item) {
    return {
      success: false,
      message: `Không tìm thấy ItemNo: ${code} trong dữ liệu`,
    }
  }

  if (item.RemainQty < qty) {
    return {
      success: false,
      message: `Số lượng quét (${qty}) vượt quá số lượng còn lại (${item.RemainQty}) của ItemNo: ${item.ItemNo}.`,
    }
  }

  return {
    success: true,
    message: `Barcode "${barcode}" khớp với ItemNo: ${item.ItemNo}, Số lượng quét: ${qty}.`,
    data: {
      itemNo: item.ItemNo,
      qty,
      lot,
      dc,
      reel,
      barcode,
      permitSerl: item.PermitSerl,
      permitSeq: item.PermitSeq,
    },
  }
}

self.onmessage = function (event) {
  const { type, barcode, tableData, tableScanHistory } = event.data
  let result

  switch (type) {
    case 'CHECK_BARCODE':
      result = checkBarcode(barcode, tableData, tableScanHistory)
      break
    default:
      result = {
        success: false,
        message: `Loại xử lý "${type}" không được hỗ trợ.`,
      }
  }

  self.postMessage(result)
}
