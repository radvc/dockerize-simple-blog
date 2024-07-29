import { useState, useEffect } from "react";
import axios from 'axios';
import ArticleComponent from "../components/ArticleComponent";
import { Link } from 'react-router-dom';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/posts').then(function (response){
            const { data } = response; 
            setArticles(data);
        });
    }, []);

    return (
        <div>
            <h1>Blog App</h1>
            <hr />
            {articles.map((article, index) => {
                return (
                    <ArticleComponent index={index} article={article} />
                );
            })}
            <Link to="/new-article">+ New Article</Link>
        </div>
        
    )
}

export default Home;