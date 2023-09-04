import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='DataPages'>
    <div className='SignIn'>
        <h1>Sign-Up</h1>
        <input type='text' placeholder='Username'></input>
        <input type='text' placeholder='E-Mail'></input>
        <input type='password' placeholder='Password'></input>
        <input type='password' placeholder='Confirm your Password'></input>
        <button>Register</button>
        <div className='extras'>
            <Link to = '/'><a>Do you have an account?</a></Link>
        </div>
       
    </div>
    </div>
  )
}
