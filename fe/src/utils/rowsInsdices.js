export const getSelectedRowIndices = () => {
  const selectedRows = selection.rows.items
  let indices = []

  selectedRows.forEach((range) => {
    const start = range[0]
    const end = range[1] - 1

    for (let i = start; i <= end; i++) {
      indices.push(i)
    }
  })

  return indices
}
