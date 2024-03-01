import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AllApplicant = () => {
    const { user } = useContext(AuthContext);
    const [allApplicant, setAllApplicant] = useState();
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/comEmail?adminEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllApplicant(data))
    }, [user?.email])
    console.log(allApplicant)
    return (
        <div>
            <h1 className="text-xl py-2 font-bold text-center bg-slate-300">Total Applicant: {allApplicant?.length}</h1>
            {
                allApplicant?.map(a => <div
                    key={a._id}
                >
                    <div className="shadow-2xl my-8 p-4 border-4 AddedInternsMainSection">
                        <div className="AddedInternsMainSection2">
                            <img className="w-40 h-44 rounded-lg border-4 border-slate-400" src={a.imageApplicant} alt="Applicant Image" />
                        </div>
                        <div className="AddedInternsMainSection2">
                            <p><span className="font-bold">Name: </span>{a.name}</p>
                            <p><span className="font-bold">Applied On: </span>{a.appliedOn}</p>
                            <p><span className="font-bold">Education: </span>{a.categoryEdu}</p>
                            <p><span className="font-bold">Email: </span><span className="text-sm text-blue-500 font-bold">{a.applicantUserEmail}</span></p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllApplicant;