import { Request, Response } from 'express';

import { Review } from '../model/reviews'


const Reviews = Review

export async function getReviewByUser (req:Request, res:Response) {
  try {
    const reviews = await Review.findAll({
      where: {
        memberId: req.params.id
      }
    })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json(error)
  }
}

export async function createReview (req:Request, res:Response) {
  try {
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
    res.status(200).json(newReview)
  } catch (error) {
    res.status(500).json(error)
  }
}