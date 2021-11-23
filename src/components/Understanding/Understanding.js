import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, helperText, FormControl, Grid, Card, CardHeader, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';


function Understanding(props) {
  
  const [understanding, setUnderstanding] = useState()
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  console.log(feedbackReducer)
  const dispatch = useDispatch();

  const getUnderstanding = event => {
    console.log ('in Understanding', event.target.value);
    setUnderstanding( event.target.value );
  }

  const addUnderstanding = event =>{
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: understanding
    })
  }

  return (
  <div><Grid container
  alignItems="center"
  justify="center"
  style={{ width: '100%', height: 'auto'}}>
    <Grid item xs={7}>
<Card>
<CardContent>
<Typography>
      <h1>How well are you understanding the material?</h1>
      </Typography>
      </CardContent>
      <FormControl>
      <Select value={understanding} onChange={getUnderstanding}>
        <MenuItem value=""><em>How well are you understanding the material?</em></MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
            <div>
              {understanding>0?
            <Link to="/support"><Button onClick={addUnderstanding}>Next</Button></Link>:
            <Button disabled>Next</Button>}
            </div>
            </Card>
            </Grid>
            </Grid>
      </div>
  )
}

export default Understanding;