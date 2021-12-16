import { Request, Response } from 'express'
import { Review } from '../model/reviews'

export async function getReviewByUser (req:Request, res:Response) {
  const reviews = await Review.findAll({
    where: {
      memberId: req.params.id
    }
  })
  res.status(200).json(reviews)
}

export async function createReview (req:Request, res:Response) {
  const { memberId, meetingId, title, author, rate, review, genre } = req.body
  const newReview = await Review.create({
    memberId: memberId,
    meetingId: meetingId,
    title: title,
    author: author,
    rate: rate,
    review: review,
    genre: genre
  })
  // TODO: mapping table에 meetingID /memeberID 저장하기
  res.status(200).json(newReview)
}