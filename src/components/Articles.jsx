import { useEffect, useState } from "react";
import { getAllArticles } from "./api";

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getAllArticles().then((response)=>{
            setArticles(response)
        })
    },[])

};



export default Articles;