import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField} from "@material-ui/core";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Comments from "../components/Comments/Comments";


function Review ( props ) {

  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  const setPost = () =>{
    axios.post( `/feedback`, feedbackReducer ).then( (response)=>{
        //send a dispatch to empty out the store
        dispatch({ type: 'EMPTY' });
      }).catch((err)=>{
         alert('ERROR POST');
         console.log(err);
      });
}

  

  return(
      <div id="reviewList">
          <h1>Review Feedback</h1>
          <p>Feelings: {feedbackReducer.feeling}</p>
          <p>Understanding:{feedbackReducer.understanding}</p>
          <p>Support: {feedbackReducer.support}</p>
          <p>Comments:{feedbackReducer.comments}</p>
          {/* {feedbackReducer.map(pizza => (< className="itemBox" pizza={pizza} key={pizza.id} />))} */}
          <Button onClick={setPost}><Link to="/thanks">Next</Link></Button>
      </div>
  )
}

export default Review;