import { useLoaderData } from "react-router-dom";


const ViewApplicant = () => {
    const a = useLoaderData();
    console.log(a)
    return (
        <div>
            <div className="shadow-2xl m-8 p-4 border-4 flex flex-col items-center">
                <div className="mb-8">
                    <img className="w-40 h-44 rounded-lg border-4 border-slate-400" src={a.imageApplicant} alt="Applicant Image" />
                </div>
                <div className=" text-xl">
                    <p><span className="font-bold">Name: </span>{a.name}</p>
                    <p><span className="font-bold">Number: </span>{a.pNumber}</p>
                    <p><span className="font-bold">Linkedin: </span>{a.linkedin}</p>
                    <p><span className="font-bold">Resume: </span>{a.aResume}</p>
                    <p><span className="font-bold">Address: </span>{a.address}</p>
                    <p><span className="font-bold">Education: </span>{a.categoryEdu}</p>
                    <p><span className="font-bold">Applied On: </span>{a.appliedOn}</p>
                    <p><span className="font-bold">Email: </span><span className="text-sm text-blue-500 font-bold">{a.applicantUserEmail}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ViewApplicant;