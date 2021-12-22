import * as React from 'react'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'

import { getMeetingDates } from '../../ApiService/Meetings'
import { createReview } from '../../ApiService/Reviews'
import { useEffect } from 'react'

export const Review: React.FC<any> = ({ loginInfo }): JSX.Element => {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Today’s Review
        </Typography>
        <Box sx={{ minWidth: 200 }} padding={[0, 2, 0, 0]}>
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
        </Box>
        <TextField
          label="Title"
          name="title"
          variant="standard"
          margin="normal"
          onChange={e =>
            handleChanges(e as React.ChangeEvent<HTMLInputElement>)
          }
        />
        <TextField
          label="Author"
          name="author"
          variant="standard"
          margin="normal"
          onChange={e =>
            handleChanges(e as React.ChangeEvent<HTMLInputElement>)
          }
        />
        <Box sx={{ minWidth: 200 }} padding={[2, 0, 1, 0]}>
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
        </Box>
        <Box sx={{ minWidth: 200 }} padding={1}>
          <TextField
            label="Review"
            name="review"
            multiline
            rows={6}
            placeholder="Write your review"
            style={{ width: 200 }}
            onChange={e =>
              handleChanges(e as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </Box>
        <Box sx={{ minWidth: 200, alignItems: 'center' }} padding={1}>
          <Typography component="legend">Rate</Typography>
          <Rating
            name="rate"
            onChange={e =>
              handleChanges(e as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => createReview({ memberId: loginInfo.id, ...review })}
        >
          {' '}
          Submit
        </Button>
      </Box>
    </Container>
  )
}
