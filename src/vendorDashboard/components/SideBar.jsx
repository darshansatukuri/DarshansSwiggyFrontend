import React from 'react'

const SideBar = ({showAddFirmHandler,showAddProductHandler,showAllProductsHandler,showAddTitle}) => {
  return (
   <div className="sideBarSection">
    <ul>
      {showAddTitle ?(<li onClick={showAddFirmHandler}>Add Firm</li>):("")}
       
        <li onClick={showAddProductHandler}>Add product</li>
        <li onClick={showAllProductsHandler}>All Products</li>
        <li>User Manual</li>
    </ul>
   </div>
  )
}

export default SideBar