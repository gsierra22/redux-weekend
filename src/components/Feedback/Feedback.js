import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import axios from 'axios';


function Feedback(props) {

  const deleteFeedback = event =>{
          axios.delete(`/feedback/${props.feedback.id}`).then ( ( response )=>{
          }).catch( ( err )=>{
            console.log( err );
            alert( 'ERROR! GET' );
          }) 
        

  }


  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
  <tr>
      <td>{props.feedback.feeling}</td>
      <td>{props.feedback.understanding}</td>
      <td>{props.feedback.support}</td>
      <td>{props.feedback.comments}</td>
      <td><button onClick={deleteFeedback}>Delete</button></td>
      </tr>
  )
}

export default Feedback;