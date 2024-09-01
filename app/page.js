
import Link from 'next/link';

const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
const posts = await res.json();

export default async function HomePage(){
  return(
    <main>
      <h1> BLOG POSTS</h1>
      <ul>
        {posts.map(post=>(
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
            <h2>{post.title}</h2></Link>
          </li>
        ))}
      </ul>
      <Link href="/new">
      <button>Add New Post</button></Link>
    </main>
  )
} 