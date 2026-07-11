import React from 'react'

const SideBar = ({showAddFirmHandler,showAddProductHandler,showAllProductsHandler,showAddTitle}) => {
  return (
   <div className="sideBarSection">
    <ul>
      {showAddTitle ?(<li onClick={showAddFirmHandler}>Add Firm</li>):("")}
       
        <li onClick={showAddProductHandler}>Add product</li>
        <li onClick={showAllProductsHandler}>All Products</li>
        <li><a href="https://drive.google.com/file/d/1uRvwLju56sUocmoUNvzGqgoLKMhTbVXu/view?usp=drivesdk" target="_blank" className="UserManualDsn">User Manual</a></li>
    </ul>
   </div>
  )
}

export default SideBar