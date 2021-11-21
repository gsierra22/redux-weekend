import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';

function Feeling(props) {
  
  const [feeling, setFeeling] = useState(1)
  const feelingReducer = useSelector(store => store.feelingReducer);
  const dispatch = useDispatch();

  const getFeeling = event => {
    console.log ('in Feeling', event.target.value);
    setFeeling( event.target.value );
  }

  const addFeeling = event =>{
    dispatch({
      type: 'ADD_FEELING',
      payload: feeling
    })
  }

  return (
  <div>
      <h1>How are you feeling today?</h1>

      <Select value={feeling} onChange={getFeeling}>
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