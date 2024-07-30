import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ViewUser.css';

export default function ViewUser() {


    const { id } = useParams()

    const [user, setUser] = useState({
        id: "",
        email: "",
        role:"",
        lastLogin:"",
        lastLogin:"",
        updatedAt:""

    })

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 boarder rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>  User Details </h2>
                    <div className='card '>
                        <div className='card-header mx-3'>
                            Details of user
                            <ul className='list-group list-group-flush mx-3'>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>ID</b></span>
                                    <span className='value'>: {user.id}</span>
                                </li>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>E-mail</b></span>
                                    <span className='value'>: {user.email}</span>
                                </li>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>Role</b></span>
                                    <span className='value'>: {user.role}</span>
                                </li>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>Last Login </b></span>
                                    <span className='value'>: {user.lastLogin}</span>
                                </li>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>Created at</b></span>
                                    <span className='value'>: {user.createdAt}</span>
                                </li>
                                <li className='list-group-item d-flex'>
                                    <span className='label'><b>Updated at</b></span>
                                    <span className='value'>: {user.updatedAt}</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/admin"}>Go Back</Link>
                </div>
            </div>
        </div>
    )
}
