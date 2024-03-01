import { NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../../../../src/assets/Logo/a.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-green-100 text-green-900">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        {/* lg:hidden */}
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-60">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/getAllIntern">Intern</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/dashboard/adminhome">Dashboard</NavLink></li>
                            {
                                user ? <>
                                    <div className="flex justify-center items-center font-bold gap-4 bg-green-300 px-4 rounded-2xl">
                                        <button className="" onClick={handleLogOut}>LogOut</button>
                                        <p>{user?.displayName}</p>
                                    </div>
                                </> : <>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </>
                            }

                        </ul>
                    </div>
                    <img className="h-12 w-20 bg-slate-700" src={logo} alt="" />
                </div>


                {/* Large Device navbar-center*/}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/getAllIntern">Intern</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/dashboard/adminhome">Dashboard</NavLink></li>


                        {
                            user ? <>
                                <div className="flex justify-center items-center font-bold gap-4 bg-green-300 px-4 rounded-2xl">
                                    <button className="" onClick={handleLogOut}>LogOut</button>
                                    <p>{user?.displayName}</p>
                                </div>
                            </> : <>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};


export default NavBar;
