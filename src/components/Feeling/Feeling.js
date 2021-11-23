import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, helperText, FormControl, Grid, Card, CardHeader, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';


function Feeling(props) {
  
  const [feeling, setFeeling] = useState()
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();
    
  const getFeeling = event => {
    
    console.log ('in Feeling', event.target.value);
    setFeeling( event.target.value );
    addFeeling();
  };

  const addFeeling = event =>
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling
    })
  

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
      <h1>How are you feeling today?</h1>
      </Typography>
      </CardContent>
      <FormControl>
      <Select value={feeling}
       onChange={getFeeling}>
                <MenuItem value=""><em>How are you feeling?</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
            <div>
              {feeling>0?
            <Link to="/understanding"><Button onClick={addFeeling}>Next</Button></Link>:
            <Button disabled>Next</Button>}
            </div>
            </Card>
            </Grid>
            </Grid>
      </div>
  )
}


export default Feeling;