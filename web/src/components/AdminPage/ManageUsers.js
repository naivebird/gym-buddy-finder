import React, { useState,useEffect } from 'react';
import './ManageUsers.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function ManageUsers() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    loadUsers();
},[])


const loadUsers = async ()=>{
    const result = await axios.get("http://localhost:8080/api/v1/user/all")
    setUsers(result.data)
}



  return (
    <div className='manage-user-page'>
    <div className='manage-user-container'>
    <div className='py-4'>
        <table className="table table-striped table-hover table-bordered">
            <thead className='table-dark'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created At</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr>
                    <td> {user.id} </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td> {user.createdAt}</td> 
                    <td> 
                        <Link className='btn btn-primary mx-2' to={`/admin/${user.id}`}
                        > View Details
                        </Link>   
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>

    </div>
</div>
</div>
  );
}

export default ManageUsers;


