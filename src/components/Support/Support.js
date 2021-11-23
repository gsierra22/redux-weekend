import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, helperText, FormControl, Grid, Card, CardHeader, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';

function Support(props) {
  
  const [support, setSupport] = useState()
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  const getSupport = event => {
    console.log ('in Support', event.target.value);
    setSupport( event.target.value );
  }

  const addSupport = event =>{
    dispatch({
      type: 'ADD_SUPPORT',
      payload: support
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
      <h1>How well are you being supported?</h1>
      </Typography>
      </CardContent>
      <FormControl>

      <Select value={support} onChange={getSupport}>
        <MenuItem value=""><em>How well are you being supported?</em></MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
            <div>
              {support>0?
            <Link to="/comments"><Button onClick={addSupport}>Next</Button></Link>:
            <Button disabled>Next</Button>}
            </div>
            </Card>
            </Grid>
            </Grid>
      </div>
  )
}

export default Support;