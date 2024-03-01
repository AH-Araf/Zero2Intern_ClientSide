import Banner from "../Banner/Banner";
import HomeIntern from "../HomeIntern/HomeIntern";
import TextMarquee from "../TextMarquee/TextMarquee";
import img from '../../../assets/Banner/e.jpg'
import { Parallax } from "react-parallax";
const Home = () => {
    
  return (
    <div>
      <div data-aos="zoom-in"><Banner></Banner></div>
       
       
         
      <TextMarquee></TextMarquee>

      <HomeIntern></HomeIntern>
      <div className='mt-10'>
            <Parallax
                blur={{ min: -50, max: 40 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={200}
            >
                <div className="hero h-[650px] " >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-4 text-3xl font-bold uppercase">Why Zero2Intern?</h1>
                            <p className="mb-2"><b>Zero Two Intern provides a curated list of internship opportunities tailored for freshers, ensuring relevance to their skill sets and career aspirations.
                                                    The platform offers a range of resources and training modules to help freshers enhance their skills, making them more competitive in the job market.
                                                    Through Zero Two Intern, users gain access to valuable industry insights, helping them stay informed about trends, best practices, and the latest developments in their chosen field.
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

export default Home;
