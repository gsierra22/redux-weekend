import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button} from "@material-ui/core";

function Feeling(props) {
  
  const [feeling, setFeeling] = useState(1)
  const feelingReducer = useSelector(store => store.feelingReducer);
  const dispatch = useDispatch();

  return (
  <div>
      <h1>How are you feeling today?</h1>

      <Select>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button>
            NEXT</Button>
      </div>
  )
}

export default Feeling;