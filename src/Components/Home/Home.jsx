import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Donate from '../Donate/Donate';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="../../../Public/image/pic4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <div className="slide-sec">
                            <h1 className="slide-heading">Let ’s Help Those Who Are More In Need</h1>
                            <p className="fs-3">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Link className=" text-white link p-1 mt-2 rounded ">Donate Now</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="../../../Public/image/pic5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="slide-sec">
                        <h1 className="slide-heading">Let ’s Help Those Who Are More In Need</h1>
                        <p className="fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link className="text-white link p-1 mt-2 rounded">Donate Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image w-100"
                        src="../../../Public/image/pic6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="slide-sec">
                        <h1 className="slide-heading">Let ’s Help Those Who Are More In Need</h1>
                        <p className="fs-3">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <Link className="text-white link p-1 mt-2 rounded">Donate Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Donate></Donate>
        </div>
    );
};

export default Home;