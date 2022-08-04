import React,{useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "./api/axios";


const dbUrl = "https://my-json-server.typicode.com/Nasiopars/test-vite-preload/db";

const LinkEndPointPage = ()=>{
    // const [isLoading, setIsLoading] = useState(false);
    const {linkId} = useParams();
    const [links, setLinks] = useState([]);

    useEffect(()=>{
        const getLinks = async ()=>{
            try{
              const response = await axios.get(dbUrl);
              const datas = response.data.links;
              setLinks(datas);
            }catch(error){
              if (!error?.response){
                  setErrMsg('پاسخی از سمت سرور دریافتا نشد');
              }
              console.log(error);
            }
        }
        setTimeout(getLinks, 1);
       
    },[]);

    const renderLink = (linksState,id)=>{
        const result = linksState.map(link=>{
            if(link.id == id){
              return <div key={link.id} className="card">
                <h2>{link.title}</h2>
                <h3>id : {link.id}</h3>
                <p className="para">{link.description}</p>
                <Link to="/">♠ بازگشت به خانه ♠</Link>
            </div>
            }
        })
        return result;
      }

    return (
        <>   
            {renderLink(links,linkId)}
            
        </> 
      );
}
export default LinkEndPointPage;