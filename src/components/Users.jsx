import React, { useEffect,useState } from 'react';
import axios from "axios";
import "./styles/Users.css";
import {useDispatch,useSelector} from "react-redux";
import { fetchUsers } from '../store/DataSlice';
const Users = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state)=>state.Data);
  const [user, setUsers] = useState([]);
  const getUsers=()=>{
    if(users.length > 9){
     const users1 = users.slice(0,9);
      setUsers(users1);

    }else{
      setUsers(users);

    }

};
  useEffect(()=>{
  dispatch(fetchUsers());
  getUsers();
  },[])
  return (
    <>
    <div className="table-1">
 { user.length > 1 && user ?  
        <table className="table-2">
          <tr>
          <th>User ID</th>
          <th>UserName</th>
          <th>Email Address</th>
          </tr>
          { user && user.map((curElem) => {
            return <>
            <tr className='space-1'>
            <td>{curElem._id}</td>
            <td>{curElem.username}</td>
            <td>{curElem.email}</td>
            </tr>
            </>;  })}
        </table>
     : <img src='https://i.gifer.com/ZKZg.gif' width="20%" height="20%" /> 
    
    }
         </div>

    </>
  )
}

export default Users;