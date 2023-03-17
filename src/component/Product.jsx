import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToWishlist } from "../Redux/Auction/Auction";

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = useRef(true);
  
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addToWishlist(item));
  };
  useEffect(() => {
      const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }
      return () => {
        componentMounted.current = false;
      }
    }
    getProducts();
  }, [])
 

  function Loading() {
    return (
      <div>
        Loading...
      </div>
    )
  }
  function filterProduct(cat){
    const updatedList = data.filter((x)=>x.category === cat)
    setFilter(updatedList)
  }
  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons dlf  nm  mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)} >All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")} >Men's Dress</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")} >Women's Dress</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")} >Jwellerys</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")} >Electronics</button>
        </div>
        <div className=' product-list md-2'>
          {filter.map((product) => {
            return (
              <div className="col-md-3 pro-padding" key={product.id} >
                <div className="card item "   >
                  <Link  to="/wishlist"> 
                  <button className='ic' onClick={()=>handleAdd(product)}><i className="fa-sharp fa-solid fa-heart  "></i></button> 
                  </Link>
                 <Link to={`/product2/${product.id}`}><img src={product.image}  className="card-img-top pro-height"
                  alt={product.title} /></Link> 
                  <div className="card-body ">
                    <h5 className="card-title pro-margin">{product.title.substring(0,12)}</h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <Link to={`/product2/${product.id}`} className="btn btn-outline-dark ">Buy Now</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
  return (
    <div className='body1' >
      <div className="container   my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
           <Link className='title'to="/product"><h1 className='title text-center'>Latest Products </h1></Link> 
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Product