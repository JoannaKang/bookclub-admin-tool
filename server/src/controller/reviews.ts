import { Request, Response } from 'express'
import Review from '../model/reviews'
import Meeting from '../model/meetings'
import MeetingMemberMapping from '../model/meetingMemberMapping'
import SQ from 'sequelize'

export async function getReviewByUser(req: Request, res: Response) {
  const reviews = await Review.findAll({
    where: {
      memberId: req.params.id,
    },
  })
  res.status(200).json(reviews)
}

export async function getReviewByMeetingId(req: Request, res: Response) {
  console.log('😂')
  const meetingId = req.params
  const membersId = await MeetingMemberMapping.findAll({
    attributes: ['memberId'],
    where: meetingId,
  })
  const memberIdIdOnly = (membersId as any[]).map(r => r.memberId)
  const Op = SQ.Op
  const reviewInfo = await Meeting.findAll({
    where: { id: { [Op.or]: memberIdIdOnly } },
  })
  res.status(200).json(reviewInfo)
}

export async function createReview(req: Request, res: Response) {
  const { memberId, meetingId, title, author, rate, review, genre } = req.body

  let newReview
  let meetingAndMemberId

  // save meetingID /memeberID in mapping table
  try {
    meetingAndMemberId = await MeetingMemberMapping.create({
      memberId,
      meetingId,
    })
  } catch (error) {
    console.log('Failed to add MeetingMemberMapping')
    res
      .status(400)
      .send({ alert: 'Can not save review twice in the same meeting' })
    return
  }

  // create new review
  try {
    newReview = await Review.create({
      memberId,
      meetingId,
      title,
      author,
      rate,
      review,
      genre,
    })
  } catch (error) {
    res.status(400).send({ alert: 'Failed to create new review' })
    return
  }

  res.status(201).json({
    newReview,
    meetingAndMemberId,
    alert: 'Successfully saved a review!',
  })
}
