import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'



const LandingPage = () => {

  const [showLogin,setShowLogin] = useState(false)
  const [showRegister,setShowRegister] = useState(false)
  const [showAddFirm , setShowAddFirm] = useState(false)

  const [showAddProduct,setShowAddProduct] = useState(false)

  const [showWelcome,setShowWelcome]  = useState(false)

  const [showAllProducts,setShowAllProducts] = useState(false)

  const [showLogout,setShowLogout] = useState(false)

  const[showAddTitle,setShowAddTitle] = useState(true)


useEffect(()=>{
  const loginToken = localStorage.getItem('loginToken')
  if(loginToken){
    setShowLogout(true)
  }
},[])


useEffect(()=>{
  const firmName= localStorage.getItem('firmName')
  if(firmName){
    setShowAddTitle(false)
  }
})


  const showLogoutHandler = () =>{
   confirm("Are you sure you want to logout?")
   localStorage.removeItem('loginToken')
   localStorage.removeItem('firmId')
   localStorage.removeItem('firmName')
   window.location.reload()
   setShowLogout(false)
   setShowAddTitle(true)
  }

  
  const showLoginHandler = ()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
     setShowAllProducts(false)
  }

  const showRegisterHandler = () =>{
    setShowRegister(true)
     setShowLogin(false)
     setShowAddFirm(false)
      setShowAddProduct(false)
      setShowWelcome(false)
       setShowAllProducts(false)
  }

  const showAddFirmHandler = () =>{
    if(showLogout){
          setShowRegister(false)
     setShowLogin(false)
     setShowAddFirm(true)
      setShowAddProduct(false)
      setShowWelcome(false)
       setShowAllProducts(false)
    }
   else{
    alert("Please login!")
    setShowLogin(true)
   }
  }

  const showAddProductHandler = () =>{

    if(showLogout){
         setShowAddProduct(true)
    setShowRegister(false)
     setShowLogin(false)
     setShowAddFirm(false)
     setShowWelcome(false)
      setShowAllProducts(false)
    }
     else{
    alert("Please login!")
    setShowLogin(true)
   }
    
  }


  const showWelComeHandler = ()=>{
    setShowWelcome(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
     setShowAllProducts(false)
  }
  const showAllProductsHandler = ()=>{

    
    if(showLogout){
       setShowAllProducts(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
    }
     else{
    alert("Please login!")
    setShowLogin(true)
   }
    
  }

  return (
   <>
   <section className="landingSection">
      <Navbar showLoginHandler={showLoginHandler}  showRegisterHandler={showRegisterHandler} showLogout={showLogout} showLogoutHandler={showLogoutHandler}/>
      <div className="collectionSection">
        <SideBar   showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler} showAllProductsHandler={showAllProductsHandler} showAddTitle={showAddTitle}/>
        {showLogin &&   <Login  showWelComeHandler={showWelComeHandler}/> }
        {showRegister && <Register  showLoginHandler={showLoginHandler}/> }
        {showAddFirm &&  showLogout && <AddFirm/> }
        {showAddProduct &&  showLogout &&  <AddProduct/>}
        {showWelcome && <Welcome/>}
        {showAllProducts &&  showLogout && <AllProducts/>}
      </div>
      </section>
 
   </>
  )
}

export default LandingPage