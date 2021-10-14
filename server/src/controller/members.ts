import { Member } from '../model/members'

const Members = Member

export async function getMembersInfo (req:any, res:any) {
  // console.log(req.body)
  console.log('members')
}

export async function createMemberInfo (req:any, res:any) {
  // console.log(req.body)
  console.log('req', req.body)
  console.log('res', res)
}