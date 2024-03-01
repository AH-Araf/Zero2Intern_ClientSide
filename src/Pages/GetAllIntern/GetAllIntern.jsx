import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import InternCategory from "./InternCategory";


const GetAllIntern = () => {
    const interns = useLoaderData();
    const [searchTerm, setSerachTerm] = useState('')

    return (
        <div>

        <div className='s-box-div'>
            <input
                className='search-box'
                type="text"
                placeholder='Search Interns'
                onChange={event => {
                    setSerachTerm(event.target.value)
                }}
            />
        </div>


        <div className='display-flex m-3 all-Interns'>

            {

                interns.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.Intern.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map(a => <InternCategory
                    key={a._id}
                    a={a}
                >
                </InternCategory>)
            }

        </div>
    </div>
    );
};

export default GetAllIntern;