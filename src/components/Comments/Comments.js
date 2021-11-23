import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField, helperText, FormControl, Grid, Card, CardHeader, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';

function Comments(props) {
  
  const [comments, setComments] = useState('')
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  const getComments = event => {
    console.log ('in Comments', event.target.value);
    setComments( event.target.value );
  }

  const addComments = event =>{
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comments
    })
  }

  return (
  <div>
      <Grid container
  alignItems="center"
  justify="center"
  style={{ width: '100%', height: 'auto'}}>
    <Grid item xs={7}>
<Card>
<CardContent>
<Typography>
      <h1>Do you have any comments?</h1>
      </Typography>
      </CardContent>
      <FormControl>

      <TextField value={comments} onChange={getComments}></TextField>
      </FormControl>
      <Button onClick={addComments}>
            <Link to="/review">NEXT</Link></Button>
            </Card>
            </Grid>
            </Grid>
      </div>
  )
}

export default Comments;