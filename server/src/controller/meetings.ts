import { Request, Response } from 'express'
import Meeting from '../model/meetings'
import MeetingMemberMapping from '../model/meetingMemberMapping'
import SQ from 'sequelize'

export async function getMeetingsInfo(req: Request, res: Response) {
  try {
    const meetings = await Meeting.findAll()
    res.status(200).json(meetings)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function getMeetingsInfoByUser(req: Request, res: Response) {
  try {
    const { userId } = req.body
    const meetingIds = await MeetingMemberMapping.findAll({
      attributes: ['meetingId'],
      where: userId,
    })
    const meetingIdOnly = (meetingIds as any[]).map(r => r.meetingId)

    const Op = SQ.Op
    const meetingInfo = await Meeting.findAll({
      where: { id: { [Op.or]: meetingIdOnly } },
    })

    res.status(200).json(meetingInfo)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function createMeeting(req: Request, res: Response) {
  try {
    const { location, locationReview, introduction, adminId } = req.body
    const newMeeting = await Meeting.create({
      location,
      locationReview,
      introduction,
      adminId,
    })
    res.status(200).json(newMeeting)
  } catch (error) {
    res.status(500).json(error)
  }
}
