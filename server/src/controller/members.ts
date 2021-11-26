import { Request, Response } from 'express';

import { Member } from '../model/members'

const Members = Member

export async function getMembersInfo (req:Request, res:Response) {
  try {
    const members = await Members.findAll()
    res.status(200).json(members)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function createMemberInfo (req:Request, res:Response) {
  try {
    const { user_id, name, is_admin } = req.body
    const newUser = await Members.create({
      user_id: user_id,
      name: name,
      is_admin: is_admin
    })
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json(error)
  }
}