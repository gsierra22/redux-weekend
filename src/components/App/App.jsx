import React from 'react';
//import axios from 'axios';
import './App.css';
//import { useState, useEffect } from 'react';
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
import Feeling from '../Feeling/Feeling';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling/>
    </div>
  );
}

export default App;