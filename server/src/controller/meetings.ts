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
  console.log('req', req.body)
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
    console.log(req.body)
    const { location, locationReview, introduction, adminId, date } = req.body
    const newMeeting = await Meeting.create({
      location,
      locationReview,
      introduction,
      adminId,
      date,
    })
    res.status(200).json({ newMeeting, alert: 'Successfully saved a meeting!' })
  } catch (error) {
    res.status(401).json({ error: 'create failed!' })
  }
}
