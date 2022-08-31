import React from "react";
import  myimages from './login.png';
import './login.css';
function Login() {
 
    return (
        <div className="container">
            <div className="logo_nav">
                <p><span>@Lizshop</span></p>
                <p className='signup'>Don't have an account? <span>Sign Up</span></p>
            </div>
            <div />
           
            <h1>Welcome Back</h1>
            <div className='inputs'>

                    <div className='texts'>
                        <label className="login-label">Your Email
                            <input type="email" name="emailAddress" placeholder="name@domain.com" />
                       
                        </label>
                </div>
                <div className='texts'>
                        <label className="login-label">Password
                            <input type="password" name="password" placeholder="at least 8 characters" 
                            />
                        </label>
                </div>

                <div className='box'>
                        <label>
                            <input type="checkbox" name="text" />
                            Keep me logged in
                        </label>
                       <label className='forgetpswd'>forget Password?</label>
                  </div>

                <div className="btn">
                        <button type="login">Login</button>
                    </div>

                     <img src={myimages} alt='image'/>
                    <p>____________________________ OR _____________________________</p>

                <div class='icons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-google" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>


            </div>
        </div>
    )}


export default Login