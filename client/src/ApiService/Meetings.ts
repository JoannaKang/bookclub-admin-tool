import { Meeting } from '../Interfaces/Meeting'

const BASE_URL = 'http://localhost:8080'


export const getMeetingDates = async () => {
  const response = await fetch(BASE_URL + `/meetings`).then(res=>res.json())
  const meetingDates = response.map((meeting:Meeting) => {
    return {meetingId: meeting.id, date: meeting.createdAt.slice(0,10)}
  })

  return meetingDates
}