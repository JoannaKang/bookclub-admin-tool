import express from 'express'
import { body } from 'express-validator'
import * as membersController from '../controller/members'

const router = express.Router()

router.get('/', membersController.getMembersInfo)
router.get('/:memberId', membersController.getMemberInfoByUserId)
router.post(
  '/',
  body('userId').not().isEmpty().trim().escape(),
  body('name').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('isAdmin').toBoolean(),
  membersController.createMember,
)

export default router
