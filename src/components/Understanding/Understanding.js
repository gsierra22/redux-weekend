import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button} from "@material-ui/core";
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
  <div>
      <h1>Are you understanding the material?</h1>

      <Select value={understanding} onChange={getUnderstanding}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button onClick={addUnderstanding}>
            <Link to="/support">Next</Link></Button>
      </div>
  )
}

export default Understanding;