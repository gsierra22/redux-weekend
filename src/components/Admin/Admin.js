import {useDispatch, useSelector} from 'react-redux';
//import {useState, useEffect } from 'react';


function Admin() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Admin</h1>
    </div>
  )
}

export default Admin;