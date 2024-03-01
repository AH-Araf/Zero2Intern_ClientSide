import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import { MdLibraryAdd, MdBookmarkAdded, MdManageHistory } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { LuTally4 } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdBookmarks } from "react-icons/io";
import { CiSquareMore } from "react-icons/ci";
import { AuthContext } from "../../providers/AuthProvider";
import Clock from "../../Pages/About/Clock";

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    // console.log(user.email)

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // Fetch user data from the API
        axios.get(`https://zero2intern.onrender.com/email?email=${user?.email}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, [user?.email]);
    console.log(userData)
    const isAdmin = userData.some(a => a.role === "admin");


    const [intern, setIntern] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/userProfileEmail?applicantUserEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setIntern(data))
    }, [user?.email])



    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content "> {/* flex flex-col items-center justify-center */}
                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>Open Dashboard</span>
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side" data-aos="fade-right">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 min-h-full bg-gray-600 text-white border-e-8 border-green-300">

                        {
                            isAdmin ? (
                                <>
                                    <li><NavLink to="/dashboard/AddAnIntern"><MdLibraryAdd /> Add An Intern</NavLink></li>
                                    <li><NavLink to="/dashboard/AddedInterns"><MdBookmarkAdded /> Added Interns</NavLink></li>
                                    <li><NavLink to="/dashboard/AllApplicant"><LuTally4 /> All Applicant</NavLink></li>
                                    <li><NavLink to="/dashboard/ManageApplicant"><MdManageHistory /> Manage Applicant</NavLink></li>
                                    <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                                </>
                            ) : (
                                <>
                                    {
                                        intern.length === 0 ?
                                            <>
                                                <div className="flex flex-col items-center justify-center  mb-8">
                                                        <p className='text-md font-bold text-green-400'>Create Profile First</p>
                                                </div>
                                                    <div className="divider"></div>
                                            </>
                                            :
                                            <>
                                                {
                                                    intern.map(x => <div
                                                        key={x._id}
                                                    >
                                                        <div className="flex flex-col items-center justify-center  mb-8">
                                                            <img className='h-20 w-20 rounded-full border-2 border-green-500' src={x.uImage} alt="" />
                                                            <p className='text-md font-bold text-green-400'>{x.uName}</p>
                                                            <p className='font-bold text-green-400'>{x.ApplicantEmail}</p>
                                                        </div>
                                                        <div className="divider"></div>
                                                    </div>)
                                                }
                                            </>
                                    }
                                    <li><NavLink to="/dashboard/UserProfile"><CgProfile /> User Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/AppliedInterns"><IoMdBookmarks /> Applied Interns</NavLink></li>
                                    <li><NavLink to="/dashboard/ApplyMore"><CiSquareMore /> Apply More</NavLink></li>
                                    <li><NavLink to="/"><HiOutlineHome /> Back To Home</NavLink></li>
                                    
                                </>
                            )
                        }
                        
                        <div className=" mt-10">
                            <Clock></Clock>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
