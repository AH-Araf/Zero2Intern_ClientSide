// import React from 'react';
import './About.css';
import videoSource from '../../assets/Video/a.mp4';
import image1 from '../../assets/Image/b.jpg'

// import sw1 from '../../assets/Image/araf.jpg'
// import sw2 from '../../assets/Image/sumiya.jpg'
// import sw3 from '../../assets/Image/nishat.jpg'
// import sw4 from '../../assets/Image/sadia.jpg'

import { Parallax } from 'react-parallax';

const About = () => {
    return (
        <div>
            <div>
                <video className='w-full h-full' controls autoPlay>
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className='mt-10'>
                <Parallax
                    blur={{ min: -50, max: 40 }}
                    bgImage={image1}
                    bgImageAlt="the menu"
                    strength={200}
                >
                    <div className="hero h-[650px] " >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className="">
                                <h1 className="mb-4 text-3xl font-bold uppercase">About us</h1>
                                <p className="mb-2"><b>
                                    Zero2Intern is a dynamic platform dedicated to transforming aspiring individuals into skilled professionals by providing comprehensive internship opportunities. Our mission is to bridge the gap between theoretical knowledge and practical experience, empowering participants to excel in their chosen fields.

                                    At Zero2Intern, we understand the pivotal role internships play in shaping successful careers. We connect students and young professionals with industry-leading organizations, fostering an environment where they can apply theoretical concepts in real-world scenarios. Our carefully curated internship programs cover a diverse range of industries, ensuring participants gain hands-on experience relevant to their academic backgrounds.

                                    What sets Zero2Intern apart is our commitment to facilitating meaningful connections between interns and companies. We prioritize quality internships that offer mentorship, skill development, and networking opportunities, enhancing participants overall employability. Our platform is designed to empower individuals to explore their passions, build a strong professional network, and make informed career choices.

                                    Whether you are a student seeking to kickstart your career or an organization looking to engage with top talent, Zero2Intern is your go-to platform for fostering mutually beneficial partnerships. Join us in the journey of learning, growth, and professional development – where every internship is a stepping stone towards a successful future.
                                </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

            {/* <div className='maker-main'>
                <div className='maker mb-10 mt-10'>
                    <div>
                        <img className='h-48 w-44 border-4 border-red-300' src={sw1} alt="" />
                        <div>
                            <p><b>Md. Arafat Hossain</b></p>
                            <p><b>ID: 1111014</b></p>
                        </div>
                    </div>
                    <div>
                        <img className='h-48 w-44 border-4 border-red-300' src={sw2} alt="" />
                        <div>
                            <p><b>Mosa. Sumiya Akter</b></p>
                            <p><b>ID: 1111012</b></p>
                        </div>
                    </div>
                </div>

                <div className='maker'>
                    <div>
                        <img className='h-48 w-44 border-4 border-red-300' src={sw3} alt="" />
                        <div>
                            <p><b>Nishat Tasnim</b></p>
                            <p><b>ID: 1111012</b></p>
                        </div>
                    </div>
                    <div>
                        <img className='h-48 w-44 border-4 border-red-300' src={sw4} alt="" />
                        <div>
                            <p><b>Umma Sadia Tabassum</b></p>
                            <p><b>ID: 1111010</b></p>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default About;
