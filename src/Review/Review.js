import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField} from "@material-ui/core";
import axios from 'axios';
import {Link} from 'react-router-dom';


function Review ( props ) {

  const [review, setReview] = useState();
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  const getReview = event => {
    console.log ('in Comments', event.target.value);
    setReview( event.target.value );
  }

  const addReview = event =>{
    dispatch({
      type: 'ADD_REVIEW',
      payload: review
    })
  }

  

  return(
      <div>
          <h1>Review Feedback</h1>
          <p>Feelings:</p>
          <p>Understanding:</p>
          <p>Support: </p>
          <p>Comments:</p>
          <Button><Link to="/">Submit</Link></Button>
      </div>
  )
}

export default Review;