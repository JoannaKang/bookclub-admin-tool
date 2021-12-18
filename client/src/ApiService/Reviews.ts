import { Review } from '../Interfaces/Review'
import { HttpRequest } from './HttpRequest'

export const createReview = (review: Review) => {
  HttpRequest.post('/reviews/review', review)
}
