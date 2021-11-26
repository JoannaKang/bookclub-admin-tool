import {createMemberInfo} from '../controller/members'

describe('Members', function() {
  it('should create new member information', async () => {
    const mock = {
      user_id: 'jfrences',
      name: 'sooyeon', 
      is_admin: true
    }
    const res = await createMemberInfo(mock, res)
    expect(res.statusCode).toBe(200)
  })
})