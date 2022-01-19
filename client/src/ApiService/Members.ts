import { Member } from '../Interfaces/Member'
import { HttpRequest } from '../ApiService/HttpRequest'

export const getMemberInfoByUserId = async (
  userId: string | undefined,
): Promise<Member> => {
  const response = await fetch(HttpRequest.BASE_URL + `/members/${userId}`)
  const user = await response.json()
  return user.length > 0 ? user[0] : undefined
}

export const createMemberInfo = async (memberInfo: Member): Promise<Member> => {
  const response = await HttpRequest.post('/members', memberInfo)
  if (response.errors) {
    console.error(Error)
    throw Error
  }
  return response
}
