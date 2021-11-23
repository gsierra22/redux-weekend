import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Select, MenuItem, Button, TextField, helperText, FormControl, Grid, Card, CardHeader, CardMedia, CardContent, Typography} from "@material-ui/core";
import axios from 'axios';
import {Link} from 'react-router-dom';



function Thanks() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const feedbackReducer = useSelector(store => store.feedbackReducer);
  const dispatch = useDispatch();

  return (
    <div>
       <Grid container
        alignItems="center"
        justify="center"
        style={{ width: '100%', height: 'auto'}}>
    <Grid item xs={7}>
      <Card>
        <CardContent>
          <Typography>
      <h1>Thank you for your feedback!</h1>
      </Typography>
          </CardContent>
          <FormControl>
      <Button><Link to="/">Enter another feedback form</Link>
      </Button></FormControl>
      </Card>
            </Grid>
            </Grid>
    </div>
  )
}

export default Thanks;