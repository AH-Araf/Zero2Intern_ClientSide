import { Link, useLoaderData } from "react-router-dom";


const SingleIntern = () => {
    const a = useLoaderData();
    const {Intern, description, InternDescription, skill, category, types, _id, image, deadline } = a;
    
    console.log(a);
    return (
        <div>
        <div className='Intern-single-category1'>   
            <img className='company-image1 border-4 border-slate-300 p-1'  src={image} alt="" />  <br />    
        </div> 
            <div className='Intern-single-category2 px-10'>
                <div className='Intern-single-category3'>
                    <h4 className="text-xl font-bold">Intern Title: {Intern}</h4>
                    <p><span className='title2'>About Company:</span> <span>{description}</span></p> 
                    <p className='pt-5'><span className='title2'>Intern Description:</span> <span>{InternDescription}</span></p>  
                    <p><span className='title2'>Intern Category:</span> <span className='title3'>{category}</span></p>  
                    <p><span className='title2'>Intern Type:</span> <span className='title3'>{types}</span></p>  
                    <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>
                    <p><span className='title2'>Deadline:</span> <span className='title3'>{deadline}</span></p> 
                </div>
                <Link to={`/apply/${_id}`}><button className='btn btn-outline mt-10 mb-20'>Apply Now</button></Link>
            </div>
            
            
        </div>
    );
};

export default SingleIntern;