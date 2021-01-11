import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    let [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        {/* SETTIMEOUT just for showcase purpose */}
        setTimeout(() => {
            fetch('http://localhost:7000/blogss')
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that ressource')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setIsPending(false);
                    setError(err.message);
                })
        }, 2000);

    }, []);

    return (
        <div className="home"> 
            {isPending && <div>Loading...</div>}
            {!isPending && <BlogList blogs={blogs} title="All blogs" />}
            {error && <div>{error}</div>}
        </div>
    );
}

export default Home;


//<button onClick={() => {handleClickAttr('Mario')}}>Click here</button>
//const handleClickAttr = (name) => {
//  console.log(name);
//}   

//<BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" handleDelete={handleDelete}/>            


//const handleDelete = (id) => {
//    const newBlogs = blogs.filter((blog) => blog.id !== id);
//    setBlogs(newBlogs);
//}
