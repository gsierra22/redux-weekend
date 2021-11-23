import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField} from "@material-ui/core";
import axios from 'axios';
import {Link} from 'react-router-dom';



function Thanks() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Thanks</h1>
      <Button><Link to="/">Submit</Link></Button>
    </div>
  )
}

export default Thanks;