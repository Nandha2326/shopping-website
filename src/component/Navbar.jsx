import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
    const state = useSelector( (state) =>state.handleCart)
    const state1 = useSelector((state1) => state1.wishlist);
    return (
        <div className='sticky-top' >
            <nav className="navbar navbar-expand-xl   bg-info  py-2">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle= "collapse"
                        data-bs-target="#dropdown" aria-controls="dropdown"
                        aria-expanded="false" aria-label="Toggle navigation "  >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand title mx-auto fs-4" to="./">TRENDS COLLECTIONS</Link>
                    <div className="collapse navbar-collapse    " id="dropdown">
                        <ul className="navbar-nav set mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link "to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons nn">
                            <NavLink to="/login" className="btn btn-outline-dark me-2 ">
                                <i className='fa fa-sign-in me-1'></i>Login</NavLink>
                            <NavLink to="/Register" className="btn btn-outline-dark me-2 ">
                                <i className='fa fa-user-plus me-1'></i>Register</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark me-2">
                                <i className='fa fa-shopping-cart me-1'></i>Cart({state.length})</NavLink>
                            <NavLink to="/wishlist" className="btn btn-outline-dark me-2">
                            <i className="fa-sharp fa-solid fa-heart"></i> wishlist({state1.length}) </NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar