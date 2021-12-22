import express from 'express'
import * as meetingsController from '../controller/meetings'

const router = express.Router()

router.get('/', meetingsController.getMeetingsInfo)
router.get('/:id', meetingsController.getMeetingsInfoByUser)
router.post('/meeting', meetingsController.createMeeting)

export default router
