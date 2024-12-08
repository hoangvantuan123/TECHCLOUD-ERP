import pako from 'pako'

const saveDataChunks = useCallback(
  async (data) => {
    try {
      const db = await openDatabase()
      const transaction = db.transaction(STORE_NAME, 'readwrite')
      const store = transaction.objectStore(STORE_NAME)
      store.clear()

      for (let i = 0; i < data.length; i += CHUNK_SIZE) {
        const chunk = data.slice(i, i + CHUNK_SIZE)

        const compressedData = pako.gzip(JSON.stringify(chunk))

        store.put({ id: Math.floor(i / CHUNK_SIZE), data: compressedData })
      }

      transaction.oncomplete = () =>
        console.log('Data chunks saved to IndexedDB')
    } catch (err) {
      console.error('Error saving data to IndexedDB', err)
    }
  },
  [openDatabase],
)
