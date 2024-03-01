import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from 'react-toastify';
import './AddAnIntern.css'
import Swal from "sweetalert2";

const AddAnIntern = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;
    const { user } = useContext(AuthContext);

    const handleAddIntern = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const intern = {
                        Intern: data.Intern,
                        description: data.description,
                        InternDescription: data.InternDescription,
                        skill: data.skill,
                        category: data.category,
                        deadline: data.deadline,
                        types: data.types,
                        image: imgData.data.url,
                        adminEmail: user.email,
                    };

                    fetch('https://zero2intern.onrender.com/interns', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(intern)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            // Use SweetAlert for a nicer notification
                            Swal.fire({
                                title: 'Intern Added Successfully',
                                icon: 'success',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });

                            // You can navigate or perform any other actions here
                            navigate('/dashboard/AddedInterns');
                        });
                }
            });
    };



    return (
        <div className="">
            <h2 className="text-3xl bg-slate-300 text-center p-2">Add Internship Here</h2>

            <form className="flex flex-col items-center" onSubmit={handleSubmit(handleAddIntern)}>
                <section className="main-section">
                    <section className="second-section">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Intern Title</span></label>
                            <input type="text" {...register("Intern", {
                                required: "Intern Title is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.Intern && <p className='text-red-500'>{errors.Intern.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Company Description</span></label>
                            <input type="text" {...register("description", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Intern Description</span></label>
                            <input type="text" {...register("InternDescription", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.InternDescription && <p className='text-red-500'>{errors.InternDescription.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Skills required</span></label>
                            <input type="text" {...register("skill", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.skill && <p className='text-red-500'>{errors.skill.message}</p>}
                        </div>
                    </section>

                    <section className="second-section">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Application Deadline</span></label>
                            <input placeholder="Ex- 10 January 2024" type="text" {...register("deadline", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.deadline && <p className='text-red-500'>{errors.deadline.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Intern Category</span></label>
                            <select
                                {...register('category')}
                                className="select input-bordered w-full max-w-xs">
                                {<option>Organization</option>}
                                {<option>IT-Support</option>}
                                {<option>Government</option>}
                                {<option>Semi-Government</option>}
                                {<option>NGO</option>}
                                {<option>Private-Firm</option>}
                                {<option>Agencies</option>}
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Intern Types</span></label>
                            <select
                                {...register('types')}
                                className="select input-bordered w-full max-w-xs">
                                {<option>Remote</option>}
                                {<option>On-site</option>}
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Companys Logo or Image</span></label>
                            <input type="file" {...register("image", {
                                required: "Image is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                    </section>
                </section>

                <input onClick={toast} className='btn btn-accent w-full mt-4' value="Add Intern" type="submit" />
            </form>

        </div>
    );
};

export default AddAnIntern;