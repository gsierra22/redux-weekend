import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Table}from 'react-bootstrap';
import axios from 'axios';
import Feedback from '../Feedback/Feedback';


function Admin(props) {

  useEffect(() =>{
      getAdmin();
    }, [] );
  
    const [adminFeedback, setAdminFeedback]= useState([]);
  
  const getAdmin = ()=>{
    axios.get('/feedback').then((res) => { 
      console.log('Successful AXIOS GET', res.data);
      setAdminFeedback(res.data);
      console.log(adminFeedback)
    }).catch((err) => {
      console.log('Error in AXIOS GET');
    })
  }
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Admin</h1>
      <Table striped bordered hover>
      <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
      {adminFeedback.map( feedback =>(<Feedback feedback={feedback} key={feedback.id}/>))}
      </tbody>
      </Table>
      </div>
  )
}

export default Admin;