import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/posts/${id}`).then(function (response){
            const { data } = response; 
            setFormData({...formData, title: data.title, body: data.body, author: data.author});
        });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.patch(`/api/posts/${id}/update`, formData).then(response => {
            console.log(response);
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
                <input type="submit" value="Update" />
                <br/>
            </form>
        </div>
        
    )
}

export default Home;