import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DatePicker from '@mui/lab/DatePicker'

import { LoginContext } from '../../App'

import { createMeetingInfo } from '../../ApiService/Meetings'

export const Admin = () => {
  const navigate = useNavigate()

  const initialMeetingState = {
    date: new Date(),
    location: '',
    introduction: '',
    locationReview: '',
  }

  const [meetingInfo, setMeetingInfo] = React.useState(initialMeetingState)

  const handleChange = e => {
    setMeetingInfo(meetingInfo => ({
      ...meetingInfo,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <LoginContext.Consumer>
      {loginInfo => (
        <Grid
          container
          spacing={1}
          padding={3}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item xs={10}>
            <Box sx={{ padding: 2 }}>
              <Paper
                variant="outlined"
                sx={{
                  padding: 3,
                  marginTop: 3,
                }}
              >
                <Stack spacing={3}>
                  <h1>Create new meeting schedule</h1>
                  <h2>📅 Meeting Date</h2>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      views={['day']}
                      value={meetingInfo.date}
                      onChange={e =>
                        handleChange({
                          target: {
                            name: 'date',
                            value: e,
                          },
                        })
                      }
                      renderInput={params => (
                        <TextField {...params} helperText={null} />
                      )}
                    />
                  </LocalizationProvider>
                  <h2>💬 Introduction topic</h2>
                  <TextField
                    id="introduction"
                    name="introduction"
                    placeholder="Type today's introduction topic"
                    rows={2}
                    multiline
                    onChange={e => handleChange(e)}
                  />
                  <h2>📍 Location name</h2>
                  <TextField
                    id="location"
                    name="location"
                    placeholder="Type today's meeting location"
                    rows={1}
                    multiline
                    onChange={e => handleChange(e)}
                  />
                  <h2>📝 Location review</h2>
                  <TextField
                    id="locationReview"
                    name="locationReview"
                    placeholder="Leave the location review"
                    rows={2}
                    multiline
                    onChange={e => handleChange(e)}
                  />
                  <Button
                    sx={{ minWidth: '50%', alignSelf: 'center' }}
                    variant="contained"
                    onClick={() =>
                      createMeetingInfo({
                        ...meetingInfo,
                        adminId: loginInfo.id as number,
                      }).then(res => {
                        if (!res.error) {
                          navigate('/meeting')
                        }
                      })
                    }
                  >
                    Submit
                  </Button>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      )}
    </LoginContext.Consumer>
  )
}
