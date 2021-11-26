import express from 'express'
import * as meetingsController from '../controller/meetings'

const router = express.Router()

router.get('/', meetingsController.getMeetingsInfo)
router.post('/createMeeting', meetingsController.createMeeting)

export default router