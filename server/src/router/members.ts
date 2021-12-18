import express from 'express'
import * as membersController from '../controller/members'

const router = express.Router()

router.get('/', membersController.getMembersInfo)
router.get('/:memberId', membersController.getMemberInfoByUserId)
router.post('/member', membersController.createMember)

export default router
