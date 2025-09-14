import axios from 'axios';

async function getBlogs(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return res.data;
}
export default async function Blog() {
    const blogs = await getBlogs();
    return <div>
        <h1>Blog Page</h1>
        {blogs.map((blog: any) => <Todo key={blog.id} id={blog.id} title={blog.title} completed={blog.completed} />)}
    </div>;
}

interface TodoProps{
    id: number;
    title: string;
    completed: boolean;
}

function Todo({id, title, completed}: TodoProps){
    return <>
        <hr />
        <h1>Todo ID: {id}</h1>
        <h2>{title}</h2>
        <p>{completed ? "Completed" : "Not Completed"}</p>
    </>
}