import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import './AddedInterns.css'


const AddedInterns = () => {

    const { user } = useContext(AuthContext);
    const [interns, setInterns] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/adminEmail?adminEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setInterns(data))
    }, [user?.email])

    const handleDelete = async id => {
        // Use SweetAlert for a confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this intern post!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            // Proceed with deletion
            const response = await fetch(`https://zero2intern.onrender.com/internDelete/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();

            console.log(data);
            if (data.deletedCount > 0) {
                // Use SweetAlert for a success notification
                await Swal.fire({
                    title: 'Deleted!',
                    text: 'Intern post has been deleted.',
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });

                // Update state after deletion
                const remaining = interns.filter(odr => odr._id !== id);
                setInterns(remaining);
            }
        }
    };


    return (
        <div>
            {
                interns.length === 0 ?
                    <><p className="text-2xl text-center font-bold bg-red-300 my-10 py-10">You have not posted any intern</p></>
                    :
                    <>
                        {
                            interns.map(a => <div
                                key={a._id}
                            >
                                <div className="AddedInternsMainSection m-10 p-4 border-4  shadow-2xl ...">
                                    <div className="AddedInternsMainSection2">
                                        <img className="h-32 w-52 border-4 border-green-300 shadow-xl ..." src={a.image} alt="Image Loading" />
                                        <p className="text-xl mb-4"><span className="font-bold">Title: </span>{a.Intern}</p>

                                    </div>

                                    <div className="AddedInternsMainSection2">
                                        <p><span className="font-bold">Skill: </span>{a.skill}</p>
                                        <p><span className="font-bold">Category: </span>{a.category}</p>
                                        <p className="text-red-600"><span className="font-bold">Deadline: </span>{a.deadline}</p>
                                        <p><span className="font-bold">Type: </span>{a.types}</p>
                                        <button onClick={() => handleDelete(a._id)} className='btn btn-error mt-5 d-button'>Delete Intern Post</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </>
            }
        </div>
    );
};

export default AddedInterns;