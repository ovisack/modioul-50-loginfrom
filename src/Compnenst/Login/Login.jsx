import React, { useState } from 'react';
import { auth } from '../../fierbase.init';
import {  NavLink } from 'react-router-dom';
const Login = () => {

  const [success,setSuccess]= useState(false);
  const [loginError, setLoginError] =useState('');




  const handleLogin= e =>{
    e.preventDefault();


    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email);
    console.log(password);

    //  reset status 
    setSuccess(false);
    setLoginError('');



    // login user 
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
      console.log(result.user);
      setSuccess(true)

    })

    .catch(error=>{
      console.log('ERROR',error.message);
       setLoginError(error.message);
    })

  }
    return (
        <div>

           <h2 className="text4xl">Login</h2> 
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {
        success && <p className='text-green-900'>user login  success...... </p>
      },
      {
        loginError && <p className='text-red-600'> {loginError}</p>
      }
      <p>new to this website please <NavLink  className='text-red-600' to='/signUp'> sin up</NavLink></p>
    </div>
  </div>
</div>
       
       
        </div>
    );
};

export default Login;