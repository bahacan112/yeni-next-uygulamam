// app/blog/[id]/page.js
"use client";

import { useParams } from 'next/navigation';

const posts=[
    {id:1,title:'First Post',content:'This is First Post'},
    {id:2,title:'Second Post',content:'This is Second Post'},
    {id:3,title:'Third  Post',content:'This is Third Post'},,
    {id:4,title:'Four  Post',content:'This is Four   Post'}
  ]

export default function BlogPostPage() {
  const params = useParams();
  const post = posts.find(post => post.id == params.id);

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
