import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='DataPages'>
    <div className='SignIn'>
        <h1>Sign-In</h1>
        <input type='text' placeholder='E-Mail or Username'></input>
        <input type='password' placeholder='Password'></input>
        <button>Log-In</button>
        <div className='extras'>
          <Link to = '/Register'><a>No account? Register!</a></Link>
        </div>
       
    </div>
    </div>
  )
}
