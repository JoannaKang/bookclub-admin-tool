import {createMemberInfo} from '../controller/members'

describe('Members', function() {
  it('should create new member information', async () => {
    const mock = {
      userId: 'jfrences',
      name: 'sooyeon', 
      isAdmin: true
    }
    const res = await createMemberInfo(mock, res)
    expect(res.statusCode).toBe(200)
  })
})