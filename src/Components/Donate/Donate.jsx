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
                <p className="w-50 mx-auto mt-3">Many people are out of food and others will run out in the coming days. As markets are flooded and not operating, people have nowhere to buy supplies, so it’s urgent that aid gets through to them.</p>
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
                    <p className="w-50 mx-auto mt-3 text-center">Four million people, including 1.6 million children, stranded by flash floods in north-eastern Bangladesh are in urgent need of help. UNICEF is on the ground to protect children and to deliver emergency water and health supplies.“Children need safe drinking water right now. Preventing deadly waterborne diseases is one of several critical concerns,” said Mr. Sheldon Yett, UNICEF Representative to BangladeshUNICEF has already dispatched 400,000 water purification tablets that can support 80,000 households with clean water for a week. UNICEF is working to further support the Government of Bangladesh’s emergency response with millions of water purification tablets, more than 10,000 water containers known as jerry cans, and thousands of hygiene kits for women and adolescent girls. UNICEF is also procuring emergency medicines supplies for district health facilities.</p>
                </div>
                <div className="row container mx-auto pt-5 gap-3 justify-content-center">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div style={{ backgroundColor: 'thistle' }} className="rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/wired/64/000000/porridge.png" />
                            <h4 className="headings py-2">Food for a Family</h4>
                            <p className="para">Since floods can potentially increase the transmission of water- and vector-borne diseases, such as typhoid fever, cholera, malaria, and yellow fever, among others, it is important to know your risk and protect your water sources.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div style={{ backgroundColor: 'seashell' }} className="rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/ios/50/000000/family--v1.png" />
                            <h4 className="headings py-2">Shelter for a Family</h4>
                            <p className="para">People’s houses have been damaged, washed away or completely covered in the flood water. Thousands of people are looking to make their way to flood shelters where they will need a lot of support.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div style={{ backgroundColor: 'rgb(201, 150, 167)' }} className="block-3 rounded p-4 card h-100 border-0">
                            <img className="icon" src="https://img.icons8.com/external-filled-line-rakhmat-setiawan/64/000000/external-education-back-to-school-filled-line-filled-line-rakhmat-setiawan-2.png" />
                            <h4 className="headings py-2">Education for a Child</h4>
                            <p className="para">The largest issue for the education system in Bangladesh is lack of quality. Overcrowding and under-qualified instructors have led to high dropout rates at the primary and secondary levels.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* third sec */}
            <div className="w-75 mx-auto py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-5">
                        <h2>Their lives depend on your donation</h2>
                        <p> The most common risks associated with flooding is the contamination of drinking-water facilities, and standing water, which can be a breeding site for mosquitoes, bring chemical hazards, and cause injuries. In fact, while primary enrollment may be at 98%, it drops substantially to 22% at the higher secondary level.</p>
                        <Link className="text-white link-2 p-1 my-4 rounded">How to Contribute ?</Link>
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
            {/* forth section */}
            <div className="w-75 mx-auto py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img
                            className="d-block image w-100 h-100"
                            src="../../../Public/image/pic10.jpg"
                            alt="First slide"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-5">
                        <h2>They need us to survive</h2>
                        <p> This is especially evident in rural communities where various social and economic factors can prevent safe access to education – things like natural disasters, child labor, family poverty, disability, gender abuse, child marriage, and poor sanitation.Currently, the government’s main goals are to expand learning opportunities at earlier ages, offer more inclusive education, and provide increased access to education for adolescents.</p>
                        <Link className="text-white link-2 p-1 my-4 rounded">How to Contribute ?</Link>
                    </div>
                </div>
            </div>
            {/* fifth section */}
            <div className="w-75 mx-auto py-4 text-center">
                <div>
                    <h2 className="fw-bold">Get My Updates</h2>
                    <p className="w-75 mx-auto py-2 text-center">Never miss an update and stay informed so you can take action immediately.</p>
                </div>
                <div className="email p-5 rounded w-75 mx-auto">
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        <span className ="input-group-text bg-danger text-white" id="basic-addon2">Subscriber</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;