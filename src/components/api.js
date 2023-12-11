import axios from "axios";

const api = axios.create({ baseURL: "https://robs-nc-news.onrender.com" });

const getAllArticles = () => {

    return (
    api.get('/api/articles').then((response)=>{
        console.log(response.data.articles)
    })
        )

};

export {getAllArticles}