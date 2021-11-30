import { Member } from '../Interfaces/Member'

const BASE_URL = 'http://localhost:8080'


export const getMemberInfoByUserId = async (userId: string) => {
  try {
    const user = await fetch(BASE_URL + `/members/${userId}`)
    return await user.json()
  } catch (error) {
    console.log(error)
  }
}

export const createMemberInfo = async (memberInfo:Member) => {
  console.log(memberInfo)
  try {
    fetch(BASE_URL + '/members/createMember', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memberInfo)
    })
  } catch (error) {
    console.log(error)
  }
}