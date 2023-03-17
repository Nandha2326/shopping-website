import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../Redux/Auction/Auction";
import { Link } from 'react-router-dom';
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const addProduct = (product) =>{
    dispatch(addCart(product));
    
  }
  const emptyCart = () => {
    return (
      <div className=" body1 px-4 my-5 bg-light rounded-3 py-5" >
        <div className="container py-4">
          <div className="row">
            <h3>Your WishList is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (

      <div className='body1' key={product.id}>
        <div className='container py-5   d-flex' >
          <div className='col-md-3'></div>
          <div className="col-md-3  " >
            <img src={product.image} className=" pro-height2 " alt={product.title} />
          </div>
          <div className="col-md-4">
            <h4 className='pro-title'>{product.category}</h4>
            <h4>{product.title}</h4>
            <p className='lead fw-bolder'> Rating{product.rating && product.rating.rate}
              <i className='fa fa-star '></i>
            </p>
            <h3 className='fw-bolder'>${product.price}</h3>
            <button className='btn btn-outline-dark me-2 py-2 px-4'
              onClick={() => addProduct(product)}> Add to Cart</button>
            <Link to="/Cart" className='btn btn-dark px-3 py-2'>Go to Cart</Link>
          </div>
        </div>
      </div>
    )    
  };
  return (
    <div>
      {wishlist.length === 0 && emptyCart()}
      {wishlist.length !== 0 && wishlist.map(cartItems)}

    </div>
  );
}
export default (Wishlist);
