import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import '../UserDashboard.css'
const AppliedInterns = () => {

    const { user } = useContext(AuthContext);
    const [appliedInterns, setAppliedInterns] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/applyUserEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppliedInterns(data))
    }, [user?.email])

    return (
        <div>
            {
                appliedInterns.length === 0 ?
                    <>
                        <h2 className='text-center mt-24 text-2xl font-bold bg-red-200 py-10'>You did not apply any Intern yet.</h2>
                    </>
                    :
                    <>
                        {
                            appliedInterns.map(x => <div
                                key={x._id}
                            >
                                <div className="shadow-2xl border-4 p-8 m-8 InternAppliedDashboard">
                                    <div className="InternAppliedDashboard-intern">
                                        <img className="h-48 w-72" src={x.image} alt="" />
                                        <p className="font-bold text-xl mb-5"><span>Applied On:</span> {x.appliedOn}</p>
                                        <p><span className="font-bold">Intern Types: </span>{x.jTypes}</p>
                                        <p><span className="font-bold">Deadline: </span>{x.jDeadline}</p>
                                        <p><span className="font-bold">Category: </span>{x.jCategory}</p>
                                        <p><span className="font-bold">Contact with company: </span><span className="text-sm font-bold text-blue-400">{x.adminEmail}</span></p>
                                    </div>

                                    <div className="InternAppliedDashboard-intern border-l-4 pl-2">
                                        <img className="h-48 w-44" src={x.imageApplicant} alt="" />
                                        <p className="font-bold text-xl mb-5"><span></span> {x.name}</p>
                                        <p><span className="font-bold">Linkedin: </span>{x.linkedin}</p>
                                        <p><span className="font-bold">Resume: </span>{x.aResume}</p>
                                        <p><span className="font-bold">Address: </span>{x.address}</p>
                                        <p><span className="font-bold">Email: </span><span>{x.applicantEmail}</span></p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </>
            }
        </div>
    );
};

export default AppliedInterns;