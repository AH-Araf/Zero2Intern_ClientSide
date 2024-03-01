import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";


const FinalApply = ({ x }) => {
    const { uName, ApplicantEmail, uPNumber, ulinkedin, uAddress, uCategoryEdu, uImage, uaResume, applicantUserEmail } = x;
    const a = useLoaderData()
    const { Intern, _id, category, types, image, deadline, adminEmail } = a;

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const handleApply = data => {
        const doctor = {
            name: uName,
            applicantEmail: ApplicantEmail,
            pNumber: uPNumber,
            linkedin: ulinkedin,
            aResume: uaResume,
            address: uAddress,
            categoryEdu: uCategoryEdu,
            image: image,
            imageApplicant: uImage,
            adminEmail: adminEmail,
            appliedOn: Intern,
            jTypes: types,
            jId: _id,
            jCategory: category,
            jDeadline: deadline,
            applicantUserEmail: applicantUserEmail
        }

        fetch('https://zero2intern.onrender.com/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert(`Applied Successfully`);
                navigate('/dashboard/AppliedInterns')
            })

    }

    return (
        <div>
            <div className='formApply'>
                <h2 className="text-3xl text-center bg-slate-400 text-white py-2">Apply Now</h2>
                <div className='add-jobs-container'>
                    <form onSubmit={handleSubmit(handleApply)}>
                        <div className=''>
                            <div className='flex bg-emerald-200 items-center justify-center py-3'>
                                <img className='h-48 w-44 ' src={uImage} alt="" />  <br />
                            </div>
                            <div className='bg-emerald-50 p-5'>
                                <h2 className='text-xl font-bold text-center mb-4'>Applicant Information</h2>
                                <p><span className='font-bold'>Name:</span> <span className=''>{uName}</span></p>
                                <p><span className='font-bold'>Email:</span> <span className=''>{ApplicantEmail}</span></p>
                                <p><span className='font-bold'>Phone:</span> <span className=''>{uPNumber}</span></p>
                                <p><span className='font-bold'>Linkedin Profile:</span> <span className=''>{ulinkedin}</span></p>
                                <p><span className='font-bold'>Resume Link:</span> <span className=''>{uaResume}</span></p>
                                <p><span className='font-bold'>Address:</span> <span className=''> {uAddress} </span></p>
                                <p><span className='font-bold'>Education:</span> <span className=''>{uCategoryEdu}</span></p>
                            </div>
                        </div>
                        <input className='btn  w-full btn-abc mt-4' value="Apply" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FinalApply;