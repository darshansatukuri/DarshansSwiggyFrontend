import React,{useState} from 'react'


import { API_URL } from '../../data/apiPath';



const Register = ({showLoginHandler}) => {
 
const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState(true);


const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    const response = await fetch(`${API_URL}/vendor/register`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify({username,email,password})
    })

    const data = await response.json()
    if(response.ok){
      console.log(data)
      setUsername("");
      setEmail("");
      setPassword("");
      alert("Vendor Registered Successful")
      showLoginHandler()

      

    }
  } catch (error) {
    console.error("Registration failed!",error)
    alert("Registration Failed !")
  }
}

  return (
   <div className="registerSection">
    <form className="authForm" onSubmit={handleSubmit}>
        <h3>Vendor Register</h3>
        <label>Username</label>
        <input type="text"     name="username"    value={username} placeholder="enter your name"  onChange={(e)=>setUsername(e.target.value)}/>
         <br/>
        <label>Email</label>
         <input type="text"     name="email"     value={email} placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
         <br/>
         <label>Password</label>
        <input type="password" name="password"     value={password} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/>
         <br/>
             
<button type="button" className="button" type="submit">
  <div className="button-top">Submit</div>
  <div className="button-bottom"></div>
  <div className="button-base"></div>
</button>
      <br/>
    </form>
   </div>
  )
}

export default Register