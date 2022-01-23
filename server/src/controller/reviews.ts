import { Request, Response } from 'express'
import Review from '../model/reviews'
import Meeting from '../model/meetings'
import Member from '../model/members'
import MeetingMemberMapping from '../model/meetingMemberMapping'
import { Op } from 'sequelize'

export async function getReviewByUser(req: Request, res: Response) {
  const reviews = await Review.findAll({
    where: {
      memberId: req.params.id,
    },
    include: [
      {
        model: Meeting,
        required: true,
      },
    ],
  })
  res.status(200).json(reviews)
}

export async function getReviewsByMeetingId(req: Request, res: Response) {
  const reviewInfo = await Review.findAll({
    where: {
      [Op.and]: [
        { meetingId: req.params.meetingId },
        { memberId: { [Op.not]: req.params.memberId } },
      ],
    },
    include: [
      {
        model: Member,
        required: true,
      },
    ],
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
