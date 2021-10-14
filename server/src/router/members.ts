import express from 'express'
import * as membersController from '../controller/members'

const router = express.Router()

router.get('/', membersController.getMembersInfo)
router.post('/createMember', membersController.createMemberInfo)

export default router