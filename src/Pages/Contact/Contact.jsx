import { Parallax } from "react-parallax";
import image1 from '../../assets/Image/c.jpg'
const Contact = () => {

 

    return (
        <div>
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
                                <h1 className="mb-4 text-3xl font-bold uppercase">Contact us</h1>
                                <p className="mb-2"><b>
                                    <p><span className="text-xl"><u>Email:</u></span> <br />
                                        zero2intern@gmail.com <br />
                                        office.zero2intern@gmail.com
                                    </p>

                                    <p className="mt-10"><span className="text-xl"><u>Phone Number:</u></span> <br />
                                        +8801312010261 <br />
                                        +8801842213562
                                    </p>
                                </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>

           


        </div>
    );
};

export default Contact;