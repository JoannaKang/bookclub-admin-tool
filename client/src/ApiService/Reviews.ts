import { Review } from '../Interfaces/Review'
import { HttpRequest } from './HttpRequest'

export const createReview = (review: Review) => {
  HttpRequest.post('/reviews/review', review)
}

export const getReviewByUser = async (id: number) => {
  const response = await fetch(HttpRequest.BASE_URL + `/reviews/${id}`).then(
    res => res.json(),
  )
  return response
}
