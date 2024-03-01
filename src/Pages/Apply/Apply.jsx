import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import './Apply.css'
import FinalApply from "./FinalApply";


const Apply = () => {
    const a = useLoaderData()
    const { Intern, description, InternDescription, skill, category, types, image, deadline } = a;

    const { user } = useContext(AuthContext);
    const [apply, setApply] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/userProfileEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setApply(data))
    }, [user?.email])

    return (
        <section className="InternFinalApplyMainSection">
            <div className='InternFinalApplyMainSection-intern'>
                <div className='bg-red-50 p-5'>
                    <div className="flex justify-center mb-10">
                        <img className='company-image1 border-4 border-slate-300 p-1' src={image} alt="" />  <br />
                    </div>
                    <h4 className="text-xl font-bold">Intern Title: {Intern}</h4>
                    <p><span className='title2'>About Company:</span> <span>{description}</span></p>
                    <p className='pt-5'><span className='title2'>Intern Description:</span> <span>{InternDescription}</span></p>
                    <p><span className='title2'>Intern Category:</span> <span className='title3'>{category}</span></p>
                    <p><span className='title2'>Intern Type:</span> <span className='title3'>{types}</span></p>
                    <p><span className='title2'>Skills:</span> <span className='title3'>{skill}</span></p>
                    <p><span className='title2'>Deadline:</span> <span className='title3'>{deadline}</span></p>
                </div>
            </div>

            <div className="InternFinalApplyMainSection-can">
                {
                    apply.length === 0 ?
                        <>
                            <div className="text-center my-10 bg-red-200">
                                <h2 className='text-xl font-bold'>First create Intern-Profile, then apply.</h2>
                                <Link className="font-bold text-sm text-blue-600" to='/dashboard/UserProfile'>Create Profile</Link>
                            </div>
                        </>
                        :
                        <>
                            {
                                apply.map(x => <FinalApply
                                    key={x._id}
                                    x={x}
                                >
                                </FinalApply>)
                            }
                        </>
                }
            </div>

        </section>

    );
};

export default Apply;