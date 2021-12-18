import { Review } from '../Interfaces/Review'

const BASE_URL = 'http://localhost:8080'

export const createReview = (review: Review) => {
  try {
    fetch(BASE_URL + '/reviews/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
  } catch (error) {
    console.log(error)
  }
}
