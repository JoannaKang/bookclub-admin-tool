import sequelize from '../db/database'
import Member from './members'
import Meeting from './meetings'

const MeetingMemberMapping = sequelize.define('meeting_member_mapping', {})

Meeting.belongsToMany(Member, {
  through: MeetingMemberMapping,
})
Member.belongsToMany(Meeting, {
  through: MeetingMemberMapping,
})

export default MeetingMemberMapping
