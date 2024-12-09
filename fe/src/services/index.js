const currentHost = window.location.hostname
const currentPort = window.location.port

export let HOST_API_SERVER_1
export let HOST_API_SERVER_2

const baseUrl = `${currentHost}${currentPort ? ':' + currentPort : ''}`

if (baseUrl === '192.168.60.50:3030') {
  HOST_API_SERVER_1 = 'http://192.168.60.50:8086/api/v1'
  HOST_API_SERVER_2 = 'http://192.168.60.50:8083/api/v2'
} else if (baseUrl === '192.168.68.26:3000') {
  HOST_API_SERVER_1 = ''
} else {
  HOST_API_SERVER_1 = 'http://localhost:8086/api/v1'
  HOST_API_SERVER_2 = 'http://localhost:8083/api/v2'
}