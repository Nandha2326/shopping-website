import React, { useState, useEffect } from 'react'
import { useParams,Link  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Auction/Auction';
function Product2() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) =>{
    dispatch(addCart(product));
    
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json())
      setLoading(false)
    }
    getProducts();
  },[id])

  const Loading=()=>{
    return(
      <div>
        Loading...
      </div>
    )
  }
  const ShowProduct =()=>{
    return(
      <div className=' d-flex ' >
        <div className='col-md-3'></div>
        <div className="col-md-3  " >
        <img src={product.image} className=" pro-height2 "alt={product.title} />
        </div>
        <div className="col-md-4">
           <h4 className='pro-title'>{product.category}</h4>
           <h4 className=''>{product.title}</h4>
           <p  className='lead fw-bolder'> Rating{product.rating && product.rating.rate} 
            <i className='fa fa-star '></i>
          </p>
          <h4 className=' fw-bolder '>${product.price}</h4>
          <button className='btn btn-outline-dark me-2 py-2 px-4' 
          onClick={()=>addProduct(product)}> Add to Cart</button>
          <Link to="/Cart" className='btn btn-dark px-3 py-2'>Go to Cart</Link>
        </div> 
      </div> 
    )
  }
  return (
    <div className='body1'>
       <div className='container py-5 mx-auto' >
           <div className="row ">
              {loading ? <Loading/> :<ShowProduct/>}
           </div>
       </div>
    </div>
  )
}

export default Product2