import React from 'react';
import Navbar from '../Navbar.js';

import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div>
            <Navbar />
            <section className="page_404 ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="align-items-center">
                                <img src="images/image-404.jpg" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contant_box_404 text-warning  ">
                                <h1 className="text-center ">404 ERROR!</h1>

                                <h3 className=" text-center  ">
                                    Sorry, we can't find the page you are looking for. Please go to
                                    <Link to="/" className="">
                                        Home.
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
