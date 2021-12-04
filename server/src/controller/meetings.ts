import { Request, Response } from 'express';
import { Meeting } from '../model/meetings'

export async function getMeetingsInfo (req:Request, res:Response) {
  try {
    const meetings = await Meeting.findAll()
    res.status(200).json(meetings)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function createMeeting (req:Request, res:Response) {
  try {
    const { location, locationReview, introduction, adminId } = req.body
    const newMeeting = await Meeting.create({
      location: location, 
      locationReview: locationReview,
      introduction: introduction,
      adminId: adminId
    })
    res.status(200).json(newMeeting)
  } catch (error) {
    res.status(500).json(error)
  }
}