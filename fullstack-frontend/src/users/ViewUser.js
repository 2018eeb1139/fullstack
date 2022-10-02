import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../App.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function ViewUser() {
    const [user, setUser] = useState({
        id:"",
        name: "",
        username: "",
        age:"",
        email: "",
        password:"",
        logged_in:"",
        enabled:"",
        city:"",
        address:"",
        phoneNumber:""
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser()

    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row '>
                <div className='border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>User Details </h2>
                    <span className='top-right-user'>
                        <AccountCircleIcon/>
                        
                    </span>
                    <span className='top-right'>
                        Last Logged in {user.dataTime}
                    </span>
                    <div className='card'>
                        <div className='card-header'>
                            Details of User ID : {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name : </b>
                                    {user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Username : </b>
                                    {user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Age : </b>
                                    {user.age}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email : </b>
                                    {user.email}
                                </li>
                                <li className='list-group-item'>
                                    <b>Address : </b>
                                    {user.address}
                                </li>
                                <li className='list-group-item'>
                                    <b>City : </b>
                                    {user.city}
                                </li>
                                <li className='list-group-item'>
                                    <b>Phone Number : </b>
                                    {user.phoneNumber}
                                </li>
                                {/* <li className='list-group-item'>
                                    <b>Last Logged in : </b>
                                    {user.dataTime}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-outline-primary my-2' to="/">Back to Home</Link>
                </div>
            </div>
        </div>

    )
}

export default ViewUser