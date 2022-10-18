import React from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Donate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMoney from '../../hooks/useMoney';
const Donate = () => {
    return (
        <div className="">
            <div className="text-center">
                <h1 className="pt-5 text-center">Donate Today</h1>
                <p className="w-50 mx-auto mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ex quas ratione deserunt, distinctio similique animi sit facere, sunt nobis repellendus esse tenetur laboriosam ut temporibus a error ipsum. Impedit.</p>
            </div>
            <div className="single-div d-flex justify-content-center gap-4 text-center">
                <div className="block p-4 fs-2">
                    <span>100k</span>
                </div>
                <div className="block mark-block p-4 fs-2">
                    <span>200k</span>
                </div>
                <div className="block p-4 fs-2">
                    <span>500k</span>
                </div>
                <div className="block p-4 fs-2">
                    <span>1000k</span>
                </div>
                <div className="block p-4 fs-2">
                    <span>5000k</span>
                </div>
            </div>
            <div className="pt-5 money-text">
                <input id="input-text" className="input text-center" type="text" placeholder="other amount taka"></input>
            </div>
            <div className="text-center">
                <Link onClick={useMoney} className="text-white link-2 p-1 my-4 rounded">Donate Now</Link>
            </div>
            <ToastContainer />
            <div className="donate-plan text-center">
                <div>
                    <h1>Our Donate Plan</h1>
                    <p className="w-50 mx-auto mt-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil, quidem totam laudantium repudiandae beatae reiciendis ipsa aut ut rem possimus nostrum? Libero perspiciatis debitis sapiente nostrum similique magni inventore?</p>
                </div>
                <div className="row container mx-auto pt-5">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div style={{ backgroundColor: 'thistle' }} className="rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/wired/64/000000/porridge.png" />
                            <h4 className="">Food for a Family</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi ipsam provident repudiandae. Accusantium dolorum ullam laboriosam dolore earum blanditiis temporibus sint !</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div style={{ backgroundColor: 'seashell' }} className="rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/ios/50/000000/family--v1.png" />
                            <h4>Food for a Family</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi ipsam provident repudiandae. Accusantium dolorum ullam laboriosam dolore earum blanditiis temporibus sint obcaecati enim fuga itaque,</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div style={{ backgroundColor: 'rgb(201, 150, 167)' }} className="block-3 rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/external-filled-line-rakhmat-setiawan/64/000000/external-education-back-to-school-filled-line-filled-line-rakhmat-setiawan-2.png" />
                            <h4>Food for a Family</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi ipsam provident repudiandae. Accusantium dolorum ullam laboriosam dolore earum blanditiis temporibus sint</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* third sec */}
        <div className="w-75 mx-auto py-5">
        <div className="row">
                <div className="col-lg-6 col-md-6 col-12 p-3">
                    <h2>Their lives depend on youfr donation</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium accusamus ullam qui dolorem commodi alias consectetur, sed eos nemo praesentium iure mollitia modi quas, natus recusandae laudantium iste non quam.</p>
                    <Link className="text-white link-2 p-1 my-4 rounded">How to Contribute?</Link>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <img
                        className="d-block image w-100 h-100"
                        src="../../../Public/image/pic7.jpg"
                        alt="First slide"
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Donate;