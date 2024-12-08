import { HOST_API_SERVER_2 } from '../../services'

export const LoginAuth = async ({ login, password }) => {
  try {
    const response = await fetch(`${HOST_API_SERVER_2}/acc/p2/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
      credentials: 'same-origin',
    })

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
