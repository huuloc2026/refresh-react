import { useEffect, useState } from 'react'

export interface IPOST {
    id:number,
    title:string
}
const UEFRefresh = () => {
    const [count,setCount] = useState(1)
    const [posts, setPost] = useState<IPOST[]>([]);
    
    useEffect(() => {
      console.log("re-render");
      fetch("https://jsonplaceholder.org/posts")
        .then((res) => res.json())
        .then((post) => setPost(post));
        return () => {
            
        }
    }, [count]);
  return (
    <div>
        <input></input>
        <br/>
        {count}
        <button onClick={()=>setCount(count+1)}>Click</button>
        <h1>Post:</h1>
        <div>{posts.map(post=>{
            return <li key={post.id}>{post.title}</li>
        })}</div>
    </div>
  )
}

export default UEFRefresh