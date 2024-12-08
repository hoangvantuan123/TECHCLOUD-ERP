// indexedDBUtils.js
import { openDB } from 'idb'

async function createDatabase() {
  return openDB('SheetUsersDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('usersData')) {
        db.createObjectStore('usersData', {
          keyPath: 'id',
          autoIncrement: true,
        })
      }
    },
  })
}

export async function saveDataToDB(data) {
  const db = await createDatabase()
  const tx = db.transaction('usersData', 'readwrite')
  const store = tx.objectStore('usersData')
  await store.put({ id: 'sheetData', data })
  await tx.done
}

export async function loadDataFromDB() {
  const db = await createDatabase()
  const store = db.transaction('usersData').objectStore('usersData')
  const result = await store.get('sheetData')
  return result ? result.data : null
}

export async function clearDataFromDB() {
  const db = await createDatabase()
  const tx = db.transaction('usersData', 'readwrite')
  const store = tx.objectStore('usersData')
  await store.clear()
  await tx.done
}
