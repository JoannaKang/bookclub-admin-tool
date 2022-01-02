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
      .status(500)
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
    res.status(500).send({ alert: 'Failed to create new review' })
    return
  }

  res.status(200).json({
    newReview,
    meetingAndMemberId,
    alert: 'Successfully saved a review!',
  })
}
