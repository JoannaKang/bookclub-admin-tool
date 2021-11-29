import * as React from 'react';
import { Wrapper } from './Style/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { createReview } from '../../ApiService/Reviews'

export const Review = ({loginInfo}) => {

  const CATEGORY = ['Arts', 'Biographies', 'Business', 'Technology', 'Fantasy', 'Fiction & Literature', 'Essay', 'Mind & Health', 'Politics', 'Science Fiction', 'Travel', 'Self-Help']
  
  const initialState = {
    title: '',
    author: '',
    genre: '',
    review: '',
    rate: 0
  }

  const [review, setReview] = React.useState(initialState)

  function handleChanges(e) {
    setReview((review) => ({
      ...review,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Wrapper className="Review">
      <h1>Today’s Review</h1>
      <TextField label="Title" name="title" variant="standard" onChange={e => handleChanges(e)}/>
      <TextField label="Author" name="author" variant="standard" onChange={e => handleChanges(e)}/>
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
        <InputLabel id="genre-select-label">Genre</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre-select"
            label="Genre"
            name="genre"
            defaultValue=""
            onChange={e => handleChanges(e)}
          >
          {CATEGORY.map((item, index) => 
            <MenuItem key={index} value={item}>{item}</MenuItem>
          )}
          </Select>
        </FormControl>
      </Box>
      <TextField
          label="Review"
          name="review"
          multiline
          rows={6}
          placeholder="Write your review"
          style={{width: 200}}
          onChange={e => handleChanges(e)}
        />
      <Typography component="legend">Rate</Typography>
      <Rating
        name="rate"
        onChange={e => handleChanges(e)}
      />
      <Button variant="contained" onClick={()=>createReview(review)}> Submit</Button>
    </Wrapper>
  )
}