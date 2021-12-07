import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Feedback(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
  <tr>
      <td>{props.feedback.feeling}</td>
      <td>{props.feedback.understanding}</td>
      <td>{props.feedback.support}</td>
      <td>{props.feedback.comments}</td>
      </tr>
  )
}

export default Feedback;