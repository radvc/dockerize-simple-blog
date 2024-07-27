import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        author: ""
    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/posts/`, formData).then(response => {
            const { data: { id } } = response;
            navigate(`/show/${id}`);
        });   
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <br />
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Body
                    <br />
                    <textarea name="body" value={formData.body} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Author
                    <br />
                    <input type="text" name="author" value={formData.author} onChange={handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Create" />
                <br/>
            </form>
        </div>
        
    )
}

export default Home;