import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/LoginImg/3-Login-Page-Screen.jpg";
import Swal from "sweetalert2";

const PleaseLogin = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "User Login Successful.",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                });

                
                const redirectPath =
                    navigate.state?.from?.pathname || "/";

               
                navigate(redirectPath, { replace: true });
            })
            .catch((error) => {
                console.error("Login error:", error);
                setError("Invalid email or password. Please try again.");
            });
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img
                        className="card shadow-2xl bg-base-100"
                        src={LoginImg}
                        alt=""
                    />
                </div>

                <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        {error && (
                            <div className="text-red-500 mb-4">{error}</div>
                        )}

                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                        />
                        <p>
                            <small>
                                New Here?{" "}
                                <Link to="/register">
                                    <span className="text-blue-700 font-bold">
                                        Create an account
                                    </span>
                                </Link>
                            </small>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PleaseLogin;
