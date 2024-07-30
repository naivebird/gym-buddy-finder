import React, { useState,useEffect } from 'react';
import './ManageUsers.css';
import axios from 'axios'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function ManageUsers() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    loadUsers();
},[])


const loadUsers = async ()=>{
    const result = await axios.get("http://localhost:8080/api/v1/user/all")
    setUsers(result.data)
}

const deleteUser = async (id)=>{
    const result = await axios.delete(`http://localhost:8080/api/v1/user/delete?id=${id}`)
    loadUsers()
    alert(result.data+" : "+id)
}

 

  return (
    <div className='admin-page'>
    <div className='container'>
    <div className='py-4'>
        <table className="table table-striped table-hover table-bordered">
            <thead className='table-dark'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">email</th>
                    <th scope="col">Role</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr>
                    <th scope="row" key={index}> {index+1}</th>
                    <td> {user.id} </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td> 
                    <td> 
                        <Link className='btn btn-primary mx-2' to={`/admin/${user.id}`}
                        > View Details
                        </Link>
                        
                    </td>
                    <td>
                    <button className='btn btn-danger mx-2'
                        onClick={()=>deleteUser(user.id)}><DeleteIcon sx={{ fontSize: 20 }} /> Delete </button>
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


