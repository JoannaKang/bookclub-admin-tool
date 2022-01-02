import * as React from 'react'

import { useEffect, useContext } from 'react'
import { getMeetingsInfoByUser } from '../../ApiService/Meetings'
import { getReviewByUser } from '../../ApiService/Reviews'
import { LoginContext } from '../../App'

export const Meeting = () => {
  const loginInfo = useContext(LoginContext)

  const initialMeetingState = {
    id: '',
    location: '',
    introduction: '',
    locationReview: '',
    adminId: undefined,
    createdAt: '',
    updatedAt: '',
    date: '',
  }

  const initialReviewState = {
    author: '',
    createdAt: '',
    genre: '',
    id: undefined,
    meetingId: undefined,
    memberId: undefined,
    rate: undefined,
    review: '',
    title: '',
    updatedAt: '',
  }

  const [meetingHistory, setMeetingHistory] = React.useState([
    initialMeetingState,
  ])
  const [reviewHistory, setReviewHistroy] = React.useState([initialReviewState])

  const fetchData = async () => {
    if (loginInfo.id) {
      const reviews = await getReviewByUser(loginInfo.id)
      const meetings = await getMeetingsInfoByUser(loginInfo.id)
      setReviewHistroy(reviews)
      setMeetingHistory(meetings)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1>Previous meeting history</h1>
      <h2>users can see the reviews of the previous meetings </h2>
      <ol>
        <li>User name: {loginInfo.name}</li>
        <li>the number of the attended meeting: {meetingHistory.length}</li>
        <li>
          meeting date
          {meetingHistory.map((meetings, index) => (
            <ul key={index}>{meetings?.date.toString().slice(0, 10)}</ul>
          ))}
        </li>
        <li>meeting location</li>
        {meetingHistory.map((meetings, index) => (
          <ul key={index}>{meetings?.location}</ul>
        ))}
        <li>my review list</li>
        {reviewHistory.map((reviews, index) => (
          <ul key={index}>
            {reviews.title} {reviews.rate}
          </ul>
        ))}
      </ol>
    </>
  )
}
