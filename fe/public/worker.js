// worker.js
self.onmessage = function (e) {
  const { data } = e

  const processedData = data.map((row) => {
    return row.map((cell) => {
      return cell.trim()
    })
  })

  postMessage(processedData)
}
