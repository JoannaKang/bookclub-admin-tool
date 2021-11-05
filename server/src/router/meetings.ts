import express from 'express'
import * as meetingsController from '../controller/meetings'

const router = express.Router()

router.get('/meetings', meetingsController.getMeetingsInfo)

export default router