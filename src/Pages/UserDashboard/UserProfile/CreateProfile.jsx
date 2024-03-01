import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CreateProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const { user } = useContext(AuthContext);
    const [intern, setIntern] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/userProfileEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setIntern(data))
    }, [user?.email])
    console.log(user.email)
console.log(intern)

    const handleDelete = id => {
        // Use SweetAlert for a confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user profile!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with deletion
                fetch(`https://zero2intern.onrender.com/userProfileDelete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            // Use SweetAlert for a success notification
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'User profile has been deleted.',
                                icon: 'success',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });

                            // Update state after deletion
                            const remaining = intern.filter(odr => odr._id !== id);
                            setIntern(remaining);
                        }
                    })
            }
        });
    };



    const handleApply = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        uName: data.name,
                        ApplicantEmail: data.applicantEmail,
                        uPNumber: data.pNumber,
                        ulinkedin: data.linkedin,
                        uAddress: data.address,
                        uCategoryEdu: data.categoryEdu,
                        uImage: imgData.data.url,
                        uaResume: data.aResume,
                        applicantUserEmail: user.email
                    }
                    fetch('https://zero2intern.onrender.com/userProfile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            alert(`Intern Profile Created Successfully`);
                            navigate('/')
                        })
                }
            })
    }

    return (
        <div>
            {
                intern.length === 0 ?
                    <>
                        <div className='flex flex-col justify-center items-center'>



                            <div className='flex flex-col justify-center items-center'>
                                <h2 className="text-2xl px-6 mb-6 home-title">Create Your Intern Profile</h2>
                                <div className='add-interns-container'>


                                    <form onSubmit={handleSubmit(handleApply)}>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Your Name</span></label>
                                            <input type="text" {...register("name", {
                                                required: "Name is Required"
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Your Email</span></label>
                                            <input type="email" {...register("applicantEmail", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.applicantEmail && <p className='text-red-500'>{errors.applicantEmail.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Phone Number</span></label>
                                            <input type="number" {...register("pNumber", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.pNumber && <p className='text-red-500'>{errors.pNumber.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Linkedin Profile Link</span></label>
                                            <input type="text" {...register("linkedin", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.linkedin && <p className='text-red-500'>{errors.linkedin.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Resume <span className='text-slate-400'>(Drive Link)</span></span></label>
                                            <input type="text" {...register("aResume", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.aResume && <p className='text-red-500'>{errors.aResume.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Address</span></label>
                                            <input type="text" {...register("address", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Education Qualification</span></label>
                                            <input type="text" {...register("categoryEdu", {
                                                required: true
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.categoryEdu && <p className='text-red-500'>{errors.categoryEdu.message}</p>}
                                        </div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label"> <span className="label-text">Your Image</span></label>
                                            <input type="file" {...register("image", {
                                                required: "Image is Required"
                                            })} className="input input-bordered w-full max-w-xs" />
                                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                        </div>
                                        <input className='btn btn-accent w-full mt-4' value="Create" type="submit" />
                                    </form>
                                </div>
                            </div>


                        </div>
                    </>

                    :
                    <>
                        {
                            intern.map(x => <div
                                key={x._id}
                            >
                                <div className='flex flex-col items-center py-10 bg-emerald-100'>
                                    <div className='flex flex-col items-center '>
                                        <img className='h-48 w-40 border-4 border-green-300' src={x.uImage} alt="" />
                                        <p className='text-xl font-bold pb-10'>{x.uName}</p>
                                    </div>

                                    <div className='border-4 border-green-300 p-4'>
                                        <p><span className='font-bold'>Email: </span> {x.ApplicantEmail}</p>
                                        <p><span className='font-bold'>Number: </span> {x.uPNumber}</p>
                                        <p><span className='font-bold'>LinkedIn: </span> {x.ulinkedin}</p>
                                        <p><span className='font-bold'>Address: </span> {x.uAddress}</p>
                                        <p><span className='font-bold'>Education: </span> {x.uCategoryEdu}</p>
                                        <p><span className='font-bold'>Resume Link: </span> {x.uaResume}</p>
                                    </div>

                                    <button onClick={() => handleDelete(x._id)} className='btn btn-error mt-5 d-button'>Delete & Create A New Profile</button>
                                </div>
                            </div>)
                        }
                    </>

            }

        </div>





    );
};

export default CreateProfile;