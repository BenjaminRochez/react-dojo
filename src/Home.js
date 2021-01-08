import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    //let name = 'mario';
    //const [name, setName] = useState('mario');

    /*const handleClick = () => {
        setName('Luigi');
        console.log(name);
    }*/

    

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    useEffect(() => {
        console.log('changes');
    }, []);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>            
        </div>
    );
}

export default Home;


//<button onClick={() => {handleClickAttr('Mario')}}>Click here</button>
//const handleClickAttr = (name) => {
//  console.log(name);
//}   

//<BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" handleDelete={handleDelete}/>            