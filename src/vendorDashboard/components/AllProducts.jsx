import {useState,useEffect} from 'react'
import { API_URL } from '../data/apiPath'

const AllProducts = () => {

const [products,setProducts] = useState([])

const getAllProducts = async()=>{
    try{
        const firmId = localStorage.getItem('firmId')
        const response = await fetch(`${API_URL}/product/${firmId}/products`)
        const data = await response.json()
        setProducts(data.products)
        console.log(data)
    } catch (error) {
        console.error(" Failed to fetch products:", error)
        alert("Failed to fetch products")
    }
}

const deleteProductById = async(productId) => {
    console.log(productId)
    if(!confirm("Are you sure you want to delete this product?")) return;
    
    try{
        const deleteResponse = await fetch(`${API_URL}/product/${productId}`,{
            method:"DELETE" })
            console.log(deleteResponse)
        if(deleteResponse.ok){
            setProducts(products.filter((product)=>product._id !== productId))
            alert("Product deleted successfully")
        }
        
    }
    catch(error){
        console.error("Failed to delete product:", error)
        alert("Failed to delete product")
    }
}


useEffect(()=>{
    getAllProducts()
    console.log("This is useEffect")
},[])


    return (
    <>
    {!products || products.length === 0 ? (
        <div style={{padding:'20px', width:'100%', textAlign:'center'}}>
            <p>No Products added</p>
        </div>
    ) : (
       <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {products.map((item)=>{
                   return (<tr key={item._id}>
                             <td>{item.productName}</td>
                             <td>₹{item.price}</td>
                             <td>
                                 {item.image && (
                                     <img 
                                         src={`${API_URL}/uploads/${item.image}`} 
                                         alt={item.productName} 
                                         style={{width: '80px', height: '80px', objectFit:'cover', borderRadius:'4px'}} 
                                     />
                                 )}
                             </td>
                             <td><button className="button" onClick={()=> deleteProductById(item._id)}>
                               <div className="button-top">Delete</div>
                               <div className="button-bottom"></div>
                               <div className="button-base"></div>
                             </button></td>
                         </tr>
                         )}) }
            </tbody>
          </table>
       </div>
    )}
    </>
  )
}

export default AllProducts