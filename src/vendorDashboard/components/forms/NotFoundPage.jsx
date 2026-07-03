import React from 'react'

import {Link} from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className='notFoundPage-container'>
        <Link to="/"  style={{fontSize:"32px",color:"blue"}}>
        <p>Go Back</p></Link>
        <h1>404</h1>
        <div>
            <h2>Page Not Found</h2>
        </div>
        
    </div>
  )
}

export default NotFoundPage