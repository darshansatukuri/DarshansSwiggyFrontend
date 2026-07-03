import React , {useState} from 'react'
import { API_URL } from '../../data/ApiPath';

const Login = ({showWelComeHandler}) => {
const [email,setEmail] = useState("")

const [password,setPassword] = useState("")


const loginHandler = async(e)=>{
  e.preventDefault()
  try {
    const response = await fetch(`${API_URL}/vendor/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })

    const data = await response.json()
   
    if(response.ok){
      alert("Login Success")
      setEmail("")
      setPassword("")
      localStorage.setItem("loginToken",data.token)
      showWelComeHandler()
       
     const vendorId = data.vendorId;
     console.log("checking for vendorId",vendorId)
     const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)
     const vendorData = await vendorResponse.json()
     if(vendorResponse.ok){
      const vendorFirmId = vendorData.vendorFirmId
      const vendorFirmName = vendorData.vendor.firm[0].firmName
      console.log("checking for vendorFirmId",vendorFirmId)
      localStorage.setItem("firmId",vendorFirmId)
      localStorage.setItem("firmName",vendorFirmName)
      window.location.reload()
     }
    }
    else{
       console.log(data.error)
   alert("Login Failed!")
    }

  }catch(error) {
   console.log(error)
   
    }
}

  return (
   <div className="loginSection">
    
    <form className="authForm" onSubmit={loginHandler}>
        <h3>Vendor login</h3>
        <label>Email</label>
    
        <input type="text" name="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder="enter your email"/>
        <br/>
        
        <label>Password</label>
       
        
        <input type="password" name="password"  value={password}  onChange={(e)=>setPassword(e.target.value)}  placeholder="enter your password"/>
        <br/>
       
<button type="button" class="button" type="submit">
  <div class="button-top">Submit</div>
  <div class="button-bottom"></div>
  <div class="button-base"></div>
</button>
         
         <br/>
    </form>
   </div>
  )
}

export default Login