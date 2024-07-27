import { Link } from 'react-router-dom';

function Article({ index, article}) {
    return (
        <div key={index}>
            <h3><Link to={`show/${article.id}`}>{article.title}</Link></h3>
            <p>{article.body}</p>
            <h5>{article.author}</h5>
            <hr />
        </div>
    )
}

export default Article;