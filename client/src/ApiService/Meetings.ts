import { Meeting } from '../Interfaces/Meeting'
import { HttpRequest } from './HttpRequest'

export const getMeetingDates = async () => {
  const response = await fetch(HttpRequest.BASE_URL + `/meetings`).then(res => res.json())
  const meetingDates = response.map((meeting: Meeting) => {
    return { meetingId: meeting.id, date: meeting.createdAt.slice(0, 10) }
  })

  return meetingDates
}
