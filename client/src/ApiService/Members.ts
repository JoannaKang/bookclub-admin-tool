import { Member } from '../Interfaces/Member'

const BASE_URL = 'http://localhost:8080'

export const getMemberInfoByUserId = async (
  userId: string | undefined,
): Promise<Member> => {
  const response = await fetch(BASE_URL + `/members/${userId}`)
  const user = await response.json()
  return user.length > 0 ? user[0] : undefined
}

export const createMemberInfo = (memberInfo: Member) => {
  fetch(BASE_URL + '/members/createMember', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memberInfo),
  })
}
