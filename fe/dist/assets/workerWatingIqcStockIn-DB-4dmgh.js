;(function () {
  'use strict'
  function u(s, c, i) {
    if (!s || !Array.isArray(c))
      return {
        success: !1,
        message: 'Dữ liệu không hợp lệ hoặc barcode bị thiếu',
      }
    const t = s.split('/'),
      r = t[0],
      n = t[1],
      a = parseInt(t[2], 10),
      l = t[3],
      m = t[4],
      e = c.find((o) => o.ItemNo === r)
    return i.find((o) => o.Barcode === s)
      ? { success: !1, message: 'Barcode đã được quét trước đó' }
      : e
        ? e.RemainQty < a
          ? {
              success: !1,
              message: `Số lượng quét (${a}) vượt quá số lượng còn lại (${e.RemainQty}) của ItemNo: ${e.ItemNo}.`,
            }
          : {
              success: !0,
              message: `Barcode "${s}" khớp với ItemNo: ${e.ItemNo}, Số lượng quét: ${a}.`,
              data: {
                itemNo: e.ItemNo,
                qty: a,
                lot: n,
                dc: l,
                reel: m,
                barcode: s,
                permitSerl: e.PermitSerl,
                permitSeq: e.PermitSeq,
              },
            }
        : { success: !1, message: `Không tìm thấy ItemNo: ${r} trong dữ liệu` }
  }
  self.onmessage = function (s) {
    const { type: c, barcode: i, tableData: t, tableScanHistory: r } = s.data
    let n
    switch (c) {
      case 'CHECK_BARCODE':
        n = u(i, t, r)
        break
      default:
        n = { success: !1, message: `Loại xử lý "${c}" không được hỗ trợ.` }
    }
    self.postMessage(n)
  }
})()
