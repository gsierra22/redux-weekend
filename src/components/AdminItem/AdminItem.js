import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Table}from 'react-bootstrap';


function AdminItem(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <tr>
      <td>{props.AdminItem.customer_name}</td>
      <td>{props.AdminItem.total}</td>
      <td>{props.AdminItem.time}</td>
      </tr>
      </div>
  )
}

export default AdminItem;