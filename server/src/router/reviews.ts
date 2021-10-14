import express from 'express'
import * as membersController from '../controller/reviews'

const router = express.Router()

router.get('/', membersController.getReviewInfo)

export default router