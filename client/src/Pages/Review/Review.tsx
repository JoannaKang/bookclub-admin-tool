import * as React from 'react'
import { useState, useEffect, useContext } from 'react'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

import { CreateReviewForm } from './Component/CreateReview'
import {
  getReviewByUser,
  getReviewsByMeetingId,
} from '../../ApiService/Reviews'
import { LoginContext } from '../../App'
import { IReview } from '../../Interfaces/Review'

import { fontSize } from '../../GlobalStyle'

export const Review: React.FC<any> = (): JSX.Element => {
  const [viewmode, setViewmode] = React.useState('REVIEW')
  const [reviews, setReviews] = React.useState<IReview[]>([])
  const [meetingId, setMeetingId] = React.useState<number>(7)
  const [selectedReview, setSelectedReview] = React.useState<any>({})
  const loginInfo = useContext(LoginContext)

  useEffect(() => {
    getReviewByUser(loginInfo.id as number).then(info => {
      setReviews(info)
    })
  }, [])
  useEffect(() => {
    const selected = reviews.find(review => review.meetingId === meetingId)
    setSelectedReview(selected)
    console.log('meetingId', meetingId)
    getReviewsByMeetingId(meetingId, loginInfo?.id as number).then(res =>
      console.log(res),
    )
  }, [meetingId])

  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <>
          {console.log(loginInfo)}
          {viewmode === 'REVIEW' && (
            <Grid
              container
              spacing={1}
              padding={3}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Grid item xs={10}>
                <Stack spacing={3}>
                  <Typography variant="h5">Review history from</Typography>
                  <FormControl fullWidth size={'medium'}>
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue=""
                      onChange={e => {
                        console.log(parseInt(e.target.value))
                        setMeetingId(parseInt(e.target.value))
                      }}
                    >
                      {reviews?.map((review: IReview, index: number) => (
                        <MenuItem key={index} value={review?.meeting?.id}>
                          {review?.meeting?.date?.toString().slice(0, 10)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {selectedReview && (
                    <Paper
                      variant="outlined"
                      sx={{
                        padding: 3,
                        marginTop: 3,
                        fontSize: fontSize.medium,
                      }}
                    >
                      <Typography variant="h5">📝 My review</Typography>
                      <Box
                        sx={{
                          padding: [0, 1],
                        }}
                      >
                        <ul>
                          <li>Title: {selectedReview?.title}</li>
                          <li>Author: {selectedReview?.author}</li>
                          <li>Genre: {selectedReview?.genre}</li>
                          <li>Review: {selectedReview?.review}</li>
                          <li>
                            Rate:{' '}
                            <Rating
                              name="rate"
                              size="medium"
                              value={selectedReview?.rate}
                              sx={{
                                margin: 0,
                              }}
                            />
                          </li>
                        </ul>
                      </Box>
                    </Paper>
                  )}
                  <Button
                    variant="contained"
                    onClick={() => setViewmode('EDIT')}
                  >
                    Create new review
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}
          {viewmode === 'EDIT' && (
            <CreateReviewForm loginInfo={loginInfo} setViewmode={setViewmode} />
          )}
        </>
      )}
    </LoginContext.Consumer>
  )
}
