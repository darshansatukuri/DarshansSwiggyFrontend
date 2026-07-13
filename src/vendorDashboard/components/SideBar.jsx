import React from 'react'

const SideBar = ({showAddFirmHandler,showAddProductHandler,showAllProductsHandler,showAddTitle, isOpen, onClose}) => {
  const handleLinkClick = (handler) => {
    handler();
    if (onClose) {
      onClose();
    }
  }

  return (
   <div className={`sideBarSection ${isOpen ? 'active' : ''}`}>
     <ul>
       {showAddTitle ? (
         <li onClick={() => handleLinkClick(showAddFirmHandler)}>Add Firm</li>
       ) : null}
       <li onClick={() => handleLinkClick(showAddProductHandler)}>Add product</li>
       <li onClick={() => handleLinkClick(showAllProductsHandler)}>All Products</li>
       <li>
         <a 
           href="https://drive.google.com/file/d/1uRvwLju56sUocmoUNvzGqgoLKMhTbVXu/view?usp=drivesdk" 
           target="_blank" 
           rel="noopener noreferrer"
           className="UserManualDsn"
         >
           User Manual
         </a>
       </li>
     </ul>
   </div>
  )
}

export default SideBar