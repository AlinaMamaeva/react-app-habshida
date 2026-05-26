import {  useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { Link } from "react-router-dom";

export default function ArticlesList() {
 const [articles, setArticles]= useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [page, setPage] = useState(1);

 useEffect(()=> {
    setLoading(true);

    getArticles(page)
    .then((res)=> {
        setArticles(res.data.articles);
    })
    .catch(()=> {
        setError("Error loading articles");
    })
    .finally(()=>{
        setLoading(false)
    });
 },[page]);

 if(loading) return <p>Loading...</p>;
 if(error) return <p>{error}</p>;

 return(
    <div className="container">
        <h1>Articles</h1>
        {articles.map((a) => (
            <div  key={a.slug}>
                <Link to={`/articles/${a.slug}`}>
           <h2 className="article-list" >{a.title}</h2>
                </Link>
                </div>
        ))}

<div>

    <button disabled={page === 1} onClick={()=> setPage(page-1)}>
        Prev
    </button>
    <span> Page{page}</span>

    <button onClick={() =>setPage(page+1)}>Next</button>
</div>


    </div>
 )
      
}