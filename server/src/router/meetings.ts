import express from 'express'
import * as meetingsController from '../controller/meetings'

const router = express.Router()

router.get('/', meetingsController.getMeetingsInfo)
router.get('/:userId', meetingsController.getMeetingsInfoByUser)
router.post('/', meetingsController.createMeeting)

export default router
