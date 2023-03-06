import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";
const SearchBox=()=>{
    const navigate= useNavigate();
    

    console.log(navigate)
    const {search:queryString}=useLocation();
    const [search,setSearch]=useState("");

    useEffect(()=>{
        
    },[queryString]);
    //if the query string will change then this function will execute
    const handleInput=e=>{
        setSearch(e.target.value);
    }
    const handleFormSubmission = e =>{
        e.preventDefault();
        navigate({
            search:`search=${search}`
        })
    }
    return(
        <Fragment>
            <form className="form-search" onSubmit={handleFormSubmission}>
          <input className="search" type="text"
            id="search" 
            placeholder="Enter book name, category" 
            value={search} onChange={handleInput}
            />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
              height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </form>
        </Fragment>
    )
}
export default SearchBox;