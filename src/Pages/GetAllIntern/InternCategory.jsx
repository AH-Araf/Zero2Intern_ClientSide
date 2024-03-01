import { Link } from "react-router-dom";
import './GetAllIntern.css'


const InternCategory = ({a}) => {
    // console.log(service);
    // eslint-disable-next-line no-unused-vars
    const {Intern, description, InternDescription, skill, category, types, _id, image, deadline } = a;

    



    return (
        <div className='Intern-single-category' data-aos="fade-up"> 


            <img className='company-image'  src={image} alt="" />  <br />    
            <h4 className="text-lg font-bold bg-slate-300">Intern Title: {Intern}</h4>
            <div>
            <p><span className='title2'>Category:</span> <span className='title3'>{category}</span></p>  
            <p><span className='title2'>Intern Type:</span> <span className='title3'>{types}</span></p>  
            {/* <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>   */}
            <p><span className='title2'>Deadline:</span> <span className='title3'>{deadline}</span></p> 
            </div>
            
            <Link to={`/Interns/${_id}`}><button className='btn btn-outline mt-5'>Intern Details</button></Link>
            
        </div>              
                          
                
    );
};

export default InternCategory;