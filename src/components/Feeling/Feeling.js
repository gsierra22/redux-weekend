import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, helperText} from "@material-ui/core";
import {Link} from 'react-router-dom';


function Feeling(props) {
  
  const [feeling, setFeeling] = useState()
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();
    
  const getFeeling = event => {
    
    console.log ('in Feeling', event.target.value);
    setFeeling( event.target.value );
    addFeeling();
  };

  const addFeeling = event =>{
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling
    })
  }
  const error = feeling ==='';


  return (
  <div>
      <h1>How are you feeling today?</h1>

      <Select value={feeling}
       onChange={getFeeling}
       helperText={error ? "Name needs to be 'a'" : "Perfect!"}
       error={error}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button onClick={addFeeling}>
            <Link to="/understanding">Next</Link></Button>
      </div>
  )
}


export default Feeling;