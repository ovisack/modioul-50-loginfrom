import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../fierbase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [success,setSuccess] = useState(true);


  const [errorMessage,setErrorMessage] = useState();


  const [showPassword,setShowPassword]=useState(false);

  const emailRef=useRef();



  const  handleSignUp= e =>{
    e.preventDefault()
  const email= e.target.email.value;
  const password=e.target.password.value;
  const terms=e.target.terms.checked;


      const name=e.target.name.value;
      const photo=e.target.photo.value;


      console.log(name);
      console.log(photo);


  console.log(terms);
  console.log(email);
  console.log(password);
  setErrorMessage('')
  setSuccess(false)


  if(!terms){
    setErrorMessage('please accept our terms and conditions')
  }
  if(password.length<6){
    setErrorMessage('password should be crater or longer')
    return;
   
  }
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// if(!emailPattern.text(password)){
//   setErrorMessage('At least on uppercase,on lowe ');
//   return;
// }
// create user with email and  password
createUserWithEmailAndPassword(auth, email,password)

.then(result=>{
  console.log(result.user);
  setSuccess(true)
// sent verification email address

sendEmailVerification(auth.currentUser)
.then(()=>{
  console.log('verification email sent ');
})

})

.catch(error =>{
  console.log("ERROR",error.message);

  setErrorMessage(errorMessage.message)
  setSuccess(false)
})


// update profile name and photo url

const profile= {
  displayName: name,
  photo: photo
}
updateProfile(auth,currentUser,profile)
.then(() =>{
  console.log('user profile update');
})
.catch(error=> console.log( 'user update profile error '))


  }


  const handleForgotPassword = ()=>{
    console.log('get me email address ',emailRef.current.value);
    const emails= emailRef.current.value;

    if(!emails){
      console.log("please provide a value email address");
    }
    else{
      sendPasswordResetEmail(auth,emails)
      .then(() => {
        alert('reset email set please check your email ')
      })
    }
  }
    return (
        <div className="card bg-base-100 w-full
         max-w-sm shrink-0 shadow-2xl  my-28 mx-auto">
             <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" 
            ref={emailRef}
            name='name' placeholder="name" 
            className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input type="text" 
            ref={emailRef}
            name='photo' placeholder="photo" 
            className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" 
            ref={emailRef}
            name='email' placeholder="email" 
            className="input input-bordered" required />
          </div>
          
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={ showPassword ? 'text':'password'}
             name='password' placeholder="password" 
             className="input input-bordered" 
             required />
             <div className="form-control">
  <label className="label cursor-pointer justify-start" >  
    <input type="checkbox" name='terms' className="checkbox" />
    <span className="label-text ml-2">Accept our  
      tram and condition</span>
  
  </label>
</div>
          
          <button onClick={() => setShowPassword(!showPassword)}
           className='btn btn-xs absolute mt-12 right-4'> 
           {
            showPassword ?  <FaEye />:<FaEyeSlash></FaEyeSlash>
           }</button>
          
            <label onClick ={handleForgotPassword} className="label">
              <a href="#" className="label-text-alt link link-hover000000
              000000000000000000000000000000000000000000000000000000000000
              000000000000000000000000000000000000000000000
              000000000000000000000000">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
     
     {
        errorMessage && <p className='text-red-400 '>{errorMessage}</p>
      },
      {
        success && <p className='text-green-500 font-bold'>sign up Successful</p>
      }
  <p> new to the website?<Link className='text-yellow-400' to='/login'>Login..</Link></p>
      </div>
  ); 
     
};

export default SignUp;