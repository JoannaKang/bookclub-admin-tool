import { Request, Response } from 'express'
import Review from '../model/reviews'
import MeetingMemberMapping from '../model/meetingMemberMapping'

export async function getReviewByUser(req: Request, res: Response) {
  const reviews = await Review.findAll({
    where: {
      memberId: req.params.id,
    },
  })
  res.status(200).json(reviews)
}

export async function createReview(req: Request, res: Response) {
  const { memberId, meetingId, title, author, rate, review, genre } = req.body
  // create new review
  const newReview = await Review.create({
    memberId,
    meetingId,
    title,
    author,
    rate,
    review,
    genre,
  })
  // save meetingID /memeberID in mapping table
  const meetingAndMemberId = await MeetingMemberMapping.create({
    memberId,
    meetingId,
  })
  res.status(200).json({ newReview, meetingAndMemberId })
}
