const BASE_URL = 'http://localhost:8080'

export const getMemberInfoByUserId = async (userId: string) => {
  try {
    const user = await fetch(BASE_URL + `/members/${userId}`)
    return await user.json()
  } catch (error) {
    console.log(error)
  }
}