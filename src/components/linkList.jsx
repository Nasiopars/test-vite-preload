import React,{useState , useEffect} from "react"
// import { Link } from "react-router-dom"
import axios from "./api/axios";

const dbUrl = "https://my-json-server.typicode.com/Nasiopars/test-vite-preload/db";

const LinkList = () => {
    // const [links, setLinks] = useState(null);


    useEffect(()=>{
        const getLinks = async ()=>{
            try{
                const response = await axios.get(dbUrl);
                console.log(response)
                // setLinks(response.data);

            }catch(error){
                console.log(error)
            }
        }
        getLinks()
    },[])
    return (
        <div>
            {/* {links} */}
        </div>
    )
}

export default LinkList;