import { IReview } from '../Interfaces/Review'
import { HttpRequest } from './HttpRequest'

export const createReview = async (review: IReview): Promise<any> => {
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

// Reviews made by member should be excluded
export const getReviewsByMeetingId = async (
  meetingId: number,
  memberId: number,
) => {
  const response = await fetch(
    HttpRequest.BASE_URL + `/reviews/info/${meetingId}/${memberId}`,
  ).then(res => res.json())
  return response
}
