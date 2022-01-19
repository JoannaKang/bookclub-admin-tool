import { Meeting } from '../Interfaces/Meeting'
import { HttpRequest } from './HttpRequest'

export const getMeetingDates = async () => {
  const response = await fetch(HttpRequest.BASE_URL + `/meetings`).then(res =>
    res.json(),
  )
  const meetingDates = response.map((meeting: Meeting) => {
    return { meetingId: meeting.id, date: meeting.date.toString().slice(0, 10) }
  })

  return meetingDates
}

export const createMeetingInfo = (meetingInfo: Meeting) => {
  return HttpRequest.post('/meetings', meetingInfo)
}

export const getMeetingsInfoByUser = async (userId: number) => {
  const response = await fetch(
    `${HttpRequest.BASE_URL}/meetings?user_id=${userId}`,
  ).then(res => res.json())
  return response
}
