import * as React from 'react'
import { useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

import { getMeetingDates } from '../../../ApiService/Meetings'
import { createReview } from '../../../ApiService/Reviews'
import { useNavigate } from 'react-router-dom'

import * as Styled from './styled'

export const CreateReviewForm: React.FC<any> = ({
  loginInfo,
  setViewmode,
}): JSX.Element => {
  const navigate = useNavigate()

  const CATEGORY = [
    'Arts',
    'Biographies',
    'Business',
    'Technology',
    'Fantasy',
    'Fiction & Literature',
    'Essay',
    'Mind & Health',
    'Politics',
    'Science Fiction',
    'Travel',
    'Self-Help',
  ]

  const initialReviewState = {
    title: '',
    author: '',
    genre: '',
    review: '',
    rate: 0,
    meetingId: 0,
  }
  const initialMeetingOptionState = { meetingId: '', date: '' }

  const [review, setReview] = React.useState(initialReviewState)
  const [meetingOption, setMeetingOption] = React.useState([
    initialMeetingOptionState,
  ])

  useEffect(() => {
    getMeetingDates().then(dates => {
      setMeetingOption(dates)
    })
  }, [])

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setReview(review => ({
      ...review,
      [e.target.name]: e.target.value as string,
    }))
  }

  return (
    <Grid
      container
      spacing={1}
      padding={3}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid item xs={10}>
        <Paper
          variant="outlined"
          sx={{
            padding: 3,
            marginTop: 3,
          }}
        >
          <Stack spacing={3}>
            <h1>Today’s Review</h1>
            <FormControl fullWidth>
              <InputLabel id="meeting-select-label">Meeting date</InputLabel>
              <Select
                labelId="meeting-select-label"
                id="meeting-select"
                label="meetingId"
                name="meetingId"
                defaultValue=""
                onChange={e =>
                  handleChanges(e as React.ChangeEvent<HTMLInputElement>)
                }
              >
                {meetingOption?.map((item, index) => (
                  <MenuItem key={index} value={item.meetingId}>
                    {item.date}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Title"
              name="title"
              variant="standard"
              margin="normal"
              onChange={e =>
                handleChanges(e as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <TextField
              fullWidth
              label="Author"
              name="author"
              variant="standard"
              margin="normal"
              onChange={e =>
                handleChanges(e as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <FormControl fullWidth>
              <InputLabel id="genre-select-label">Genre</InputLabel>
              <Select
                labelId="genre-select-label"
                id="genre-select"
                label="Genre"
                name="genre"
                defaultValue=""
                onChange={e =>
                  handleChanges(e as React.ChangeEvent<HTMLInputElement>)
                }
              >
                {CATEGORY.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Review"
              name="review"
              multiline
              rows={6}
              placeholder="Write your review"
              fullWidth
              onChange={e =>
                handleChanges(e as React.ChangeEvent<HTMLInputElement>)
              }
            />
            <Box sx={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <h3>Rate</h3>
              <Rating
                name="rate"
                onChange={e =>
                  handleChanges(e as React.ChangeEvent<HTMLInputElement>)
                }
              />
            </Box>
            <Button
              variant="contained"
              onClick={() => {
                createReview({
                  memberId: loginInfo.id,
                  ...review,
                }).then(res => {
                  if (res) {
                    setViewmode('')
                  }
                })
              }}
            >
              {' '}
              Submit
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}
