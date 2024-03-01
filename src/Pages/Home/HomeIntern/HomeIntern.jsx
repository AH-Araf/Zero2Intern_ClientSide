import { Link} from "react-router-dom";
import HomeInternSingle from "./HomeInternSingle";
import { useEffect, useState } from "react";
import './HomeIntern.css'


const HomeIntern = () =>{
    const [cat, setCat] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/internLimit`)
            .then(res => res.json())
            .then(data => setCat(data))
    }, [])
    return (
        <div data-aos="flip-up">
            <div>
                <h1 className='text-3xl home-title'>Latest Interns</h1>
                <div className='display-flex m-3 all-Interns3'>
                {

                    cat?.map(a => <HomeInternSingle
                    key={a._id}
                    a={a}
                    >
                        
                    </HomeInternSingle>)
                }
            </div>
            </div>
            <div className=' btn-home'><Link to='/getAllIntern'><button className='btn  btn-abc mt-5'>See All Intern Post</button></Link></div>

        </div>
    );
};

export default HomeIntern;