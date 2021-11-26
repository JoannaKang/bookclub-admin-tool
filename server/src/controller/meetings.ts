import { Request, Response } from 'express';
import { Meeting } from '../model/meetings'

const Members = Meeting

export async function getMeetingsInfo (req:Request, res:Response) {
  console.log('meetings')
}

export async function createMeeting (req:Request, res:Response) {
  console.log(req.body)
  try {
    const { location, introduction, admin_id } = req.body
    const newMeeting = await Meeting.create({
      location: location, 
      introduction: introduction,
      admin_id: admin_id
    })
    res.status(200).json(newMeeting)
  } catch (error) {
    res.status(500).json(error)
  }
}