import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SingleManageApplicant from "./SingleManageApplicant";

const ManageApplicant = () => {

    const { user } = useContext(AuthContext);
    const [interns, setInterns] = useState([])
    useEffect(() => {
        fetch(`https://zero2intern.onrender.com/adminEmail?adminEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setInterns(data))
    }, [user?.email])

    return (

        <div>
            {
                interns.length === 0 ?
                    <>
                        <><p className="text-2xl text-center font-bold bg-red-300 my-10 py-10">You have not posted any intern</p></>
                    </>
                    :
                    <>{
                        interns.map(a => <SingleManageApplicant
                            key={a._id}
                            a={a}
                        >
                        </SingleManageApplicant>)
                    }</>
            }
        </div>
    );
};

export default ManageApplicant;