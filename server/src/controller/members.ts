import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import Member from '../model/members'

const Members = Member

export async function getMembersInfo(req: Request, res: Response) {
  try {
    const members = await Members.findAll()
    res.status(200).json(members)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function getMemberInfoByUserId(req: Request, res: Response) {
  try {
    const member = await Members.findAll({
      where: {
        userId: req.params.memberId,
      },
    })
    res.status(200).json(member)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function createMember(req: Request, res: Response) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { userId, email, name, isAdmin } = req.body
  const member = await Members.findAll({
    where: {
      userId,
    },
  })

  if (member.length > 0) {
    return res.status(200).json(member[0])
  } else {
    const newMember = await Members.create({
      userId,
      email,
      name,
      isAdmin,
    })
    return res.status(200).json(newMember)
  }
}
