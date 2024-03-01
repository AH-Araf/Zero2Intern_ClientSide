import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SingleManageApplicant = ({ a }) => {
    const { interns, skill, category, types, _id, image } = a;
    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/jobId?jId=${_id}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [_id])
    return (
        <div className='m-6 p-6 border-2 AddedInternsMainSection'>

            <div className='AddedInternsMainSection2'>
                <img className='company-image' src={image} alt="" />  <br />
                <h4 className="title">Intern Title: {interns}</h4>
                <div>
                    <p><span className='title2'>Intern Category:</span> <span className='title3'>{category}</span></p>
                    <p><span className='title2'>Intern Type:</span> <span className='title3'>{types}</span></p>
                    <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>
                </div>
            </div>

            <div className=' AddedInternsMainSection2'>
                <h1 className='text-center mb-4 border-b-4 font-bold bg-slate-200 border-green-300'>Applicant For This Post</h1>
                <div className=' overflow-y-auto h-56 ...'>
                    {
                        apply.map(x => <div
                            key={x._id}
                        >
                            <div className='p-2 m-2 grid grid-cols-2 bg-teal-100'>
                                <div>
                                    <div ><img className='h-24 w-20 border-4 border-slate-400' src={x.imageApplicant} alt="" />  <br /></div>
                               
                                </div>
                                <div className="text-sm">
                                    <h1><span className="font-bold">Name: </span>{x.name} </h1>
                                    <h1><span className="font-bold">Number: </span>{x.pNumber} </h1>
                                    <h1><span className="font-bold">Email:</span>{x.applicantEmail} </h1>
                                    <Link to={`/applicant/${x._id}`}><button className='mt-4 font-bold text-blue-600'>View Applicant Details</button></Link>
                                </div>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleManageApplicant;