import {useState,useEffect} from 'react';
export function usePostTitle(){
    const [post,setPost] = useState({})
    async function getPost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json()
        setPost(data)
    }
    useEffect(()=>{
        getPost();
    },[])

    return post.title;
}

export function useFetch(url){
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    async function fetchData(){
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData();
    },[url])

    return {
        data,
        loading
    }
}