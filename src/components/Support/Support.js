import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';

function Support(props) {
  
  const [support, setSupport] = useState(1)
  const supportReducer = useSelector(store => store.supportReducer);
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
      <h1>How well are you being supported?</h1>

      <Select value={support} onChange={getSupport}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button onClick={addSupport}><Link to="/comments">Next</Link></Button>
      </div>
  )
}

export default Support;