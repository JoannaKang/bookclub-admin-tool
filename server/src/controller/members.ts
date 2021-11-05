import { where } from 'sequelize/types'
import { Member } from '../model/members'

const Members = Member

export async function getMembersInfo (req:any, res:any) {
  console.log(req.body)
  console.log('members')
}

export async function createMemberInfo (req:any, res:any) {
  const { username } = req.body
  console.log('before create')
  const result = await Members.create({ username: username })
  console.log('after create')
  res.status(200).json(result)
}