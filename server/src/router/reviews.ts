import express from 'express'
import * as reviewsController from '../controller/reviews'

const router = express.Router()

router.get('/:id', reviewsController.getReviewByUser)
router.post('/review', reviewsController.createReview)
router.get(
  '/info/:meetingId/:memberId',
  reviewsController.getReviewsByMeetingId,
)
export default router
