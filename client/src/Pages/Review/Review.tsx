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

export const Review = () => {
  const [value, setValue] = React.useState(2);
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [genre, setGenre] = React.useState('')

  return (
    <Wrapper className="Review">
      <h1>Today’s Review</h1>
      <TextField id="standard-basic" label="Title" variant="standard" onChange={e => setTitle(e.target.value)}/>
      <TextField id="standard-basic" label="Author" variant="standard" onChange={e => setTitle(e.target.value)}/>
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Genre"
          onChange={()=>console.log('here')}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={6}
          defaultValue="Write your review"
          style={{width: 200}}
        />
        <Box sx={{
        '& > legend': { mt: 2 },
      }}>
        <Typography component="legend">Rate</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(4);
          }}
        />
      </Box>
      <Button variant="contained" onClick={()=>console.log(title)}> Submit</Button>
    </Wrapper>
  )
}