import express from 'express'
import * as membersController from '../controller/members'

const router = express.Router()

router.get('/', membersController.getMembersInfo)
router.get('/:userId', membersController.getMemberInfoByUserId)
router.post('/createMember', membersController.createMember)

export default router