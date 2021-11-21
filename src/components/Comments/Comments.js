import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField} from "@material-ui/core";

function Comments(props) {
  
  const [Comments, setComments] = useState('')
  const CommentsReducer = useSelector(store => store.UnderstandingReducer);
  const dispatch = useDispatch();

  return (
  <div>
      <h1>Do you have any comments?
      </h1>

      <TextField></TextField>
            <Button>
            NEXT</Button>
      </div>
  )
}

export default Comments;