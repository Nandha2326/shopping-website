import React from 'react'
import Product from './Product';

function Home() {
    return (
        <div>
            {/* <div className="card text-bg-dark  border-0 rounded-0 ">
                <img src="../imgs/main.jpg" className="card-img main" alt="Background"></img>
                <div className="card-img-overlay">
                    <div className='container'>
                        <h1 className="card-title ti2 ">NEW SEASON ARRIVALS</h1>
                        <p className="card-text  ti3 py-4">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div> */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active main">
                        <img src="../imgs/m.jpg" className="d-block w-100" alt="Background" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className=" ti2 ">NEW SEASON ARRIVALS</h1>
                            <p className="  ti3 py-4">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                    <div className="carousel-item main">
                        <img src="../imgs/w1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className=" ti2 ">NEW SEASON ARRIVALS</h1>
                            <p className=" ti3 py-4">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                    <div className="carousel-item main">
                        <img src="../imgs/w3.webp       " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className=" ti2 ">NEW SEASON ARRIVALS</h1>
                            <p className="  ti3 py-4">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product />
        </div>
    )
}

export default Home;