import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, delCart } from "../Redux/Auction/Auction";

function Checkout() {
  const state = useSelector((state) => state.handleCart);
  const handleChange = (Props) => {
    <h1>form hasbeen submited</h1>
  }
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  var total = 0;
  var promocode = 5;
  const ItemList = (product) => {
    total = total + product.qty * product.price - promocode;
    return (
      <div key={product.id} >
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">{product.title}</h6>
            <button className=" btn-outline-dark me-2" onClick={() => handleDel(product)}>
              <i className="fa fa-minus"></i>
            </button>
            <strong className="text-muted me-2">{product.qty}</strong>
            <button className="btn-outline-dark" onClick={() => handleAdd(product)}>
              <i className="fa fa-plus"></i>
            </button><br></br>
            <strong> Amount for 1 Qty = [1*{product.price}]= ${product.price}</strong><br></br>
            <strong className="my-0">you Choose {product.qty} Qty = [{product.qty}*{product.price}]= ${product.qty * product.price}</strong>
          </div>
          <strong className="text-muted">${product.qty * product.price}</strong>
        </li>
      </div>

    )
  }
  return (
    <div className='body1'>
      <div className=' container my-4 ' >
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3 " key={ItemList.id}>
              {state.map(ItemList)}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>applied (FIRSTIME-5)</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className=" input-group">
                < input onChange={handleChange} type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  < input onChange={handleChange} type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  < input onChange={handleChange} type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className=" input-group.has-validation">
                    <span className=" input-group-text">@</span>
                    < input onChange={handleChange} type="text" className="form-control" id="username" placeholder="Username" required="" />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  < input onChange={handleChange} type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  < input onChange={handleChange} type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                  < input onChange={handleChange} type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  < input onChange={handleChange} type="text" className="form-control" id="zip" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                < input onChange={handleChange} type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>

              <div className="form-check">
                < input onChange={handleChange} type="checkbox" className="form-check-input " id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  < input onChange={handleChange} id="credit" name="paymentMethod" type="radio"
                    className="form-check-input" checked="" required="" />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="form-check">
                  < input onChange={handleChange} id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  < input onChange={handleChange} id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  < input onChange={handleChange} type="text" className="form-control" id="cc-name" placeholder="" required="" />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  < input onChange={handleChange} type="text" className="form-control" id="cc-number" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  < input onChange={handleChange} type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  < input onChange={handleChange} type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">Proceed to pay</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Checkout