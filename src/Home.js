import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    let [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        {/* SETTIMEOUT just for showcase purpose */}
        setTimeout(() => {
            fetch('http://localhost:7000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                })
        }, 2000);

    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {!isPending && <BlogList blogs={blogs} title="All blogs" />}
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
