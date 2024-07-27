import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [article, setArticle] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts/${id}`).then(function (response){
            console.log(response)
            const { data } = response; 
            setArticle(data);
        });
    }, []);

    function handleDelete() {
        axios.delete(`http://127.0.0.1:8000/api/posts/${id}/delete`).then(function(response) {
            console.log(response);
            navigate('/');
        });
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <h5>Author: {article.author}</h5>
            <hr />
            <Link to={`/edit/${id}`}>Edit</Link>
            <br />
            <Link onClick={handleDelete}>Delete</Link>
        </div>
        
    )
}

export default Home;