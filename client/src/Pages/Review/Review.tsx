import * as React from 'react'
import { useEffect, useContext } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { CreateReviewForm } from './Component/CreateReview'

import {
  getReviewByUser,
  getReviewsByMeetingId,
} from '../../ApiService/Reviews'
import { IReview } from '../../Interfaces/Review'
import { LoginContext } from '../../App'
import { fontSize } from '../../GlobalStyle'

export const Review: React.FC<any> = (): JSX.Element => {
  const loginInfo = useContext(LoginContext)

  const [viewmode, setViewmode] = React.useState('REVIEW')
  const [userReviews, setUserReviews] = React.useState<IReview[]>([])
  const [memberReviews, setMemberReviews] = React.useState<IReview[]>([])
  const [meetingId, setMeetingId] = React.useState<number | null>(null)
  const [selectedReview, setSelectedReview] = React.useState<any>(null)
  const [expanded, setExpanded] = React.useState<boolean | string>(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {
    getReviewByUser(loginInfo.id as number).then(info => {
      setUserReviews(info)
      console.log(info[0]?.meeting?.id)
      setMeetingId(info[0]?.meeting?.id)
    })
  }, [])
  useEffect(() => {
    if (meetingId) {
      const selected = userReviews.find(
        review => review.meetingId === meetingId,
      )
      setSelectedReview(selected)
      getReviewsByMeetingId(meetingId, loginInfo?.id as number).then(res =>
        setMemberReviews(res),
      )
    }
  }, [meetingId])

  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <>
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
                  {userReviews.length > 0 && (
                    <FormControl fullWidth size={'medium'}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={userReviews[0]?.meeting?.id}
                        onChange={e => {
                          setMeetingId(e.target.value as number)
                        }}
                      >
                        {userReviews?.map((review: IReview, index: number) => (
                          <MenuItem key={index} value={review?.meeting?.id}>
                            {review?.meeting?.date?.toString().slice(0, 10)}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
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
                  {
                    <>
                      <Paper
                        variant="outlined"
                        sx={{
                          padding: 3,
                          marginTop: 3,
                          fontSize: fontSize.medium,
                        }}
                      >
                        <Typography variant="h5">
                          📚 Member&apos;s Reviews
                        </Typography>
                        <Box
                          sx={{
                            padding: [0, 1],
                          }}
                        >
                          {memberReviews.map((review, index) => (
                            <Accordion
                              expanded={expanded === `$panel${index}`}
                              onChange={handleChange(`$panel${index}`)}
                              key={index}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                              >
                                <Typography
                                  sx={{ width: '33%', flexShrink: 0 }}
                                >
                                  {review?.member?.name}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                  {review.title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <ul>
                                  <li>Title: {review?.title}</li>
                                  <li>Author: {review?.author}</li>
                                  <li>Genre: {review?.genre}</li>
                                  <li>Review: {review?.review}</li>
                                  <li>
                                    Rate:{' '}
                                    <Rating
                                      name="rate"
                                      size="medium"
                                      value={review?.rate}
                                      sx={{
                                        margin: 0,
                                      }}
                                    />
                                  </li>
                                </ul>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                        </Box>
                      </Paper>
                    </>
                  }
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
