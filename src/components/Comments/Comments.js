import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField} from "@material-ui/core";
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
      <h1>Do you have any comments?
      </h1>

      <TextField value={comments} onChange={getComments}></TextField>
      <Button onClick={addComments}>
            <Link to="/review">NEXT</Link></Button>
      </div>
  )
}

export default Comments;