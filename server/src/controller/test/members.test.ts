import { createMemberInfo } from '../members'
// const createMemberInfo} = require('../members')

it('should create new username', async () => {
  const mock = {body: {username: 'sooyeon kang'}}
  const createdUser = await createMemberInfo(mock)
  expect(createdUser).toBe('sooyeon kang')
})