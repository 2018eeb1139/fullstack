import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditUsers() {

    let navigte=useNavigate()
    const {id}=useParams()
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

    const { name, username, age,email, password, city, address, phoneNumber, logged_in, enabled  } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
      loadUser();
    }, [])
    

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigte("/")
    }

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='row '>
                <div className='border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div class="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="name"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="username"
                                placeholder="Enter Your username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="age"
                                placeholder="Enter Your age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Your email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="pasword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Your password"
                                value={password}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Your address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                placeholder="Enter Your city"
                                value={city}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                placeholder="Enter Your phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditUsers