import { Link } from "react-router-dom";



const ApplyMore = () => {
    return (
        <div className="flex justify-center my-20">
            <Link className="btn w-2/3  btn-success font-bold text-xl text-white" to='/getAllIntern'>Apply More</Link>
        </div>
    );
};

export default ApplyMore;