import { Review } from '../Interfaces/Review'
import { HttpRequest } from './HttpRequest'

export const createReview = async (review: Review): Promise<any> => {
  return await HttpRequest.post('/reviews/review', review)
    .then(res => res)
    .catch(err => {
      alert(err)
    })
}

export const getReviewByUser = async (id: number) => {
  const response = await fetch(HttpRequest.BASE_URL + `/reviews/${id}`).then(
    res => res.json(),
  )
  return response
}
