
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:7000/blogs');

    

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
